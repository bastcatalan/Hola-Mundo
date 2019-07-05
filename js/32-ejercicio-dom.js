'use strict'

window.addEventListener('load', () => {
    console.log("Dom Cargado");

    var form = document.getElementById("form1");

    form.addEventListener('submit', () => {
       console.log("submit!!");

       var nombre = document.getElementById('nombre').value;
       var apellido = document.getElementById('apellido').value;
       var edad = parseInt(document.getElementById('edad').value);

       if(nombre.trim() == null || nombre.trim().length == 0 || apellido.trim() == null || apellido.trim().length == 0){
           alert("Debe completar nombre y apellido");
           return false;
       }

       if(isNaN(edad) || edad <= 0 || edad == null ){
           alert("Ingrese edad valida");
           return false;
       }
       console.log(nombre + " " + apellido + " " + edad);

       document.getElementById('datos').innerHTML = nombre + " " + apellido + " " + edad;
    });
});