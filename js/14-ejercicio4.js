'use strict'

/*
Mostrar todos los numeros impares que hay entre dos numeros introducidos
por el usuario
 */

do{
    var numero1 = parseInt(prompt("Introduce el primer numero"));
    var numero2 = parseInt(prompt("Introduce el segundo numero"));

} while (isNaN(numero1 || isNaN(numero2)));

while (numero1 <= numero2) {
    if (numero1%2 != 0) {
        console.log(numero1 + " es impar");
    }
    numero1++;
}