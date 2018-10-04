'use strict'

// Funciones anonimas
// Es una funcion que no tiene nombre

/*
var pelicula = function (nombre) {
    return "La pelicula es: " + nombre;
}
*/

// CallBack: es una funcion dentro de otra
// Se ejecuta despues de la primera funcion

function sumame(numero1, numero2, sumaYMuetra, sumaPorDos) {
    var sumar = numero1 + numero2;

    sumaYMuetra(sumar);
    sumaPorDos(sumar);


}

sumame(5, 7, function (dato) {
    console.log("La suma es : ", dato);
    },
    function (dato) {
    console.log("La suma por dos es: " + (dato*2));
});

sumame(5, 7, dato => {
    console.log("La suma es : ", dato);
    },
        dato => {
    console.log("La suma por dos es: " + (dato*2));
});
