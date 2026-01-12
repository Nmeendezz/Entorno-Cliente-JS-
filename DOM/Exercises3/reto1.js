// Intentamos hacer un prompt que nos pida el color de la fuente de texto en la página
let color = prompt("Introduce el color de la fuente del texto:");
let parrafos = document.querySelectorAll('p');
parrafos.forEach(p => {
    p.setAttribute('style', `color: ${color};`);
}
)