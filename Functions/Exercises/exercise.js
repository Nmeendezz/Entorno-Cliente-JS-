
function square(num) {
    return num ** 2;
}

function factorial(num) {
    let res = 1;
    for (let i = 1; i <= num; i++) {
        res *= i;
    }
    return res;
}

function temperatureConverter(celsius) {
    return (celsius * 9 / 5) + 32;
}

function esPrimo(num) {
    let primo = true;

    if (num < 2) {
        primo = false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            primo = false;
        }
    }
    return primo;
}

function vocalsCounter(arg) {
    let word = arg;
    let letters = word.split("");
    let vocals = ["a", "e", "i", "o", "u"];

    let count = 0;
    for (const letter of letters) {
        if (vocals.includes(letter)) {
            count++;
        }
    }

    return count;
}

function ecuacion(a, b, c) {
    let ec1 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    let ec2 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    return ec1 + " y " + ec2;
}

function callback(num, callBack) {
    if (num > 10) {
        callBack();
    }
}
function moreThan10() {
    alert("Es mayor de 10");
}

function suma() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

function palindromo(palabras) {
    let palindromos = [];

    for (const palabra of palabras) {
        let letras = palabra.split("");
        let invertido = letras.slice().reverse().join('');
        
        if(palabra == invertido){
            palindromos.push(palabra + " ");
        }
    }
    return palindromos;
}

let palabras = ["arroz", "anna","zapato", "abba"]
let ec = palindromo(palabras);
alert(ec);