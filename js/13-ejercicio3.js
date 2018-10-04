'use strict'

/*
Hacer un programa que muestre todos los numeros entre dos numeros
itroducidos por el usuario
 */



do {
    var numero1 = parseInt(prompt("Ingrese numero 1"));
    var numero2 = parseInt(prompt("Ingrese numero 2"));

} while (isNaN(numero1 || isNaN(numero2)))

if (numero1 < numero2) {
    for(var i = numero1; i <= numero2; i++) {
        console.log(i);
    }

} else if(numero1 > numero2) {
    for(var i = numero1; i >= numero2; i--) {
        console.log(i);
    }

}