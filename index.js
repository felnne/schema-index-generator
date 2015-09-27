(function () {
    "use strict";

    var fs = require('fs');
    var glob = require("glob");
    var Q = require('q');

    // TODO: Make command line option or similar
    var path = 'schemas';
    var debug = true;

    var globOptions = [];
    var schemaFiles = [];
    var schemas = [];

    // Get all schemas as array of file paths relative to $path
    function globPathForSchemas() {
        var deferred = Q.defer();

        var globPath = path + "/**/*.json-schema";

        if (debug) {
            console.log('Globbing for files in [' + globPath + ']');
            console.log(schemaFiles);
        }
        glob(globPath, globOptions, function (err, files) {
            // TODO: Deal with errors as described here
            // If the `nonull` option is set, and nothing
            // was found, then files is ["**/*.js"]
            // er is an error object or null.

            schemaFiles = files;

            if (debug) {
                console.log('Globbed files');
                console.log(schemaFiles);
            }
            deferred.resolve();
        });

        return deferred.promise;
    }

    function getInfoFromSchemas() {
        var deferred = Q.defer();

        for (var i in schemaFiles) {
            extractSchemaDetails(schemaFiles[i]);
        }
        deferred.resolve();

        return deferred.promise;
    }

    function extractSchemaDetails(schemaFilePath) {

        if (debug) {
            console.log('Extracting schema details from [' + schemaFilePath + ']');
        }
        var schema = JSON.parse(fs.readFileSync(schemaFilePath, 'utf8'));
        if (debug) {
            console.log('Full schema contents as JSON object');
            console.log(schema);
        }

        // Extract schema details
        var schemaInfo = {};

        if (schema.hasOwnProperty('id')) {
            schemaInfo.id = schema.id;
        }

        schemas.push(schemaInfo);
    }

    // Run main process
    globPathForSchemas()
        .then(getInfoFromSchemas)
        .then(function() {
            console.log('Rencia');
            console.log(schemas);
        });
}());
