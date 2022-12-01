package com.example.myproject;

import java.io.EOFException;
import java.io.IOException;
import java.net.ConnectException;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.Socket;
import org.yamcs.utils.YObjectLoader;

import org.yamcs.ConfigurationException;
import org.yamcs.YConfiguration;
import org.yamcs.utils.StringConverter;
import org.yamcs.tctm.ccsds.AbstractTmFrameLink;
import org.yamcs.tctm.PacketInputStream;
import org.yamcs.tctm.CcsdsPacketInputStream;


/**
 * Receives telemetry fames via UDP. One UDP datagram = one TM frame.
 * 
 */
public class TcpTmFrameLink extends AbstractTmFrameLink implements Runnable {
    private volatile int invalidDatagramCount = 0;

    protected Socket tcptmSocket;
    protected String host;
    protected int port;
    protected long initialDelay;

    String packetInputStreamClassName;
    YConfiguration packetInputStreamArgs;
    PacketInputStream packetInputStream;
    //Thread tcpthread;
    
    String packetPreprocessorClassName;
    Object packetPreprocessorArgs;
    Thread thread;

    /**
     * Creates a new TCP Frame Data Link
     * 
     * @throws ConfigurationException
     *             if port is not defined in the configuration
     */

    @Override
    public void init(String instance, String name, YConfiguration config) throws ConfigurationException {
        super.init(instance, name, config);
        host = "localhost";
        port = config.getInt("port");
        initialDelay = 0;

        if (config.containsKey("packetInputStreamClassName")) {
            this.packetInputStreamClassName = config.getString("packetInputStreamClassName");
            this.packetInputStreamArgs = config.getConfig("packetInputStreamArgs");
        } else {
            this.packetInputStreamClassName = CcsdsPacketInputStream.class.getName();
            this.packetInputStreamArgs = YConfiguration.emptyConfig();
        }

    }

    protected void openSocket() throws IOException {
        InetAddress address = InetAddress.getByName(host);
        tcptmSocket = new Socket();
        tcptmSocket.setKeepAlive(true);
        tcptmSocket.connect(new InetSocketAddress(address, port), 1000);
        try {
            packetInputStream = YObjectLoader.loadObject(packetInputStreamClassName);
        } catch (ConfigurationException e) {
            log.error("Cannot instantiate the packetInput stream", e);
            throw e;
        }
        packetInputStream.init(tcptmSocket.getInputStream(), packetInputStreamArgs);
    }

    @Override
    public void doStart() {
        if (!isDisabled()) {
            doEnable();
        }
        notifyStarted();
    }


    @Override
    public void doStop() {
        if (thread != null) {
            thread.interrupt();
        }
        if (tcptmSocket != null) {
            try {
                tcptmSocket.close();
            } catch (IOException e) {
                log.warn("Exception got when closing the tm socket:", e);
            }
            tcptmSocket = null;
        }
        notifyStopped();
    }


    @Override
    /*public void run() {
        if (initialDelay > 0) {
            try {
                Thread.sleep(initialDelay);
                initialDelay = -1;
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return;
            }
        }

        while (isRunningAndEnabled()) {
            TmPacket tmpkt = getNextPacket();
            if (tmpkt == null) {
                break;
            }
            processPacket(tmpkt);
        }
    }*/

    //not sure about the offset

    public void run() {
        while (isRunningAndEnabled()) {
            try {
                if (tcptmSocket == null) {
                    openSocket();
                    log.info("Link established to {}:{}", host, port);
                }
                else{
                    //log.warn("Link 10014 already established");
                }
                /*byte[] packet = packetInputStream.readPacket();
                //tmSocket.receive(datagram);
                if (log.isTraceEnabled()) {
                    log.trace("Received datagram of length {}: {}", packet.length, StringConverter
                            .arrayToHexString(packet, 0, packet.length, true));
                }

                handleFrame(timeService.getHresMissionTime(), packet, datagram.getOffset()0,
                        packet.length);
                        */
            } catch (IOException e) {
                if (!isRunningAndEnabled()) {
                    break;
                }
                log.warn("exception {} thrown when reading from the UDP socket at port {}", port, e);
            } catch (Exception e) {
                //log.error("Error processing frame", e);
            }
        }
    }

    /*public TmPacket getNextPacket() {
        TmPacket pwt = null;
        while (isRunningAndEnabled()) {
            try {
                if (tcptmSocket == null) {
                    openSocket();
                    log.info("Link established to {}:{}", host, port);
                }
                byte[] packet = packetInputStream.readPacket();
                updateStats(packet.length);
                TmPacket pkt = new TmPacket(timeService.getMissionTime(), packet);
                pkt.setEarthRceptionTime(timeService.getHresMissionTime());
                pwt = packetPreprocessor.process(pkt);
                if (pwt != null) {
                    break;
                }
            } catch (IOException e) {
                if (isRunningAndEnabled()) {
                    String msg;
                    if (e instanceof EOFException) {
                        msg = "TM socket connection to " + host + ":" + port + " closed. Reconnecting in 10s.";
                    } else {
                        msg = "Cannot open or read TM socket " + host + ": " + port + ": "
                                + ((e instanceof ConnectException) ? e.getMessage() : e.toString())
                                + ". Retrying in 10 seconds.";
                    }
                    log.warn(msg);
                }
                forceClosedSocket();
                try {
                    Thread.sleep(10000);
                } catch (InterruptedException e1) {
                    Thread.currentThread().interrupt();
                    return null;
                }
            } catch (PacketTooLongException e) {
                log.warn(e.toString());
                forceClosedSocket();
            }
        }
        return pwt;
    }*/

    private void forceClosedSocket() {
        if (tcptmSocket != null) {
            try {
                tcptmSocket.close();
            } catch (Exception e2) {
            }
        }
        tcptmSocket = null;
    }

    @Override
    public void doDisable() {
        if (tcptmSocket != null) {
            try {
                tcptmSocket.close();
            } catch (IOException e) {
                log.warn("Exception got when closing the tm socket:", e);
            }
            tcptmSocket = null;
        }
        if (thread != null) {
            thread.interrupt();
        }
    }

    @Override
    public void doEnable() {
        thread = new Thread(this);
        thread.setName(this.getClass().getSimpleName() + "-" + linkName);
        thread.start();
    }

    @Override
    public String getDetailedStatus() {
        if (isDisabled()) {
            return String.format("DISABLED (should connect to %s:%d)", host, port);
        }
        if (tcptmSocket == null) {
            return String.format("Not connected to %s:%d", host, port);
        } else {
            return String.format("OK (%s) %nValid datagrams received: %d%nInvalid datagrams received: %d",host,
                    port, frameCount.get(), invalidDatagramCount);
        }
    }

    @Override
    protected Status connectionStatus() {
        return (tcptmSocket == null) ? Status.UNAVAIL : Status.OK;
    }
}
