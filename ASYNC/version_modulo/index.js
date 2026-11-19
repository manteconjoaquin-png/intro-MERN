"use strict";

var fs = require("fs");
var path = require("path");


var versionModulo = function(moduleName, callback) {

    var fichero = path.join("./node_modules", moduleName, "package.json");

    fs.readFile(fichero, "utf8", function(err, data) {
        if (err) {
            callback(err);
            return;
        }
        var packageJson = {};
        try {
            packageJson = JSON.parse(data);
        } catch (e) {
            callback("Error al parsear el JSON en " + fichero + ": " + e.message);
            return;
        }
        
        if (packageJson && !packageJson.version) {
            callback("No se encontró la version en " + fichero);
            return;
        }

        callback(null, packageJson.version);
    });
} 

var modulo = "chance";

versionModulo(modulo, function(err, version) {
    if (err) {
        console.log("Hubo un error: " + err);
        return;
    } else {
        console.log("La versión del módulo " + modulo + " es: " + version);
    }
})