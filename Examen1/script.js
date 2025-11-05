/*
//Ej1
let repetidos = [1,3,3,5,5];

let noRepetidos =[];
for(let i = 0; i < repetidos.length; i++){
    let repetido = false;
    if(noRepetidos.includes(repetidos[i])){
        repetido = true;
    }

    if(repetido == false){
        noRepetidos.push(repetidos[i]);
    }
}
alert(noRepetidos);

//Ej2
let num;
let sumPares = 0;

while(num != 0){
    num = Number(prompt("Introduzca un numero"));

    if(num % 2 == 0 && num > 0){
        sumPares += num;
    }
};
alert(sumPares);

//Ej3
let num = Number(prompt("Ingrese el numero del que quiere saber la tabla de multiplicar"));
let multi = [];
for(let i = 1; i <= 10; i++){
    multi.push(num * i);
}
alert(multi);

//Ej4
let num = Number(prompt("Ingrese el numero del que quiere saber el factorial"));
let res = 1;
for(let i = 1; i <= num; i++){
    res *= i;
}
alert(res);
*/

//Ej5
let num = Number(prompt("Ingrese un numero"));
let cont = 0;
while(num >= 1){
    num /= 10
    cont++;
}
alert(cont);

