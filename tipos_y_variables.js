var numero = 1;
console.log(numero);
console.log(typeof(numero));

numero = "Hola";
console.log(typeof(numero));

// strings
console.log("texto de prueba".split(" "));

var textoLargo1 = 
"Linea 1\n" +
"Linea 2\n" +
"Linea 3";
console.log(textoLargo1);

var textoLargo2 = [
"Linea 1",
"Linea 2",
"Linea 3"
].join("\n");
console.log(textoLargo2);

var objeto = {
    numero: 1,
    texto: "Hola",
    sumaDos: function(v) {
        return v + 2;
    }
};
console.log(objeto.numero);
console.log(objeto.texto);
console.log(objeto.sumaDos(5));

// arrays
var array = [
    1,
    "hola",
    function(v) {return v + 2},
    {valor: "hola"}
];
console.log(array);
console.log(array[2](500));

// Hoisting
var x = 100;

function y() {
    if (x === 20) {
        var x = 30;
    }
    return x;
}
console.log(x, y());    