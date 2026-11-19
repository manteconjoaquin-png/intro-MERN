"use strict";

var casa = {
    ventanas: 4,
    cuantasVentanas: function() {
        console.log("La casa tiene " + this.ventanas + " ventanas");
    }
};

function Coche() {
    this.ruedas = 4,
    this.cuantasRuedas = function() {
        console.log("El coche tiene " + this.ruedas + " ruedas");
    }
}    

casa.cuantasVentanas();    

setTimeout(casa.cuantasVentanas.bind(casa), 1000);

var coche = new Coche();
coche.cuantasRuedas();

setTimeout(coche.cuantasRuedas.bind(coche), 1000);