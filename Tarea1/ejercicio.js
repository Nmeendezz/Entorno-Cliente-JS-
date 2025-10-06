//Ejercicio 1
const iva = 1.21;
let valorInicial = prompt("Ingrese el valor de su producto");
let res = valorInicial * iva;
alert("El valor de su producto con el IVA es " + res);

//Ejercicio 2
let num1 = Number(prompt("Ingrese el primer numero"));
let num2 = Number(prompt("Ingrese el segundo numero"));
let num3 = Number(prompt("Ingrese el tercer numero"));
let sum = num1 + num2 + num3;
let avg = sum / 3;
alert("La media de los numeros ingresados es " + avg);

//Ejercicio 3
let number = Number(prompt("Ingrese un numero"));
if (number % 2 == 0) {
    alert("El numero " + number + " es par");
} else {
    alert("El numero " + number + " es impar");
}

//Ejercicio 4
let name1 = prompt("Ingrese el primer nombre");
let name2 = prompt("Ingrese el segundo nombre");
let name3 = prompt("Ingrese el tercer nombre");
if (name1 == name2) {
    alert("El nombre " + name1 + " esta repetido con " + name2);
} else if (name2 == name3) {
    alert("El nombre " + name2 + " esta repetido con " + name3);
} else if (name1 == name3) {
    alert("El nombre " + name1 + " esta repetido con " + name3);
} else {
    alert("No hay ningun nombre repetido");
}

//Ejercicio 5
let grade;
do {
    grade = Number(prompt("Introduce la nota del examen (0-10)"));
    if (grade < 5 && grade >= 0) {
        alert("Estas suspenso");
    } else if (grade >= 5 && grade <= 7.5) {
        alert("Estas aprobado");
    } else if (grade > 7.5 && grade <= 10) {
        alert("Es un notable");
    } else {
        alert("Error, la nota ingresada esta fuera del rango indicado");
    }
} while (grade > 10 || grade < 0);

//Ejercicio 6
let bornDate = Number(prompt("Ingrese su año de nacimiento"));
let age = 2025 - bornDate;
if (age < 18 && age >= 0) {
    alert("Tienes " + age + " años asi que eres menor de edad");
} else if (age >= 18) {
    alert("Tienes " + age + " años asi que eres mayor de edad");
} else {
    alert("Error, el año ingresado no existe aun")
}

//Ejercicio 7
let dni = Number(prompt("Ingrese su numero de DNI"));
let resto = dni % 23;
switch (resto) {
    case 0:
        alert("La letra de su DNI es la T");
        break;
    case 1:
        alert("La letra de su DNI es la R");
        break;
    case 2:
        alert("La letra de su DNI es la W");
        break;
    case 3:
        alert("La letra de su DNI es la A");
        break;
    case 4:
        alert("La letra de su DNI es la G");
        break;
    case 5:
        alert("La letra de su DNI es la M");
        break;
    case 6:
        alert("La letra de su DNI es la Y");
        break;
    case 7:
        alert("La letra de su DNI es la F");
        break;
    case 8:
        alert("La letra de su DNI es la P");
        break;
    case 9:
        alert("La letra de su DNI es la D");
        break;
    case 10:
        alert("La letra de su DNI es la X");
        break;
    case 11:
        alert("La letra de su DNI es la B");
        break;
    case 12:
        alert("La letra de su DNI es la N");
        break;
    case 13:
        alert("La letra de su DNI es la J");
        break;
    case 14:
        alert("La letra de su DNI es la Z");
        break;
    case 15:
        alert("La letra de su DNI es la S");
        break;
    case 16:
        alert("La letra de su DNI es la Q");
        break;
    case 17:
        alert("La letra de su DNI es la V");
        break;
    case 18:
        alert("La letra de su DNI es la H");
        break;
    case 19:
        alert("La letra de su DNI es la L");
        break;
    case 20:
        alert("La letra de su DNI es la C");
        break;
    case 21:
        alert("La letra de su DNI es la K");
        break;
    case 22:
        alert("La letra de su DNI es la E");
        break;
    default:
        alert("Error, el DNI ingresado es incorrecto")
}

//Ejercicio 8
//Lo mismo que el ejercicio 2 pero que pida cuantos numeros va a introducir el usuario

let size = Number(prompt("Cuantos numeros vas a introducir?"));
let sum2 = 0;
for (let i = 0; i < size; i++) {
    let n = Number(prompt("Introduce un numero"));
    sum += n;
}
let avg2 = sum / size;
alert("La media es " + avg)

