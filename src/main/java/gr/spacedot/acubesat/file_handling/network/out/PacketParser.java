package gr.spacedot.acubesat.file_handling.network.out;


import gr.spacedot.acubesat.file_handling.enums.LocalPaths;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class PacketParser {

    private static final int PRIMARY_HEADER_SIZE = 6;

    private static final int SECONDARY_HEADER_SIZE = 5;

    private static final int HEADER_SIZE = PRIMARY_HEADER_SIZE + SECONDARY_HEADER_SIZE;

    private static final int DELIMITER = 0;

    private static final String[] names = {"Source path", "Source name", "Target path", "Target name"};

    /**
     * @param packet: a packet with the following structure:
     *                primary_header | secondary_header | data
     *                <p>
     *                primary_header: 6 bytes containing various data such
     *                as packet version number, packet type, application id etc
     *                <p>
     *                secondary_header: 5 bytes containing PUS version number (4 bits)
     *                spacecraft time reference status (4 bits), service type id (8 bits),
     *                message type id (8 bits) and message type counter (16 bits).
     */
    public void parsePacket(byte[] packet) {
        HashMap<String, String> paths = new HashMap<>();

        byte[] data = Arrays.copyOfRange(packet, HEADER_SIZE, packet.length);
        StringBuilder builder = new StringBuilder();
        int valuesCounter = 0;
        for (byte character : data) {
            if (character != DELIMITER)
                builder.append((char) character);
            else {
                paths.put(names[valuesCounter], builder.toString());
                builder = new StringBuilder();
                valuesCounter++;
            }
        }
        processPaths(paths);
    }

    public void processPaths(Map<String, String> paths) {
        String sourcePath = paths.get("Source path");
        String targetPath = paths.get("Target path");
        if (sourcePath.equals(LocalPaths.RESOURCES_PATH.toString())) {
            System.out.println("Source Path exists!");
        }
        if (targetPath.equals(LocalPaths.RECEIVED_PATH.toString())) {
            System.out.println("Target Path exists!");
        }

    }
}
