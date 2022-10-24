"""
This file takes care of the communication between ATSAM development boards 
running OBC/ADCS software and a running YAMCS instance.
"""
from threading import Thread
from dataclasses import dataclass
from logging import config
import logging
import socket
from time import sleep
import yaml
import serial
from cobs import cobs


@dataclass
class Settings:
    """
    Attributes:
        yamcs_port_out: The port for sending TCs to MCU.
        obc_port: The port for sending TMs to OBC.
        adcs_port: The port for sending TMs to ADCS.
        can_bus_port: The port for sending TMs to CAN.
        usb_serial_0: The default port if the devboard is connected via USB cable directly.
        uart_serial_0: The default port if the devboard is connected via a UART-to-USB adapter.
        baud_rate: The usart rate for sending TCs the MCU.
        IP: The application IP for establishing connection.
        timeout: Read data from the serial port untl a \n is received or N=timeout seconds have passed.
        max_size: Max bytes to compose a TC.
        enabled/disabled: Used to enable/disable socket options
    """

    yamcs_port_out: int
    obc_port_in: int
    adcs_port_in: int
    canBus_port_in: int
    uart_serial_0: str
    usb_serial_0: str
    uart_serial_1: str
    uart_serial_2: str
    usb_serial_1: str
    usb_serial_2: str
    baud_rate: int
    IPv4: str
    serial_timeout: int
    max_tc_size: int
    socket_backlog_level: int
    enabled: int
    disabled: int


def clamp(n, smallest, largest):
    return max(smallest, min(n, largest))


def connect_to_port(settings: Settings, port: int) -> socket:
    """
    This function is used to connect to a TCP socket.
    If the processes initialized by this script are not terminated properly (this can happen
    if an exception occures),the TCP connections might not close. By enabling the REUSEADDR
    (reuse address) option, the script will try to reconnect to that previously opened port
    that is at a TIME_WAIT state.
    """
    logging.debug("Awaiting socket connection with YAMCS port " +
                 str(port) + "...")
    yamcs_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    yamcs_socket.setsockopt(
        socket.SOL_SOCKET, socket.SO_REUSEADDR, settings.enabled)
    try:
        yamcs_socket.bind((settings.IPv4, port))
    except OSError:
        logging.exception(
            "Port "
            + str(port)
            + " not closed (probably from previous script execution)."
        )
        exit(1)

    yamcs_socket.listen(settings.socket_backlog_level)
    yamcs_client, _ = yamcs_socket.accept()
    logging.debug("Connected to " + str(port))
    return yamcs_client


def mcu_client(settings: Settings, serial_port: str = None, yamcs_port_in: int = None):
    """

    Opens a new TCP stream socket.
    It listens to the specified serial port for TM messages.
    They usually come in the following form:
    '1801 [debug    ] New TM[3,25] message! 8 1 192 2 0 15 32 3 25 0 2 0 1 37 165 53 0 0 0 0 0 \n'
    This string is split after the "!", returning the actual packet.
    All the bytes after that are sent to YAMCS.
    If we try to convert the characters one by one from ASCII to integer, we will get something like:
    8 1 1 9 2 0 0 2 0 ... -> garbage
    So we need to parse a sequence of numbers as a single decimal.

    Note:
        If the debugging messages are altered, this script will have undetermined behavior, since
        it relies on the existence of the exclamation mark "!" to detect actual TMs being sent.

    Todo:
        * Incoming messages will mention the subsystem name right after [debug    ].
    """
    if yamcs_port_in is None:
        yamcs_port_in = settings.obc_port_in
    if serial_port is None:
        serial_port = settings.usb_serial_0

    tcp_client = connect_to_port(settings, yamcs_port_in)

    while True:

        try:
            ser = serial.Serial(
                serial_port,
                baudrate=settings.baud_rate,
                timeout=settings.serial_timeout,
            )

            # Read any messages already stored to the buffer.
            # If YAMCS receives this, it's gonna fail and the script will produce a TCP exception.
            ser.readline()

            while True:
                message = ser.readline()
                # not using decode("utf-8") since it will break printing (all new line characters will result in an new line)
                logging.info(f"{ser.name}: {message}")

                # finds exclamation mark ! in the byte array
                idx = message.find(0x021)
                if idx == -1:
                    continue

                dirty_packet = message[idx + 2:]
                packet = bytearray()
                packet_byte_decimal = 0
                for packet_byte in dirty_packet:
                    # if the next character is a space, add the number
                    if packet_byte == 0x020:
                        # Corrupted message: If this decimal ends up larger than 256 we are certain
                        # that corruption has occured since OBC sends 8 bit words.
                        clamp(packet_byte_decimal, 0, 255)

                        packet.append(packet_byte_decimal)
                        packet_byte_decimal = 0
                    else:
                        # convert from ascii to integer
                        packet_byte_int = packet_byte - 48
                        # actually translate the number. Each extra number added means the final is an order of magnitude bigger
                        packet_byte_decimal = packet_byte_decimal * 10 + packet_byte_int

                tcp_client.send(bytes(packet))
        except serial.SerialException:
            logging.warning(
                "No device is connected at port "
                + serial_port
                + ". Please connect a device."
            )
            sleep(5)


def yamcs_client(settings: Settings, serial_port: str = None):
    """
    Opens a new TCP stream socket.
    It listens to the socket for any TC messages.
    When they arrive, they are encoded using COBS and sent to the serial port.
    The devboard processes the TC when it receives the "\00" delimiter.
    """

    if serial_port is None:
        serial_port = settings.usb_serial_0

    tcp_client = connect_to_port(settings, settings.yamcs_port_out)

    while True:

        try:
            port = serial.Serial(
                port=serial_port,
                baudrate=settings.baud_rate,
                timeout=settings.serial_timeout,
            )
            while True:
                data, _ = tcp_client.recvfrom(settings.max_tc_size)
                logging.info("YAMCS: " + data.hex())

                encoded_data = cobs.encode(data)
                port.write(encoded_data)
                port.write(b"\x00")
        except serial.SerialException:
            logging.warning(
                "No device is connected at port "
                + serial_port
                + ". Please connect a device."
            )
            sleep(5)


if __name__ == "__main__":
    """
    Example setup of a thread listening to the ADCS serial port and sending messages to the corresponding YAMCS socket.
    When connecting more than one devices using the same protocol (UART \ USB),
    be careful of their corresponding serial port. Each new device is assigned the next available ID.
    For example, if a devboard is connected with a USB cable, the serial port will be /dev/ttyACM0.
    The next devboard connected via usb will be assigned to /dev/ttyACM1.
    If a third board is connected using a uart-to-usb adapter, the serial port will be /dev/ttyUSB0.

    Example:
        adcs_listener_thread = Thread(
            target=mcu_client,
            args=(
                settings,
                adcs_serial_port,
                settings.adcs_port_in,
            ),
        ).start()
    """

    # setup logging
    config.fileConfig("logging.conf")
    with open("settings.yaml", "r") as stream:
        try:
            data = yaml.safe_load(stream)
            settings = Settings(**data)
            logging.debug("Successfully read settings file.")
        except yaml.YAMLError:
            logging.exception("File reading error.")

    yamcs_listener_thread = Thread(target=yamcs_client, args=(settings,))
    yamcs_listener_thread.start()

    obc_serial_port = settings.usb_serial_0
    adcs_serial_port = settings.uart_serial_0
    can_serial_port = settings.uart_serial_1

    obc_listener_thread = Thread(
        target=mcu_client,
        args=(
            settings,
            obc_serial_port,
            settings.obc_port_in,
        ),
    )
    obc_listener_thread.start()

    adcs_listener_thread = Thread(
        target=mcu_client,
        args=(
            settings,
            adcs_serial_port,
            settings.adcs_port_in,
        ),
    ).start()

    can_listener_thread = Thread(
        target=mcu_client,
        args=(
            settings,
            can_serial_port,
            settings.canBus_port_in,
        ),
    ).start()
