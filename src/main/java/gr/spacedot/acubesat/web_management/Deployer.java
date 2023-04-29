package gr.spacedot.acubesat.web_management;

import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.yaml.snakeyaml.DumperOptions;
import org.yaml.snakeyaml.Yaml;

public class Deployer {
    public static void main(String[] args) {
        String dir = System.getProperty("user.dir");
        String yamlPath = dir + "/src/main/yamcs/etc/yamcs.yaml";
        String staticRoot = dir + "/src/main/frontend/webapp/dist/opsmci";
        Yaml yaml = new Yaml();
        Map<String, Object> existingYaml = new HashMap<>();
        DumperOptions options = new DumperOptions();
        options.setPrettyFlow(true);
        try (InputStream inputStream = new FileInputStream(yamlPath)) {
            existingYaml = yaml.load(inputStream);
        } catch (IOException e) {
            e.printStackTrace();
        }
        existingYaml.put("yamcs-web", Collections.singletonMap("staticRoot", staticRoot));
        try (FileWriter writer = new FileWriter(yamlPath)){
            yaml.dump(existingYaml, writer);
        }catch (IOException e){
            e.printStackTrace();
        }
    }
}
