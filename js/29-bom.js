'uset strict'

// BOM - Browser Object Model

function getBom(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
}
console.log("getBom();");
getBom();

console.log(screen.width);
console.log(screen.height);

console.log(window.location);


function redireccionar(url){
    window.location = url;
}

function abrirVentana(url) {
    window.open(url,"","width=400,heigth=300");
}