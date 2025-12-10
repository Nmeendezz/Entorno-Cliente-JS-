class Vehiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo
        this.ano = ano;
    }

    descripcion() {
        return console.log("Vehiculo: \n- Marca: " + this.marca + "\n- Modelo: " + this.modelo + "\n- Año: " + this.ano);
    }

    edad() {
        fecha = new Date;
        return "El vehiculo tiene " + (fecha.getFullYear() - this.ano) + " años";
    }
}