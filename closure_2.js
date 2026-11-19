"use strict";
function creaAgente(nombre) {
    var edad = 0;
    return {
        ponNombre: function(nuevoNombre) {
            nombre = nuevoNombre;
        },
        leeNombre: function() {
            return nombre;
        },
        ponEdad: function(nuevaEdad) {
            edad = nuevaEdad;
        },
        leeEdad: function() {
            return edad;
        },
        escribe : function() {
            console.log("soy " + nombre + " y tengo " + edad + " años");
        }
    };
}


var smith = creaAgente("Smith");
smith.ponEdad(33);

var jones = creaAgente("Jones");
jones.ponEdad(27);

console.log(smith.leeNombre() + " " + smith.leeEdad());
console.log(jones.leeNombre() + " " + jones.leeEdad());

setTimeout(smith.escribe)