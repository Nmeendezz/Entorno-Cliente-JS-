/*
//Ej1
let phrase = prompt("Ingrese una frase");
let words = phrase.split(" ");
let max = words[0];

for(let i = 0; i < words.length; i++){
    if(words[i].length > max.length){
        max = words[i];
    }
}
alert(max);

//Ej2

let word = prompt("Ingrese una palabra");
if(word.toLowerCase().startsWith("pre")){
    alert ("Si empieza por pre");
} else {
    alert ("No empieza por pre");
}

//Ej3
let phrase = "Me gusta ese gato";

phrase = phrase.replace("gato", "perro");
alert(phrase);


//Ej4

function randomNumber(n1, n2){
    let random = Math.floor(Math.random() * (n2 - n1 + 1) + n1)
    return random;
}

let random = randomNumber(1, 8);
alert(random);


//Ej5

class Punto {
    constructor(valx, valy) {
        this.valx = valx;
        this.valy = valy;
    }
}


function distance (punto1, punto2){
    return Math.sqrt(Math.pow(punto2.valx - punto1.valx, 2) + Math.pow(punto2.valy - punto1.valy, 2));
}


let punto1 = new Punto(4, 6);
let punto2 = new Punto(1, 2);
let distancia = distance(punto1, punto2);
alert(distancia);
*/
//Ej6
const today = new Date();
const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let bornDate = prompt("Ingrese su fecha de nacimiento (DD/MM/AAAA)");
bornDate = bornDate.split("/");
let bornDay = bornDate[0];
let bornMonth = bornDate[1];
let bornYear = bornDate[2];

let date = new Date(bornYear, bornMonth - 1, bornDay);

alert("Nació un " + dias[date.getDay()]);


alert("Tiene " + (today.getFullYear() - date.getFullYear()) + " años, " + ((today.getMonth() - date.getMonth()) + 1) + " meses y " + (today.getDate() - date.getDate()) + " dias");
