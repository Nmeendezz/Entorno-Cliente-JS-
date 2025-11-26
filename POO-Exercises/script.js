//Ej1
const persona = {
    nombre: "Nico",
    edad: 19,
    ciudad: "Madrid"
}
/*
alert(persona.nombre);
alert(persona.edad);
alert(persona.ciudad);

alert(persona["nombre"]);
alert(persona["edad"]);
alert(persona["ciudad"]);


persona.edad = 14;
alert(persona.edad);

persona["profesion"] = "Desarrollador Full Stack";
alert (persona.profesion);

//Ej2

persona.saludar = function (){
    alert("Hola, soy " + persona.nombre);
}

persona.cumplirAnos = function (){
    persona.edad += 1;
}

persona.saludar();

persona.cumplirAnos();
alert(persona.edad);

//Ej3
console.log(persona);

delete persona.ciudad;

console.log(persona);

//Ej4

const estudiante1 = {
    nombre: "Felipe",
    nota: 5
}

const estudiante2 = {
    nombre: "Juan",
    nota: 8
}
const estudiante3 = {
    nombre: "Pablo",
    nota: 3
}

let estudiantes = [estudiante1, estudiante2, estudiante3];

estudiantes.media = function (){
    let suma = 0;
    for(let i = 0; i < estudiantes.length; i++){
        suma += estudiantes[i].nota;
    }
    return suma / estudiantes.length
}


estudiantes.aprobados = function (){
    let aprobado = [];
    for(let i = 0; i < estudiantes.length; i++){
        if(estudiantes[i].nota > 5){
            aprobado.push(estudiantes[i]);
        }
    }
    return aprobado;
}

let aprobado = estudiantes.aprobados();
for(let i = 0; i < aprobado.length; i++){
    alert(aprobado[i].nombre);
    alert(aprobado[i].nota);
}

//Ej5
const estudiante1 = {
    nombre: "Felipe",
    nota: 5
}

const estudiante2 = {
    nombre: "Juan",
    nota: 8
}
const estudiante3 = {
    nombre: "Pablo",
    nota: 3
}

let estudiantes = [estudiante1, estudiante2, estudiante3];

estudiantes.buscarPorNombre = function (nombre){
    for(let i = 0; i < estudiantes.length; i++){
        if(estudiantes[i].nombre == nombre){
            return estudiantes[i];
        }
    }
    return null;
}
let estudiante = estudiantes.buscarPorNombre("Juan");

alert(estudiante.nombre);
alert(estudiante.nota);
*/

//Ej6
const estudiante1 = {
    nombre: "Felipe",
    nota: 5
}

const estudiante2 = {
    nombre: "Juan",
    nota: 8
}
const estudiante3 = {
    nombre: "Pablo",
    nota: 3
}

let estudiantes = [estudiante1, estudiante2, estudiante3];

estudiantes.actualizarNota = function (nombre, nuevaNota){
    for(let i = 0; i < estudiantes.length; i++){
        if(estudiantes[i].nombre == nombre){
            estudiantes[i].nota = nuevaNota
            return estudiantes[i];
        }
    }
    return null;
}

let estudiante = estudiantes.actualizarNota("Pablo", 6);

alert(estudiante.nombre);
alert(estudiante.nota);