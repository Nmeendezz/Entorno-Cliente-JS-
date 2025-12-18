/*
//Ej1
let tags = document.getElementsByTagName(prompt("Introduzca una etiqueta"));
for(let tag of tags){
    console.log(tag.textContent);
}

//Ej2
let headers = document.getElementsByTagName("header");
let h1s = document.getElementsByTagName("h1");

let nuevoH1 = document.createElement('h1');
nuevoH1.textContent = "Titulo";
// document.body.appendChild(nuevoH1);

for(let header of headers){
    for(let h1 of h1s){
        header.insertBefore(nuevoH1, h1);
    }
}

//Ej3
let cont = 0;
let nuevoP = document.createElement('p');
document.body.appendChild(nuevoP);
let interval = setInterval(() => {    
    nuevoP.textContent = cont;    
    cont++;
}, 3000);

//Ej4
let option;
do{
    option = prompt("Seleccione una opcion: \n1. Añadir al inicio \n2. Añadir al final \n3. Salir");
    if(option == 1){
        let contenido = prompt("Que desea agregar?");
        let ol = document.querySelector('ol');

        let nuevoLi = document.createElement('li');
        nuevoLi.textContent = contenido;
        ol.insertBefore(nuevoLi, ol.firstChild);
    } else if(option == 2){
        let contenido = prompt("Que desea agregar?");
        let ol = document.querySelector('ol');

        let nuevoLi = document.createElement('li');
        nuevoLi.textContent = contenido;
        ol.appendChild(nuevoLi);
    } else if(option == 3){
        alert("Saliendo...")
    }
} while(option != 3);

*/
//Ej5
let ol = document.querySelector('ol');
let lists = document.getElementsByTagName('li');
let hermanoAnterior;
let hermanoSiguiente;
for(let i = 0; i < lists.length; i++){
    if(i == 1){
        hermanoAnterior = lists[i - 1].textContent;
        hermanoSiguiente = lists[i + 1].textContent;
    }
}
console.log(hermanoAnterior);
console.log(hermanoSiguiente);
//let primerLi = document.querySelectorAll('li')[0];
//let ultimoLi = document.querySelectorAll('li')[2];
//console.log(primerLi.textContent);
//console.log(ultimoLi.textContent);