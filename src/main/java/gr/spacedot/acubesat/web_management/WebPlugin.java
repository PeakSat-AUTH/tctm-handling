package gr.spacedot.acubesat.web_management;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.yamcs.Plugin;
import org.yamcs.PluginException;
import org.yamcs.YConfiguration;
import org.yamcs.YamcsServer;
import org.yamcs.http.HttpServer;
import org.yamcs.logging.Log;
import org.yamcs.security.SystemPrivilege;
import org.yamcs.utils.FileUtils;
import org.yamcs.yarch.Bucket;
import org.yamcs.yarch.YarchDatabase;

import com.google.common.io.CharStreams;

public class WebPlugin implements Plugin {

    /**
     * Allows access to the Admin Area.
     * <p>
     * Remark that certain pages in the Admin Area may require further privileges.
     */
    public static final SystemPrivilege PRIV_ADMIN = new SystemPrivilege("web.AccessAdminArea");

    private Log log = new Log(getClass());

    @Override
    public void onLoad(YConfiguration config) throws PluginException {
        var yamcs = YamcsServer.getServer();
        yamcs.getSecurityStore().addSystemPrivilege(PRIV_ADMIN);

        String displayBucketName = config.getString("displayBucket");
        createBucketIfNotExists(displayBucketName);

        String stackBucketName = config.getString("stackBucket");
        createBucketIfNotExists(stackBucketName);

        var httpServer = yamcs.getGlobalService(HttpServer.class);

        // Deploy the website, for practical reasons we have three different
        // mechanisms. In order:
        // 1) Check a system property yamcs.web.staticRoot
        // 2) Check a property in yamcs.yaml
        // 3) Load from classpath (packaged inside yamcs-web)
        //
        // End-users should use (3). (1) and (2) make it possible to develop
        // on the web sources. (1) Allows doing so without needing to modify
        // the yamcs.yaml
        Path staticRoot;
        String staticRootOverride = System.getProperty("yamcs.web.staticRoot");
        if (staticRootOverride != null) {
            staticRoot = Paths.get(staticRootOverride);
            staticRoot = staticRoot.toAbsolutePath().normalize();
        } else if (config.containsKey("staticRoot")) {
            staticRoot = Paths.get(config.getString("staticRoot"));
            staticRoot = staticRoot.toAbsolutePath().normalize();
        } else {
            try {
                staticRoot = deployWebsiteFromClasspath();
            } catch (IOException e) {
                throw new PluginException("Could not deploy website", e);
            }
        }
        if (Files.exists(staticRoot)) {
            log.debug("Serving yamcs-web from {}", staticRoot);
        } else {
            log.warn("Static root for yamcs-web not found at '{}'", staticRoot);
        }
        httpServer.addStaticRoot(staticRoot);

        // Set-up HTML5 deep-linking:
        // Catch any non-handled URL and make it return the contents of our index.html
        // This will cause initialization of the Angular app on any requested path. The
        // Angular router will interpret this and do client-side routing as needed.
        var indexHandler = new IndexHandler(config, httpServer, staticRoot);
        httpServer.addHandler("*", () -> indexHandler);

        // Print these log statements via a ready listener because it is more helpful
        // if they appear at the end of the boot log.
        yamcs.addReadyListener(() -> {
            for (var binding : httpServer.getBindings()) {
                log.info("Website deployed at {}{}", binding, httpServer.getContextPath());
            }
        });
    }

    private Bucket createBucketIfNotExists(String bucketName) throws PluginException {
        var yarch = YarchDatabase.getInstance(YamcsServer.GLOBAL_INSTANCE);
        try {
            var bucket = yarch.getBucket(bucketName);
            if (bucket == null) {
                bucket = yarch.createBucket(bucketName);
            }
            return bucket;
        } catch (IOException e) {
            throw new PluginException("Could not create '" + bucketName + "' bucket", e);
        }
    }

    /**
     * Deploys all web files located in the classpath, as listed in a manifest.txt file. This file is generated during
     * the Maven build and enables us to skip having to do classpath listings.
     */
    Path deployWebsiteFromClasspath() throws IOException {
        Path cacheDir = YamcsServer.getServer().getCacheDirectory().resolve("yamcs-web");
        FileUtils.deleteRecursivelyIfExists(cacheDir);
        Files.createDirectory(cacheDir);
        try (var in = getClass().getResourceAsStream("/static/manifest.txt");
                Reader reader = new InputStreamReader(in, StandardCharsets.UTF_8)) {

            String manifest = CharStreams.toString(reader);
            String[] staticFiles = manifest.split(";");

            log.debug("Unpacking {} webapp files", staticFiles.length);
            for (String staticFile : staticFiles) {
                try (var resource = getClass().getResourceAsStream("/static/" + staticFile)) {
                    Files.copy(resource, cacheDir.resolve(staticFile));
                }
            }

            return cacheDir;
        }
    }
}