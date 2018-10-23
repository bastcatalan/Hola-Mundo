'use strict'

// Transformacion de textos

var numero  = 3333;
var texto1 = "El curso de JavaScript de Pedro, Juan y Diego es el mejor curso    ";
var texto2 = "Lo encuentor bueno hasta el momento";

var dato;
dato = numero.toString();
// dato = texto1.toUpperCase();
// dato = texto1.toLowerCase();
console.log(dato);
console.log(typeof dato);

// Calcular longitud de un texto

var nombre;
// nombre = "asd";
// nombre = 3;
nombre =  numero.toString();
nombre = "Bastian";
nombre = ["asd", "fgh"];

console.log(nombre.length);

// Unir Texto

var textoTotal;
//textoTotal = texto1 + " " + texto2;
textoTotal = texto1.concat(" " + texto2);

console.log(textoTotal);

// Buscar dentro de un texto

// Devuelve el indice donde comienza la cadena de texto
var busqueda = texto1.indexOf("curso");

// Devuelve el ultimo indice en que se encuentra la cadena de texto
var busqueda2 = texto1.lastIndexOf("curso");

// Devuelve el indice en que se encuentra la cadena texto
var busqueda3 = texto1.search("curso");

// Devuelve -1 si no se encuentra el texto
var busqueda4 = texto1.search("cursos");

// Devuelve el texto si es que lo encuentra
var busqueda5 = texto1.match("curso");

// Devuelve todas las cadenas que encuentre
var busqueda6 = texto1.match(/curso/g);

// Devuelve null si no encuentra el texto
var busqueda7 = texto1.match("cursos");

// Primero se posiciona en el indice de la cadena de texto y luego devuelve la cadena desde 1 hasta 5 siendo 1 el indice 3
var busqueda8 = texto1.substr(3, 5);

// Devuelve el caracter correspondiente al indice indicado
var busqueda9 = texto1.charAt(3);

// Devuelve true o false si es que la cadena de texto comienza con el parametro
var busqueda10 = texto1.startsWith("El");

// Devuelve true o false si es que la cadena de texto termina con el parametro
var busqueda11 = texto1.endsWith(" ");

// Devuelve true o false si es que encuentra la cadena en el texto, debe ser exacta (CaseSensitive)
var busqueda12 = texto1.includes("JavaScript");

console.log("Busqueda 1: " + busqueda);
console.log("Busqueda 2: " + busqueda2);
console.log("Busqueda 3: " + busqueda3);
console.log("Busqueda 4: " + busqueda4);
console.log("Busqueda 5: " + busqueda5);
console.log("Busqueda 6: " + busqueda6);
console.log("Busqueda 7: " + busqueda7);
console.log("Busqueda 8: " + busqueda8);
console.log("Busqueda 9: " + busqueda9);
console.log("Busqueda 10: " + busqueda10);
console.log("Busqueda 11: " + busqueda11);
console.log("Busqueda 12: " + busqueda12);

// Reemplazar texto

var reemplazar = texto1.replace("JavaScript", "Node.Js");

// Corta el numero de caracteres del texto desde el comienzo y devuelve el resultado
var reemplazar2 = texto1.slice(3);

// Corta el numero de caracteres desde el comienzo en ambos parametros, desde el primer al segundo parametro y devuelve lo cortado
var reemplazar3 = texto1.slice(3, 8);

// Corta una cadena de texto segun el divisor suministrado y devuelve un array
var reemplazar4 = texto1.split(" ");

// Elimina el espacio al comienzo y al final del texto
var reemplazar4 = texto1.trim();

console.log(reemplazar);
console.log(reemplazar2);
console.log(reemplazar3);
console.log(reemplazar4);