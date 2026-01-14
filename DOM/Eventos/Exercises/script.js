//Ej1
const p = document.getElementById("parrafo")
p.addEventListener("mouseenter", () => {
    p.style.color = "blue";
});

//Ej2
p.addEventListener("mouseleave", () => {
    p.style.color = "black";
});

//Ej3
let cont = 0;
const boton = document.getElementById("sumar");
const h1 = document.getElementById("titulo");
h1.textContent = "Haz pulsado " + cont + " veces";
boton.addEventListener("click", () => {
    cont++;
    h1.textContent = "Haz pulsado " + cont + " veces";
})

//Ej4
const dias = document.getElementById("dias");
const tardes = document.getElementById("tardes");
const noches = document.getElementById("noches");

dias.addEventListener("click", (saludo) => {
    console.log("Buenos dias");
})
tardes.addEventListener("click", (saludo) => {
    console.log("Buenas tardes");
})
noches.addEventListener("click", (saludo) => {
    console.log("Buenas noches");
})

//Ej5

tardes.addEventListener("dblclick", (saludo) => {
    console.log("Hasta luego");
})

//Ej6

const cambioCss = document.getElementById("cambioCss");
cambioCss.addEventListener("click", () => {
    h1.classList.toggle("rojo");
});
