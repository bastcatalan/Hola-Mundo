'use strict'

window.addEventListener('load', () => {

    // Timers
    var tiempo = setInterval( () => {
       console.log("set Interval ejecutado");

       var encabezado = document.querySelector("h1");

       if (encabezado.style.fontSize == "50px") {
            encabezado.style.fontSize = "20px";
       } else {
           encabezado.style.fontSize = "50px";
       }

    }, 500);

    var tiempo2 = setTimeout( () => {
        console.log("set Timeout ejecutado");

        var encabezado = document.querySelector("h3");

        if (encabezado.style.fontSize == "50px") {
            encabezado.style.fontSize = "20px";
        } else {
            encabezado.style.fontSize = "50px";
        }

    }, 5000);

    var boton = document.getElementById("boton");

    boton.addEventListener("click+++++++++++++++++++++", () => {
        console.log("Paro el interval");
        clearInterval(tiempo);
    });
});