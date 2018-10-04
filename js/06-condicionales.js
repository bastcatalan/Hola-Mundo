'use strict'

// Condicional IF
// Si A es igual a B entonces haz algo

var edad1 = 10;
var edad2 = 12;

// Si pasa esto
if (edad1 > edad2) {
    // Ejecuta esto
    console.log("Edad1 es mayor que Edad2");
} else {
    console.log("La Edad1 es inferior");
}

var edad = 70;
var nombre = "Pedro Gomez";

/**
 * Operadores relacionales
 * Mayor: >
 * Menor: <
 * Mayor o igual: >=
 * Menor o igual: <=
 * Igual: ==
 * Distinto !=
 */

if (edad >= 18) {
    // Es mayor de edad
    console.log(nombre + ' tiene ' + edad + ' años, es mayor de edad.');

    if (edad == 33) {
        console.log("Ponte a trabajar");
    }

    if (edad <= 33) {
        console.log("Sigue trabajando");
    } else if (edad >= 70) {
        console.log("Jubilate");
    } else {
        console.log("Te estas poniendo viejo");
    }


} else {
    console.log(nombre + ' tiene ' + edad + ' años, es menor de edad');
}

/**
 * Operadores logicos
 * And (Y): &&
 * Or (O): ||
 * Negacion: !
 */

var year = 2028;
// Negación
if (year != 2016) {
    console.log("No estamos en el año 2016, estamos en el: "+year);
}

// And
if (year >= 2000 && year <= 2020) {
    console.log("Estamos en la era actual");
} else {
    console.log("Estamos en la era post moderna");
}


// OR
if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log("El año acaba en 8");
} else {
    console.log("Año no registrado");
}