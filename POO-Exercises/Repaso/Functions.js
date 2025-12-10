let numeros = [1, 2, 3, 4, 5];

function aplicarOperacion(numeros, operacion) {
    const duplicar = [];
    for (let i = 0; i < numeros.length; i++) {
        duplicar.push(operacion(numeros[i]));
    }
    return duplicar;
}

function duplicarCadaNumero(numero) {
    return numero * 2;
}

console.log(aplicarOperacion(numeros, duplicarCadaNumero));