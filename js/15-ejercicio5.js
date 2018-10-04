'use strict'

/*
Mostrar todos los numeros divisores de un numero introducido en un prompt
 */

do {
    var numero = parseInt(prompt("Ingresa un numero", 1));
} while (isNaN(numero))

for (var i = 1; i <= numero; i++) {
    if (numero%i == 0) {
        console.log(i);
    }

}

