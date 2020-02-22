'use strict'

// JSON - Javascript Object Notation

var pelicula = {
    titulo: 'Pelicula 1'
    ,year: 2019
    ,pais: 'Chile'
};

pelicula.titulo = 'Pelicula 2';

var peliculas = [
    {titulo: "Pelicula de array", year: 2020, pais: "Chile" },
    pelicula
];

console.log(peliculas);

var div_peliculas = document.querySelector("#peliculas");

for(var index in peliculas) {
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    console.log(p);
    div_peliculas.append(p);
}