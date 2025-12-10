console.log(location.href);
let intervalo = setTimeout(() => {
    let ask = confirm("Quieres volver a la pagina anterior? (pagina 1)");

    if (!ask) {
        clearTimeout(ask);
        alert("Se queda en esta pagina (pagina 2)");
    } else {
    location.assign("file:///home/diurno/EntornoClienteJS/DOM/MiniReto/index1.html");
    }
    
}, 5000);