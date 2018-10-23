'use strict'

// 1. Hacer un programa que pida 6 numeros y los ingrese en un array X
// 2. Tiene que mostrar el array en la pagina y en la consola X
// 3. Ordenas y mostrar X
// 4. Invertir su orden y mostrarlo X
// 5. Mostrar cuantos elementos tiene el array
// 6. Busqueda de un valor introducidor por el usuario, que nos diga si lo encuentra y muestre su indice

var parametro;
var array = [];

function mostrarArray(array) {
    array.forEach((elemento, indice) => {
        document.write('<h3>' + indice + '. ' + elemento + '</h3>');
        console.log(indice + '. ' + elemento);
    });

    console.log('---------');
    document.write('---------');
}

// Pedir 6 numeros
do {
    do {

        parametro = parseInt(prompt("Ingrese 6 numeros ("+ (array.length + 1) +"/6): "));

    } while (isNaN(parametro));

    array.push(parametro);
    // console.log(array.length);
} while (array.length < 6)

//mostrar array
mostrarArray(array);

// ordenar array de forma alfabetica
array.sort();
mostrarArray(array);

// ordenar array de forma numerica
array.sort((a, b) => a-b);
mostrarArray(array);

// Ordenar array de forma invertida
array.reverse();
mostrarArray(array);

console.log('El array tiene: ' + array.length + ' elementos');

do {
    var buscar = parseInt(prompt("Busque un valor:"));
} while (isNaN(buscar));

var busqueda = array.find(numero => numero == buscar);


// console.log(busqueda);
// console.log(busqueda2);

if (busqueda > -1) {
    var busqueda2 = array.findIndex(numero => numero == buscar)
    console.log("El numero: " + buscar + " si se encuentra y esta en el indice: " + busqueda2 );
} else {
    console.log("No se encuentra el numero: " + buscar);
}