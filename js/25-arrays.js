'use strict'

// Array o arreglos o matrices

var array = ["Hola,", "¿como", "estas?", 21, true];

var lenguajes = new Array("PHP", "Java", "C#", "VB", "Python", "Cobol", "JS");

// console.log(array[0]);
// console.log(array);
// console.log(lenguajes[0]);
// console.log(lenguajes);

var l_lenguaje = lenguajes.length;

/*
do {
    var elemento = parseInt(prompt("Que lenguaje del array quieres?", (l_lenguaje-1).toString()));
} while (isNaN(elemento) || elemento < 0 || elemento >= l_lenguaje);
alert("Has seleccionado el lenguaje: " + lenguajes[elemento]);
*/

document.write("<h1>Lenguajes</h1>");

// for (var i = 0; i <= l_lenguaje-1; i++) {
//     document.write("<h3>" + lenguajes[i] + "</h3>");
// }

// lenguajes.forEach((elemento, indice) => {
//     document.write("<h3>" + indice + " - " + elemento +"</h3>");
// });

for (let lenguaje in lenguajes) {
    document.write("<h3>" + lenguajes[lenguaje] + "</h3>")
}

// Busqueda

// Esta funcion y la siguiente hacen exactamente lo mismo, solo se escriben de forma diferente utilizando =>
// var busqueda = lenguajes.find(function(lenguaje){
//     return lenguaje == "PHP";
// });

// El metodo find busca el parametro y lo devuelve, sino, undefined
var busqueda = lenguajes.find( lenguaje => lenguaje == "PHP");

// El metodo findIndex busca el indice, sino devuelve -1
var busqueda = lenguajes.findIndex( lenguaje => lenguaje == "JS");



console.log(busqueda);

var precios = [10, 20, 30, 40, 50, 60];

// some, devuelve true si se cumple la condicion
var busquedas = precios.some(precio => precio > 80);

console.log(busquedas);