'use strict'



var guardar = document.querySelector("#guardar")
var eliminar_todas = document.getElementById("eliminar")
var eliminar_uno = document.getElementById("eliminaruno");
var ul = document.getElementById("listado-peliculas");

listarPeliculas();

guardar.addEventListener("click", function () {
    // console.log("Listener");
    let titulo_pelicula = document.querySelector("#addpelicula").value;
    if(titulo_pelicula.length >= 1) {
        // var nueva_peliculas = {'titulo': titulo_pelicula};
        // localStorage.setItem('titulo', titulo_pelicula);
        addPeliculas(titulo_pelicula);
        listarPeliculas();
    }
});

function addPeliculas(nuevotitulo) {
    //Obtiene el valor del local storage, cotiene un array en formato texto, se debe parsear
    let peliculas = JSON.parse(localStorage.getItem("peliculas"));

    let nueva_pelicula = '';

    if(peliculas != null) {
    // if(false) {
        nueva_pelicula = {titulo: nuevotitulo};
        // agrega la pelicula al array
        peliculas.push(nueva_pelicula);

        // Convierte el JSON a String para guardar en el localStorage
        peliculas = JSON.stringify(peliculas);

        localStorage.setItem('peliculas', peliculas);
    }
    else {
        // Si no hay valores en el localStorage, se agrega
        nueva_pelicula = {titulo: nuevotitulo};

        // el JSON se guarda en un array y luego como texto
        peliculas = JSON.stringify([nueva_pelicula]);

        localStorage.setItem('peliculas', peliculas);
    }


}

eliminar_uno.addEventListener("click", function() {
    // Obtiene el valor del campo input
    let titulo_pelicula = document.querySelector("#addpelicula").value;

    // Si no esta vacio el titulo
    if(titulo_pelicula.length >= 1) {

        //Obtiene el valor del local storage, cotiene un array en formato texto, se debe parsear
        let listado_peliculas = JSON.parse(localStorage.getItem("peliculas"));

        // Se crea un listado auxiliar para modificar, de esta forma no se altera el bucle for
        let listado_peliculas_aux = listado_peliculas;

        // Si tiene elementos el localStorage
        if(listado_peliculas != null) {

            // Se recorren los elementos del localStorage
            for(let i in listado_peliculas) {

                // Si el titulo se encuentra en el array
                if(listado_peliculas[i].titulo == titulo_pelicula)
                {
                    // Se elimina el titulo del array
                    listado_peliculas_aux.splice(i,1);

                    // El nuevo listado de peliculas se hace String para ser guardado
                    let nuevo_listado = JSON.stringify(listado_peliculas_aux);

                    // Se guarda el nuevo listado de peliculas en el LocalStorage
                    localStorage.setItem('peliculas', nuevo_listado);

                    // Se listan las peliculas restantes
                    listarPeliculas();
                    return;
                }
            }
        }
    }

});

function listarPeliculas() {
    let listado_peliculas = JSON.parse(localStorage.getItem("peliculas"));

    // Se limpia el contenido html para que no se repitan las peliculas
    ul.innerHTML = "";

    if(listado_peliculas != null) {
        for(let i in listado_peliculas) {
            let li = document.createElement("li");
            li.append(listado_peliculas[i].titulo);
            ul.append(li);
        }
    }
}

eliminar_todas.addEventListener("click", function() {
    localStorage.clear();
    listarPeliculas();
});