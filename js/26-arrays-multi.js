'use strict'

var categorias = ['Comedia', 'Accion', 'Terror', 'Aventura', 'Mistero'];
var peliculas = ['El principe de Rap', 'Hombres de negro', 'Hombres de negro 2', 'La Monja'];

// sort ordena por orden alfabetico
peliculas.sort();

// invierte el orden del array
peliculas.reverse();

console.log()

var cine = [categorias, peliculas];
// console.log(cine[0][0]);
// console.log(cine[0][1]);
// console.log(cine[0][2]);
// console.log(cine[0][3]);
// console.log(cine[0][4]);
// console.log(cine[1][2]);

do {
    var nueva_pelicula = prompt("Ingrese una pelicula a la cartelera: ");
} while (nueva_pelicula.length < 3);

// Con push agregar un elemento a un array, este elemento se agrega al final
peliculas.push(nueva_pelicula);


peliculas.push('Como entrenar a tu dragon');
console.log(peliculas);
console.log('------------------');

// El pop quita el ultimo elemento de array, quita 1 elemento por cada pop ejecutado
peliculas.pop();
console.log(peliculas);
console.log('------------------');

// indexOf devuelve le indice del array si es que encuentra el parametro enviado, sino devuelve -1
var indice = peliculas.indexOf('Hombres de negro');
console.log(indice);

if (indice > -1) {

    // splice, el primer parametro indica en que indice comienza y el segundo parametro indica cuantos elementos se borran
    peliculas.splice(indice, 1);
}

console.log(peliculas);

// El join convierte un array en un string separado por comas
var array_a_texto = peliculas.join();

console.log(array_a_texto);

// Convierte una cadena de texto a array separado por el parametro indicado
var texto_a_array = array_a_texto.split(",");

console.log(texto_a_array);