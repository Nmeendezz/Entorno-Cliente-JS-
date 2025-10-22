/*
//Ejercicio 1
let numbers = [1,2,3,4,3,2];
let setNumbers = new Set(numbers);
let text = "";
for(const x of setNumbers){
    text += x + ", ";
}
alert (text);

//Ejercicio 2
let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);

const arrayA = [...setA];
const arrayB = [...setB];

let repetidos = new Set(arrayA.filter(x => arrayB.includes(x)));
let text = "";
for (const x of repetidos) {
    text += x + ", ";
}
alert(text);

//Ejercicio 3
let option;
let users = new Map();
do {
    let email;
    let password;
    option = Number(prompt("Ingrese una de las opciones: \n1. Iniciar sesión \n2. Registrarse \n3. Salir"));
    if (option == 1) {
        email = prompt("Ingrese su correo electronico");
        let found = false;

        if (users.has(email)) {
            found = true;
            password = prompt("Ingrese su contraseña");
            if (users.get(email) == password) {
                alert("Inicio de sesion exitoso");
            } else {
                alert("Error, la contraseña ingresada es incorrecta");
            }
        }
        if (!found) {
            alert("Error, el correo electronico introducido es incorrecto o no se ha registrado");
        }

    } else if (option == 2) {
        email = prompt("Ingrese su correo electronico");
        let found = false;

        if (users.has(email)) {
            found = true;
        }
        if (found) {
            alert("Error, el correo electronico introducido ya está registrado. \nPorfavor inicie sesión");
        } else {
            password = prompt("Ingrese su contraseña");
            users.set(email, password);
            alert("Registro de sesión exitoso");
        }

    } else if (option == 3) {
        alert("Saliendo...");
    }
} while (option != 3);
*/
//Ejercicio 4

let size1 = Number(prompt("Cuantos datos va a ingresar en el primer conjunto?"));
let conjunto1 = new Set();
for (let i = 0; i < size1; i++) {
    let dato = prompt("Ingrese un dato");
    conjunto1.add(dato);
}

let size2 = Number(prompt("Cuantos datos va a ingresar en el segundo conjunto?"));
let conjunto2 = new Set();
for (let i = 0; i < size2; i++) {
    let dato = prompt("Ingrese un dato");
    conjunto2.add(dato);
}

let size3 = Number(prompt("Cuantos datos va a ingresar en el tercer conjunto?"));
let conjunto3 = new Set();
for (let i = 0; i < size3; i++) {
    let dato = prompt("Ingrese un dato");
    conjunto3.add(dato);
}

let noRepite = new Set();

for (const x of conjunto1) {
    let repite2 = conjunto2.has(x);
    let repite3 = conjunto3.has(x);
    if (!repite2 && !repite3) {
        noRepite.add(x);
    }
}

for (const x of conjunto2) {
    let repite1 = conjunto1.has(x);
    let repite3 = conjunto3.has(x);
    if (!repite1 && !repite3) {
        noRepite.add(x);
    }
}

for (const x of conjunto3) {
    let repite1 = conjunto1.has(x);
    let repite2 = conjunto2.has(x);
    if (!repite1 && !repite2) {
        noRepite.add(x);
    }
}

let text = "";
for (const x of noRepite) {
    text += x + ", ";
}
alert(text);