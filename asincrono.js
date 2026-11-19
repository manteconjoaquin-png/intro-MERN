"use strict";

console.log("Hola mundo asincrono");

function escribeTrasDosSegundos(texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000);
}

escribeTrasDosSegundos("Cha la Head cha la", function () {
console.log("respiro");
escribeTrasDosSegundos("No importa lo que suceda", function () {
console.log("termina el programa asincrono");
});
});




