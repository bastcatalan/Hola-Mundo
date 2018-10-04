'use strict'

// Tabla de multiplicar de un numero ingresado por pantalla

do {
    var numero = parseInt(prompt("Ingrese numero para conocer la tabla"));
} while (isNaN(numero));

for (var i = 1; i <= 10; i++) {
    console.log(numero + " * " + i + " = " + (i*numero));
}