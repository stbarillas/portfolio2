async function uploadFiles() {
    // Imports the Google Cloud client library
    const {Storage} = require('@google-cloud/storage');

    // Creates a client
    const storage = new Storage({
        projectId: 'portfolio-250206',
    });

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    const bucketName = 'www.stevebarillas.com';
    const currentDir = process.cwd();
    const index = currentDir + "/index.html";
    const css = currentDir + "/style/app_min.css";
    const js = currentDir + "/style/custom.js";
    const lazysizes = currentDir + "/node_modules/lazysizes/lazysizes.min.js"

    // Uploads a local file to the bucket
    await storage.bucket(bucketName).upload(index, {
        // Support for HTTP requests made with `Accept-Encoding: gzip`
        gzip: true,
        metadata: {
            // Enable long-lived HTTP caching headers
            cacheControl: 'public, max-age=31536000',
        },
    });
    await storage.bucket(bucketName).upload(css, {
        // Support for HTTP requests made with `Accept-Encoding: gzip`
        destination: ("style/app_min.css"),
        gzip: true,
        metadata: {
            // Enable long-lived HTTP caching headers
            cacheControl: 'public, max-age=31536000',
        },
    });
    await storage.bucket(bucketName).upload(js, {
        // Support for HTTP requests made with `Accept-Encoding: gzip`
        destination: ("style/custom.js"),
        gzip: true,
        metadata: {
            // Enable long-lived HTTP caching headers
            cacheControl: 'public, max-age=31536000',
        },
    });
    await storage.bucket(bucketName).upload(lazysizes, {
        // Support for HTTP requests made with `Accept-Encoding: gzip`
        destination: ("node_modules/lazysizes/lazysizes.min.js"),
        gzip: true,
        metadata: {
            // Enable long-lived HTTP caching headers
            cacheControl: 'public, max-age=31536000',
        },
    });
}

uploadFiles();


