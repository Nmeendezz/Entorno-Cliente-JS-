//Ej1

/*
function hacerTarea(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Tarea compleatada")
        }, segundos * 1000);
    });
}

async function run() {
    try {
        let mesagge = await hacerTarea(5);
        console.log(mesagge);
    } catch (error) {
        console.error("Error: " + error);
    }
}
run();
*/

//Ej2
function doblar(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number <= 0) {
                reject("Utiliza numeros positivos");
            } else {
                resolve(number *= 2);
            }
        }, 1000);
    })
}

async function run() {
    try {
        let doblado = await doblar(-5);
        let doblado2 = await doblar(doblado);
        console.log("Resultado: " + doblado2);
    } catch (error) {
        console.log("Error:" + error);
    }
}
run();