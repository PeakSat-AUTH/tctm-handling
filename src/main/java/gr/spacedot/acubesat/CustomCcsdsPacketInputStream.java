package com.example.myproject;

import java.io.DataInputStream;
import java.io.IOException;
import java.io.InputStream;
import org.yamcs.tctm.PacketInputStream;
import org.yamcs.YConfiguration;

/**
 * Reads Transfer Frame CCSDS packets from an input stream:
 * first it reads 6 bytes transfer frame header and 6 bytes primary header, it derives the length from the last two bytes of the primary header and reads the remaining of the
 * data.
 * 
 * It also support a maxLength property to limit the size of the packet that is being read.
 *
 */
public class CustomCcsdsPacketInputStream implements PacketInputStream {
    DataInputStream dataInputStream;
    int maxPacketLength = 1500;

    @Override
    public void init(InputStream inputStream, YConfiguration args) {
        this.dataInputStream = new DataInputStream(inputStream);
        this.maxPacketLength = args.getInt("maxPacketLength", maxPacketLength);
    }

    @Override
    public byte[] readPacket() throws IOException {
        byte[] hdr = new byte[12];
        dataInputStream.readFully(hdr);
        int remaining = ((hdr[10] & 0xFF) << 8) + (hdr[11] & 0xFF) + 1;
        int packetLength = remaining + hdr.length;
        if (packetLength > maxPacketLength) {
            throw new IOException("Invalid packet read: "
                    + "packetLength (" + packetLength + ") > maxPacketLength(" + maxPacketLength + ")");
        }
        byte[] packet = new byte[packetLength];
        System.arraycopy(hdr, 0, packet, 0, hdr.length);
        dataInputStream.readFully(packet, hdr.length, remaining);
        return packet;
    }

    @Override
    public void close() throws IOException {
        dataInputStream.close();
    }
}