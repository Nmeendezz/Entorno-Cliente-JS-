//Ejercicio 1
/*
let area;
let perimeter = 0;
let lado = Number(prompt("Cuanto mide el lado"));
area = lado * lado;
for (let i = 0; i < 4; i++) {
    perimeter += lado;
}
alert("El area del cuadrado es " + area + " y el perimetro es " + perimeter)


//Ejercicio 2
let num = Number(prompt("Introduzca un numero de 4 digitos"));
let first = (num - (num % 1000)) / 1000;
let last = num % 10;
let mid = ((num-last) % 1000) / 10;
alert("El primero es el " + first);
alert("Los del medio son " + mid);
alert("El ultimo es " + last);

if(first + last == mid){
    alert("Es un numero magico");
} else{
    alert("No es un numero magico");
};


//Ejercicio 3
let number = Number(prompt("Introduce un numero"));
if (number < 0) {
    number *= -1
}

let cont = 0;
if (number == 0) {
    cont = 1;
} else {
    while (number >= 1) {
        number = Number(number / 10);
        cont++;
    }
}
alert("El numero tiene " + cont + " digitos");


//Ejercicio 4
let pairs = [];
for(let i= 1; i <= 100; i++){
    if(i % 2 == 0){
        pairs.push(i);
    }
}
alert ("Los numeros pares del 1 al 100 son: " + pairs);

//Ejercicio 5
let size = Number(prompt("Cuantos numeros va a ingresar?"));
let sum = 0;
let number = 0;
for(let i= 0; i < size; i++){
    number = Number(prompt("Ingrese un numero"))
    sum += number;
}
alert ("La media de los numeros ingresados es " + sum / size);


//Ejercicio 6
let max = 100;
let min = 1;
let adivinar = false;
let random;
let ask;
let ask2;

while (adivinar == false) {
    random = Math.floor(Math.random() * (max - min + 1)) + min;
    do {
        ask = prompt("Tu numero es " + random + "?(Si/No)");
        if (ask.toLowerCase() === "si") {
            adivinar = true;
        } else if (ask.toLowerCase() === "no") {
            do {
                ask2 = prompt("Tu numero es mayor?(Si/No)");
                if (ask2.toLowerCase() === "si") {
                    min = random + 1;
                } else if (ask2.toLowerCase() === "no") {
                    max = random - 1
                } else {
                    alert("Error, la respuesta ingresada es incorrecta");
                }
            } while (!(ask2.toLowerCase() === "si" || ask2.toLowerCase() === "no"));
        } else {
            alert("Error, la respuesta ingresada es incorrecta");
        }
    } while (!(ask.toLowerCase() === "si" || ask.toLowerCase() === "no"));
}

//Ejercicio 7
let option = 0;
let ask;
alert("Preparate para el partido de tu vida!!!");
do {
    option = Number(prompt("Es el minuto 15, recibes tu primera oportunidad cerca del area \nQue decides hacer? \n1. Disparar directo a porteria \n2. Hacer un pase filtrado al delantero"));
    if (option == 1) {
        alert("El balon se va por arriba, y la hinchada suspira con decepcion. El DT te grita: '¡Levanta la cabeza, muchacho!'");
    } else if (option == 2) {
        alert("El delantero anota y todos te felicitan por tu vision de juego!");
    } else {
        alert("Error, la opcion seleccionada es incorrecta");
    }
} while (option != 1 && option != 2);
do {
    option = Number(prompt("Es el minuto 60 y el marcador esta en 1-1 \nRecuperas el balon en el medio del campo con espacio \nQue decides hacer? \n1. Seguir corriendo y encarar a la defensa \n2. Abrir a la banda para armar una jugada colectiva \n3. Probar disparo lejano"));
    if (option == 1) {
        alert("Pierdes la posesion y tu equipo queda mal parado");
    } else if (option == 2) {
        alert("Tu compañero centra y el delantero remata de cabeza, pero el portero la despeja y es tiro de esquina")
    } else if (option == 3) {
        alert("¡Es un golazo historico, de esos que repiten en la TV!");
    } else {
        alert("Error, la opcion seleccionada es incorrecta");
    }
} while (option != 1 && option != 2 && option != 3);
do {
    option = Number(prompt("Minuto 85, el final se acerca \nEl DT desde la banda: '¡Esta es la ultima!'. Queda la jugada decisiva \n Que decides hacer? \n1. Intentar ser el heroe y disparar tu mismo \n2. Dar una asistencia a tu compañero mejor posicionado \n3. Asegurar el resultado y mantener la posesion"))
    if (option == 1) {
        alert("Fallas y el equipo termina empatando, la prensa dice que 'te falto humildad'");
        alert("Termina siendo un fracaso por tu egoismo y error, aprendes la leccion de que el futbol no es solo individualidad");
    } else if (option == 2) {
        alert("¡ES GOL! Lo celebran juntos, eres aclamado como cerebro del equipo");
        alert("Es una victoria heroica con tu gol decisivo y eres un idolo absoluto");
    } else if (option == 3) {
        alert("El partido termina en empate, el entrenador valora tu madurez. \nPero los fans salen con un sabor agridulce, querian la victoria");
        alert("Es un empate con madurez y terminas siendo respetado como jugador ingeligente");
    } else {
        alert("Error, la opcion seleccionada es incorrecta")
    }
} while (option != 1 && option != 2 && option != 3);


//Ejercicio 8
let option = 0;
do {
    option = Number(prompt("Ingrese una de las opciones: \n1. Hacer media de numeros \n2. Factorial de numeros \n3. Sumatorio de numeros \n4. Salir"));

    if(option == 1){
        let size = 0;
        let sum = 0;
        let num = 0;
        size = Number(prompt("Cuantos numeros desea ingresar para hacer la media?"));
        for(let i = 0; i < size; i++){
            num = Number(prompt("Ingrese un numero"));
            sum += num;
        }
        alert("La media de los numeros ingresados es " + sum / size);
    } else if(option == 2){
        let num = 0;
        let fac = 1;
        num = Number(prompt("De cual numero desea hacer su factorial?"));
        for(let i = 1; i <= num; i++){
            fac *= i;
        }
        alert("El factorial de " + num + " es " + fac);
    } else if(option == 3){
        let size = 0;
        let num = 0;
        let sum = 0;
        size = Number(prompt("Cuantos numeros desea ingresar para hacer la suma?"));
        for(let i = 0; i < size; i++){
            num = Number(prompt("Ingrese un numero"));
            sum += num;
        }
        alert("El sumatorio de los numeros ingresados es " + sum);
    }
} while (option != 4);


//Ejercicio 9

const game = ["Piedra", "Papel", "Tijera"];
let index = Math.floor(Math.random() * game.length);
let random = game[index];
let ask;

do {
    alert("Vamos a jugar!")
    ask = prompt("Piedra, papel o tijera...");
    if (ask.toLowerCase() === "piedra" || ask.toLowerCase() === "papel" || ask.toLowerCase() === "tijera") {
        alert("Yo saco " + random);
        if ((ask.toLowerCase() === "piedra" && random == "Tijera") || (ask.toLowerCase() === "tijera" && random == "Papel") || (ask.toLowerCase() === "papel" && random == "Piedra")) {
            alert("Has ganado tu, Felicidades!!!");
        } else if ((ask.toLowerCase() === "tijera" && random == "Piedra") || (ask.toLowerCase() === "Papel" && random == "tijera") || (ask.toLowerCase() === "Piedra" && random == "Papel")) {
            alert("He ganado yo!");
        } else {
            alert("Es un empate!");
        }
    } else {
        alert("Error, has ingresado una opcion invalida")
    }
} while (!(ask.toLowerCase() === "piedra" || ask.toLowerCase() === "papel" || ask.toLowerCase() === "tijera"));

//Ejercicio 10

let primos = [];
for (let i = 2; i <= 100; i++) {
    let esprimo = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            esprimo = false;
        }
    }
    if (esprimo) {
        primos.push(i);
    }
}

alert(primos + " ");


//Ejercicio 11
let num = Number(prompt("Introduce un numero"));
let sum = 0;
while(num >= 10){
    sum = 0;
    while(num > 0){
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    num = sum;
}
alert ("El numero como navasesh es " + sum);
*/