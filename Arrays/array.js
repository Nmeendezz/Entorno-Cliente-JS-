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
