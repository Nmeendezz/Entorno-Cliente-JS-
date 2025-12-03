console.log(location.href);
let intervalo = setTimeout(() => {
    confirm("Quieres volver a la pagina anterior? (pagina 1)");
    window.location.href = "file:///home/diurno/EntornoClienteJS/DOM/MiniReto/index1.html";
}, 5000);