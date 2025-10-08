/*
//Ejercicio 1

let size = Number(prompt("Cuantos numeros vas a introducir?"));
let numbers = [];
for (let i = 0; i < size; i++) {
    numbers[i] = Number(prompt("Introduce un numero"));
}
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let num = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = num;
        }
    }
}

alert("Los numeros introducidos son " + numbers);


//Ejercicio 2
let option;
let users = [];
do {
    let email;
    let password;
    option = Number(prompt("Ingrese una de las opciones: \n1. Iniciar sesion \n2. Registrarse \n3. Salir"));
    if (option == 1) {
        email = prompt("Ingrese su correo electronico");
        let found = false;

        for (let i = 0; i < users.length; i++) {
            if (users[i][0] === email) {
                found = true;
                password = prompt("Ingrese su contraseña");

                if (users[i][1] === password) {
                    alert("Inicio de sesion exitoso");
                } else {
                    alert("Error, la contraseña ingresada es incorrecta");
                }
            }
            if (!found) {
                alert("Error, el correo electronico introducido es incorrecto o no se ha registrado");
            }
        }
    } else if (option == 2) {
        email = prompt("Ingrese su correo electronico");
        let found = false;

        for (let i = 0; i < users.length; i++) {
            if (users[i][0] === email) {
                found = true;
            }
        }
        if (found) {
            alert("Error, el correo electronico introducido ya esta registrado. \nPorfavor inicie sesion");
        } else {
            password = prompt("Ingrese su contraseña");
            let user = [email, password]
            users.push(user);
            alert("Registro de sesion exitoso");
        }

    } else if (option == 3) {
        alert("Saliendo");
    }
} while (option != 3);


// Ejercicio 3 (con array)
let size = Number(prompt("Cuantas notas va a ingresar?"));
let grades = [];
let sum = 0;
let cont = 0;

for (let i = 0; i < size; i++){
    grades[i] = Number(prompt("Ingrese una nota"));
    if(grades[i] >= 5){
        sum += grades[i];
        cont++;
    }
}
alert("La media de las notas aprobadas es " + sum / cont);

// Ejercicio 3 (sin array)
let size = Number(prompt("Cuantas notas va a ingresar?"));
let num = 0;
let sum = 0;
let cont = 0;

for (let i = 0; i < size; i++) {
    num = Number(prompt("Ingrese una nota"));
    if (num >= 5) {
        sum += num;
        cont++;
    }
}
alert("La media de las notas aprobadas es " + sum / cont);
*/

//Ejercicio 4
let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers[i] = Number(prompt("Introduce un numero"));
}
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let num = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = num;
        }
    }
}

alert("Los numeros introducidos son " + numbers);
/*

//Ejercicio 5
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 2, 3, 3];
let result = [];
let cont = 0;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (arr1[i] == arr2[j] && i == j) {
            cont++;
        }
    }
}
alert("Hay " + cont + " elementos iguales y en la misma posicion")
*/