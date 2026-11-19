// una función basica

function funcionBasica() {
    console.log("Hola, esta es una función básica");
}
funcionBasica();

//Una función como declaracion con argumentos y retorno

function suma(a, b) {
    return a + b;
}
console.log(suma(10, 15));

// Una función como expresión

var multiplicacion = function (a, b) {
    return a * b;
}
console.log(multiplicacion(5, 6));

var lang = "es";
function accesoContexto(){
    console.log("En el contexto superior:", lang);
}
accesoContexto();

// Método de un objeto
var guerreroZ = {
    nombre: "Goku",
    saluda: function(){
        console.log("Hola, soy el guerrero Z " + this.nombre);
    } 
};
guerreroZ.saluda();

// Constructor de objetos

function Fruta(nombre){
    this.getNombre = function(){
        return nombre;
    };
    this.setNombre = function(valor){
        nombre = valor;
    }
}

// crear un objeto de tipo Fruta
var manzana = new Fruta("Manzanae");
console.log(manzana);

console.log(manzana.getNombre());

manzana.setNombre("Pera");
console.log(manzana.getNombre());