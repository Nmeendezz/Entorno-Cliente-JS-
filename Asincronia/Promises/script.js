//Ej1
/*
function esperarSegundos(segundos) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            let exito = true;
            if(exito) {
                resolve ("Han pasado " + segundos + " segundos");
            } else {
                reject("Error");
            }
        }, segundos * 1000);
    });
}

esperarSegundos(5).then((resultado) => {
    console.log(resultado);
})


//Ej2
function doblarNumero(number){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (number *= 2);
        }, 1000);
    });
}

doblarNumero(4).then((resultado) => {
    console.log(resultado);
})

*/

function dividirEntreDos(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number == 0) {
                reject("No se puede dividir");
            } else {
                resolve("El numero " + number + " dividido entre dos es " + (number /= 2));
            }
        }, 1000);
    });
}

dividirEntreDos(3)
.then((resultado) => {
    console.log(resultado);
})
.catch((error) => {
    console.log(error);
})
