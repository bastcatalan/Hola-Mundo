'use strict'

// Bucle while

var year = 2018;

console.log("While");
while (year != 1991) {
    console.log("Estamos en el año: " + year);
    year--;
}

console.log("Do While");
do {
    console.log("Estamos en el año: " + year);
    year--;
} while (year >= 1981)

var years = 21;
console.log("Do While2")
do {
    console.log(years);
    years++;

    if (years == 23) {
        console.log("Llegamos al 23! Break!");
        break;
    }
} while (years <= 25)