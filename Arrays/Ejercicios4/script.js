/*
//Ejercicio 1
let arr = [];
let num;
while (num != 0) {
    num = Number(prompt("Ingrese un numero"));
    arr.push(num);
}
alert("Usted ha introducido " + (arr.length - 1) + " numeros");

//Ejercicio 2

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    while (num >= 10) {
        sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
}
if (arr.includes(5)) {
    alert("Hay al menos un 5 en los numeros introducidos")
} else {
    alert("No hay ningun 5 en los numeros introducidos")
}

//Ejercicio 3
let number = Number(prompt("Ingrese un numero"));
let cont = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i] == number){
        cont++;
    }
}
alert("El numero " + number + " aparece " + cont + " veces");

//Ejercicio 4

let names = ["Javi", "Rida", "Nico", "Jesus"];
let nombre = prompt("Ingrese un nombre");
nombre = nombre.toLowerCase();
for (let i = 0; i < names.length; i++) {
    names[i] = names[i].toLowerCase();
}
if (names.includes(nombre)) {
    alert("El nombre " + nombre + " si existe en el array");
} else {
    alert("El nombre " + nombre + " no existe en el array");
}

//Ejercicio 5
let option;
let compra = [];
do {
    option = Number(prompt("Ingrese una opcion \n1. Añadir al inicio.\n2. Añadir al final.\n3. Eliminar si existe.\n4. Borrar todos. \n5. Salir."));
    if (option == 1) {
        let dato = prompt("Ingrese el dato que quiere añadir al inicio");
        compra.unshift(dato);
        alert(compra.join(", "));
    } else if (option == 2) {
        let dato = prompt("Ingrese el dato que quiere añadir al final");
        compra.push(dato);
        alert(compra.join(", "));
    } else if (option == 3) {
        let dato = prompt("Ingrese el dato que quiere eliminar al menos 1 vez de la compra");
        dato = dato.toLocaleLowerCase();
        if (compra.includes(dato)) {
            compra.splice(compra.indexOf(dato), 1);
        }
        alert(compra.join(", "));
    } else if (option == 4) {
        compra.splice(0, compra.length);
        alert("Se ha eliminado la compra completa con exito");
    } else if (option == 5) {
        alert("Saliendo...");
    } else {
        alert("Error, la opcion introducida es incorrecta");
    }
} while (option != 5);


//Ejercicio 6
let prices = [15, 25, 30.99, 53.5];

let discount = Number(prompt("Ingrese el porcentaje de descuento que desea aplicarle a los precios"));
discount = (100 - discount) / 100;
alert("Los precios actuales son " + prices.join(", "));
for (let i = 0; i < prices.length; i++) {
   prices[i] *= discount;
   prices[i] = prices[i].toFixed(2);
}
alert(prices.join(", "));
*/

//Ejercicio 7
let arr = [];
let num;
while (num != 0) {
    num = Number(prompt("Ingrese un numero"));
    arr.push(num);
}
alert("Usted ha introducido " + (arr.length - 1) + " numeros");
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let num = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = num;
        }
    }
}
alert("El array ordenado es " + arr.join(", "))