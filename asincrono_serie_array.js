"use strict";

console.log("Hola mundo asincrono");

function escribeTrasDosSegundos(texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000);
}

function serie(n, func, callbackFinal) {
    if (array.length == 0){
        callbackFinal();
        return;
}
    func(array.shift(), function () {
        serie(array, func, callbackFinal);
    })
}

var array = [1, 2, "tres", 4, 5, 6, 7, "ocho", 9, 10];

serie(array, escribeTrasDosSegundos, function () {
    console.log("termina el programa asincrono");
})