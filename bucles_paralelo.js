"use strict";

console.log("Hola mundo asincrono");

function escribeTrasDosSegundos(texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000);
}

var fin = 0;
for (var i = 0; i < 10; i++) {
    escribeTrasDosSegundos("Cha la Head cha la " + i, function () {
    fin++;    
    if (fin >= 10) {
        console.log("termina el programa asincrono");
    }})}