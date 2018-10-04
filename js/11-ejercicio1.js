'use strict'

/**
 Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
 PLUS: Si los numeros no son numeros o son menores o iguales a 0 que nos vuelva a pedir los datos
 */

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

console.log(numero1, numero2);
console.log(typeof numero1, typeof numero2);

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    var numero1 = parseInt(prompt("Introduce el primer numero", 0));
    var numero2 = parseInt(prompt("Introduce el segundo numero", 0));
}

if (numero1 > numero2) {
    console.log("El primer numero es mayor");
} else if (numero1 < numero2) {
    console.log("El segundo numero es mayor");
} else if (numero1 == numero2) {
    console.log("Los numeros son iguales");
} else {
    console.log("Introduce numeros");
}
