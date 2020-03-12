'use strict'

// Fetch (ajax) y peticiones de servicios / api rest

var usuarios = [];

var divUsuarios = document.getElementById("usuarios");
var divJanet = document.getElementById("janet");

getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);

        return getJanet();
    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);
    });

function getUsuarios() {
    return fetch('https://reqres.in/api/users');
}

function getJanet() {
    return fetch('https://reqres.in/api/users/2');
}

function listadoUsuarios(usuarios) {
    usuarios.map((users, i) => {
        let nombre = document.createElement("h3");
        nombre.innerHTML = i + ". " + users.first_name + " - " + users.email;
        divUsuarios.appendChild(nombre);
        document.querySelector(".loading").style.display = 'none';
    });
}

function mostrarJanet(users) {
    console.log(users);
    let nombre = document.createElement('h4');
    let avatar = document.createElement('img');

    nombre.innerHTML = users.first_name + " - " + users.email;

    avatar.src = users.avatar;
    avatar.width = '100';

    divJanet.appendChild(nombre);
    divJanet.appendChild(avatar);

    document.querySelector("#janet .loading").style.display = 'none';

}