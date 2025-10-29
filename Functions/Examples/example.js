function saludo(nombre, callBack) {
    alert("Hola " + nombre);
    callBack();
}

function age() {
    alert("tiene 20 años");
}

/*
//Ej1 -> Conversor decimal a hexadecimal
let decimal = Number(prompt("Ingrese el numero decimal"));
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let result = [];
while (decimal / 16 != 0) {
    let cociente = Math.trunc(decimal / 16);
    let residuo = decimal % 16;
    result.push(hex[residuo]);
    
    decimal = cociente;
};
result = result.reverse().join('');
alert(result);

//Ej2 -> Conversor de segundos a dias + horas + min + seg
let seg = Number(prompt("Ingrese los segundos que quiere convertir"));
let dia = 0;
let hor = 0;
let min = 0;

if (seg > 60) {
    min = Math.trunc(seg / 60);
    seg = seg % 60;
}

if (min > 60) {
    hor = Math.trunc(min / 60);
    min = min % 60;
}

if (hor > 24) {
    dia = Math.trunc(hor / 24);
    hor = hor % 24;
}

alert(dia + " dias - " + hor + " horas - " + min + " minutos - " + seg + " segundos");

//Ej3 -> Calculadora de nº perfecto
let num = Number(prompt("Ingrese un numero"));
let divisores = [];
for(let i = 0; i < num; i++){
    if(num % i == 0){
        divisores.push(i);
    }
}
let suma = 0;
for(let i = 0; i < divisores.length; i++){
    suma += divisores[i];
}
if(suma === num){
    alert("El " + num + " es un numero perfecto");
} else {
    alert("El " + num + " no es un numero perfecto");
}

//Ej4 -> Encontrar el maximo de un array
let arr = [];
let size = Number(prompt("Cuantos numeros va a ingresar?"));
for(let i = 0; i < size; i++){
    let num = Number(prompt("Ingrese un numero"));
    arr.push(num);
}

let max = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}

alert("El numero maximo de los datos ingresados es el " + max);

*/
//Ej5 -> Rotar un array
let arr = [2,5,6];

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
    }
}
/*
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let num = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = num;
        }
    }
}*/
alert(arr);