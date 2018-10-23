'use strict'

// PLantillas de texto

var nombre = prompt("Ingresa tu nombre");
var apellidos = prompt("Ingresa tus apellidos");

var texto;
// texto = " Mi nombre es: " + nombre + " <br> Mis Apellidos son: " + apellidos;
texto = `
        <h1> Hola</h1>
        <h3>Mi nombre es: ${nombre}</h3>
        <h3>Mis apellidos son: ${apellidos}</h3>
        `;
document.write(texto);