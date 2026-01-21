/*
//Ej1
const padre1 = document.getElementById("padre");
const hijo1 = document.getElementById("hijo");
const child1 = document.getElementById("child");

padre1.addEventListener("click", () => {
    alert("Padre clicado");
});

hijo1.addEventListener("click", () => {
    alert("Hijo clicado");
});

child1.addEventListener("mouseenter", () => {
    // Eventos que no generan propagacion -> mouseenter7mouseleave y focus/blur
    alert("Está encima de child");
});

//Ej2
const padre2 = document.getElementById("padre");
const hijo2 = document.getElementById("hijo");
const child2 = document.getElementById("child");

padre2.addEventListener("click", (noPropagado) => {
    alert("Padre clicado");
    noPropagado.stopPropagation();
});

hijo2.addEventListener("click", (noPropagado) => {
    alert("Hijo clicado");
    noPropagado.stopPropagation();

});

child2.addEventListener("mouseenter", (noPropagado) => {
    alert("Está encima de child");
    noPropagado.stopPropagation();

});

//Ej3
const link = document.getElementById("link");
link.addEventListener("click", (navegar) => {
    navegar.preventDefault();
    alert("Haz clicado pero no se puede navegar");
    link.textContent = "El enlace ya no redirige";
})
*/

//Ej4

const boton = document.getElementById("sumar");
const h1 = document.getElementById("titulo");
let cont = 0;
h1.textContent = "Haz pulsado " + cont + " veces";
boton.addEventListener("click", () => {
    cont++;
    if (cont == 10) {
        h1.textContent = "Haz pulsado " + cont + " veces";
        setTimeout(() => {
            alert("Haz llegado a pulsar 10 veces");
        }, 100);
        
    }
    h1.textContent = "Haz pulsado " + cont + " veces";
});

