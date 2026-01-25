//Ej1
const button = document.createElement("button");
button.textContent = "Pulse aqui";
document.body.appendChild(button);

let cont = 1;
button.addEventListener("click", (e) => {
    if (e) {
        const par = document.createElement("p");
        par.textContent = "Has pulsado " + cont + " veces";
        document.body.appendChild(par);
        cont++;
    }
});

//Ej2
let cont2 = 0;
setTimeout(() => {
    let botones = true;
    do {
        botones = confirm("Quiere agregar otro boton?");
        if (botones) {
            cont2++;
            let num = cont2;
            let button2 = document.createElement("button");
            button2.textContent = "Boton " + num;

            button2.addEventListener("click", () => {
                alert("Ha pulsado el boton numero " + num);
            });

            document.body.appendChild(button2);
        }
    } while (botones);
}, 1000);

//Ej3
const button3 = document.createElement("button");
button3.textContent = "Interruptor";
document.body.appendChild(button3);

const img = document.createElement("img");
img.setAttribute("src", "/DOM/PracticaExamen/bombillaEncendida.avif");
document.body.appendChild(img);
let interruptor = false;
button3.addEventListener("click", () => {
    interruptor = !interruptor;
    if (interruptor) {
        img.setAttribute("src", "/DOM/PracticaExamen/bombillaApagada.jpg");
    } else {
        img.setAttribute("src", "/DOM/PracticaExamen/bombillaEncendida.avif");
    }
});

//Ej4
let color;
function backgroundColor(color) {
    if (color.toLowerCase() == "rojo") {
        document.body.style.background = "red";
    } else if (color.toLowerCase() == "azul") {
        document.body.style.background = "blue";
    } else {
        alert("El color introducido no esta disponible");
    }
}
setTimeout(() => {
    color = prompt("Que color desea poner de fondo?");
    backgroundColor(color);
    localStorage.setItem("fondo", color);
}, 5000);



//Ej5
let storageColor = localStorage.getItem("fondo");
backgroundColor(storageColor);
