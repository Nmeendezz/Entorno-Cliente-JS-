//Ej1

let lista = document.getElementById("tareas");
let tarea = document.getElementById("tarea");
let button = document.getElementById("añadir");


button.addEventListener("click", (e) => {
    if (!tarea.value) {
        alert("No puede añadir una tarea vacia");
    } else {
        const text = tarea.value;
        const nuevoNodo = document.createElement("li");
        nuevoNodo.textContent = "tarea: " + text;
        lista.appendChild(nuevoNodo);

        const eliminar = document.createElement("button");
        eliminar.textContent = "Eliminar tarea";

        nuevoNodo.appendChild(eliminar);
        lista.appendChild(nuevoNodo);
        eliminar.addEventListener("click", () => {
            lista.removeChild(nuevoNodo);
        });

        nuevoNodo.addEventListener("click", () => {
            nuevoNodo.style.backgroundColor = "lightgreen";
        });
    }

});

//Ej2

const parrafo = document.getElementById("parrafo");
let style = localStorage.getItem("click");
let bold = false;

function estilos() {
    bold = !bold;
    if (bold) {
        style = "bold";
        parrafo.style.fontWeight = style;
        localStorage.setItem("click", style);
    } else {
        style = "lighter";
        parrafo.style.fontWeight = style;
        localStorage.setItem("click", style);
    }
}
function enter() {
    parrafo.style.color = "blue";

}
function leave() {
    parrafo.style.color = "black";
}

parrafo.addEventListener("click", estilos);

parrafo.addEventListener("mouseenter", enter);

parrafo.addEventListener("mouseleave", leave);

if (style) {
    parrafo.style.fontWeight = style;
}



desactivar.addEventListener("click", () => {
    parrafo.removeAttribute("style");
//    localStorage.removeItem("click");

    parrafo.removeEventListener("click", estilos);
    parrafo.removeEventListener("mouseenter", enter);
    parrafo.removeEventListener("mouseleave", leave);
});
