"use strict";

function Persona(nombre){
    this.nombre = nombre
}

var persona = new Persona("Tarek");
Persona.prototype.saluda = function(){
    console.log("Hola, soy " + this.nombre);
}

console.log(persona.nombre);
persona.saluda();


function Agente(nombre){
    Persona.call(this, nombre);
}

Agente.prototype = new Persona("Kamisama");
var agente = new Agente("Smith");

agente.saluda();

console.log(
    Object.getPrototypeOf(agente),
    agente instanceof Agente,
    agente instanceof Persona,
    agente instanceof Object
);


function Superhero(){
    this.vuela = function(){
        console.log( this.nombre + " puede volar");
    };
    this.esquivaBalas = function(){
        console.log( this.nombre + " puede esquivar balas");
    }
}

Object.assign(Agente.prototype, new Superhero());

agente.vuela();
agente.esquivaBalas();





