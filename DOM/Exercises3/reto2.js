
let nombre = localStorage.getItem("nombre");
let tema = localStorage.getItem("tema");

if (!nombre) {
  nombre = prompt("Introduzca su nombre:");
  if (!nombre) {
    nombre = "Usuario";
  }
  localStorage.setItem("nombre", nombre);
}

if (!tema) {
  res = prompt("Elige tema: claro u oscuro").toLowerCase();
  if (res === "oscuro") {
    tema = "oscuro";
  } else {
    tema = "claro";
  }
  localStorage.setItem("tema", tema);
}
document.body.className = tema;

let h1 = document.querySelector("h1");
h1.textContent = `Bienvenid@ ${nombre}`;
localStorage.setItem("tema", "");
