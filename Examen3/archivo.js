//Ej1

let lista = document.getElementById("tareas");
let tarea = document.getElementById("tarea");
let button = document.getElementById("añadir");


button.addEventListener("click", (e) => {
    if (!tarea) {
        alert("No puede añadir una tarea vacia");
    } else {
        e.preventDefault();
        const text = tarea.value;
        const nuevoNodo = document.createElement("li");
        nuevoNodo.textContent = "tarea: " + text;
        lista.appendChild(nuevoNodo);

        const eliminar = document.createElement("button");
        eliminar.textContent = "Eliminar tarea";
        lista.appendChild(eliminar);
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

parrafo.addEventListener("click", estilos);

if (style) {
    parrafo.style.fontWeight = style;
}

parrafo.addEventListener("mouseenter", () => {
    parrafo.style.color = "blue";
});

parrafo.addEventListener("mouseleave", () => {
    parrafo.style.color = "black";
});

desactivar.addEventListener("click", () => {
    parrafo.removeEventListener("click", estilos);
});
