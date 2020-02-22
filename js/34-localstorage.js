'use strict'

// LocalStorage

// Comprobar si local storage es compatible en el navegador
if(typeof (Storage) !== 'undefined') {
    console.log("Local Storage Disponible");
}
else {
    console.log("Incompatible con Local Storage");
}


// Guardar Datos en Local Storage
localStorage.setItem("nombre","Bastian");
localStorage.setItem("apellido1","Catalan");
localStorage.setItem("apellido2","Martinez");

// Recuperar Datos de Local Storage

var nombre = localStorage.getItem("nombre");

var div = document.querySelector("#peliculas");

div.innerHTML = nombre;

// Guardar objetos en Local Storage

var persona = {
    nombre: "Bastian"
    ,apellido: "Catalan"
    ,email: "bast.catalan@gmail.com"
}

// Convertir el JSON a un string
localStorage.setItem("persona", JSON.stringify(persona));

// Recuperar Objeto de Local Storage (JSON String)
// Convertir el JSON String en JSON con el parse
var datos_persona = JSON.parse(localStorage.getItem("persona"));
console.log(datos_persona);

var div_datos = document.querySelector("#datos_persona");

div_datos.append(datos_persona.apellido + " - " + datos_persona.email);


// Eliminar elementos de Local Storage
localStorage.removeItem("nombre");
localStorage.removeItem("apellido1");
localStorage.removeItem("apellido2");

// Eliminar todos los elementos de Local Storage
localStorage.clear();