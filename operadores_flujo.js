// definimos un objeto  de forma literal

var empleado = {
    nombre: "Gohan",
    profesion: "Guerrero Z",
    edad: 12,
    poder: ["Kamehameha", "Masenko", "Kienzan", "volar"]
};
console.log(empleado); 


var serializado = JSON.stringify(empleado);
console.log(serializado);

// deserializamos el objeto

serializado = serializado + "}";


var leido;
try {
    leido = JSON.parse(serializado);
} catch (err) {
    console.log("No se pudo leer el deserializado");
}


if (typeof(leido) != "undefined") {
    console.log("Hay algo leido");
} else {
    console.log("No hay nada leido");
}


for (var i = 0; i < empleado.poder.length; i++) {
    var ki = empleado.poder[i];
    console.log(empleado.nombre + (ki == "volar" ? " sabe " : " puede lanzar ") + ki);
}
 

