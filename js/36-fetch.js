'use strict'

// Fetch (ajax) y peticiones de servicios / api rest

var usuarios = [];

var divUsuarios = document.getElementById("usuarios");
var divJanet = document.getElementById("janet");
var divProfesor = document.getElementById("profesor");

getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);

        return getInfo()

    })
    .then( data => {
        console.log(data);
        divProfesor.innerHTML = data;

        return getJanet();
    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);

    })
    .catch(error => {
        console.log(error)
        
    });

function getUsuarios() {
    return fetch('https://reqres.in/api/users');
}

function getJanet() {
    return fetch('https://reqres.in/api/users/2');
}

function getInfo() {
    var profesor = {
        nombre: "Bastian",
        apellido: "Catalan"
    };

    return new Promise((resolve, reject) => {
        var profesor_string = "";
        profesor_string  = JSON.stringify(profesor);

        setTimeout( () => {

            if(typeof profesor_string != 'string' || profesor_string == '') reject("error 1");

            return resolve(profesor_string);

        }, 3000);

    });

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