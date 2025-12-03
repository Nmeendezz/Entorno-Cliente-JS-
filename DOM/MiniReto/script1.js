/*
//1
let alerta = setInterval(() => {
    let repetir = confirm("Quiere recibir un recordatorio en los proximos 5 segundos?")

    if (!repetir) {
        clearInterval(alerta);
        alert("No recibirá mas recordatorios");
    }

}, 5000);


//2
let usuario = localStorage.getItem("usuario");
if(!usuario){
    usuario = prompt("¿Como te llamas?");
    if(usuario){
        localStorage.setItem("usuario", usuario);
    } else {
        usuario = "invitado";
    }
}

alert("Hola, " + usuario);


console.log(navigator);

//3
let cont = 0;
let alerta = setInterval(() => {
    if (navigator.onLine) {
        cont++;
        console.log("Llevas " + cont + " segundos conectado a internet");
    } else {
        console.log("No hay conexion");
        clearInterval(alerta);
    }

}, 1000);
*/

console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.pathname);


let intervalo = setTimeout(() => {
    confirm("Quieres cambiar a la pagina 2???");
    window.location.href = "file:///home/diurno/EntornoClienteJS/DOM/MiniReto/index2.html";
}, 5000);