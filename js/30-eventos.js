'use strict'

// Eventos del raton
var boton = document.getElementById("boton");

function cambiarColor(si = 0) {
    var bg = boton.style.background;
    if (si == 1) {
        if (bg == "green") {
            boton.style.background = "red";
        } else {
            boton.style.background = "green";
        }
    }
    return true;
}


// EventListener
boton.addEventListener('click', function () {
    cambiarColor(1);
});

boton.addEventListener('mouseover', function () {
    boton.style.background = "#cccccc";
});

boton.addEventListener('mouseout', function () {
    boton.style.background = "#ffffff";
});

var input = document.getElementById("campo_nombre")
var div = document.getElementById("midiv");
// Blur
input.addEventListener('blur', function () {
 input.value = "Y el focus viejo?";
});

// Focus
input.addEventListener('focus', function () {
    input.value = "Focus en el input";
});

// KeyPres
input.addEventListener('keypress', function (e) {
    div.innerHTML = "Suelta suelta suelta! estas presionando la tecla: "+ String.fromCharCode(e.keyCode);
});

//KeyUp
input.addEventListener('keyup', function () {
    div.innerHTML = "Gracias";

});