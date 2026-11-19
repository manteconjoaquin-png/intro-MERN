"use strict";

console.log("Hola mundo asincrono");

function escribeTrasDosSegundos(texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000);
}

function serie(n, func, callbackFinal) {
    if (n == 0){
        callbackFinal();
        return;
}
    n--
    func(n, function () {
        serie(n, func, callbackFinal);
    })
}

serie(10, escribeTrasDosSegundos, function () {
    console.log("termina el programa asincrono");
})