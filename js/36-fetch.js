'use strict'

// Fetch (ajax) y peticiones de servicios / api rest

var usuarios = [];

var divUsuarios = document.getElementById("usuarios");

fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(users => {
        usuarios = users;
        console.log(usuarios);

        usuarios.map((users, i) => {
            let nombre = document.createElement("h3");
            nombre.innerHTML = i + ". " + users.name + " - " + users.email;
            divUsuarios.appendChild(nombre);
            document.querySelector(".loading").style.display = 'none';
        });
    });