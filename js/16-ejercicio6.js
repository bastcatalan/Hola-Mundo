'use strict'

/*
Que nos diga si nu numero es par o impar
1. ventana prompt
2. si no es valido que nso pida de nuevo el numero
 */

do {
    var numero = parseInt(prompt("Ingrese numero"));
} while(isNaN(numero));

var par_o_impar = numero%2;

if (par_o_impar == 0) {
    console.log("El numero: " + numero + " es par");
} else {
    console.log("El numero: " + numero + " es impar");
}