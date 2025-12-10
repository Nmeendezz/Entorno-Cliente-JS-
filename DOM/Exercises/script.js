//Ej1 

console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.pathname);

//Ej2

let intervalo = setTimeout(() => {
    alert("Te redirigirá a otra pagina html");
    location.assign()
}, 5000);