class Auto extends Vehiculo {
    constructor(marca, modelo, ano, puertas) {
        super(marca, modelo, ano);
        this.puertas = puertas;
    }

    descripcion() {
        super.descripcion();
        console.log(`\n- Puertas: ${this.puertas}`);
    }
}


$a1 = new Auto("Ferrari", "LaFerrari", 2010, 2);
$a1.descripcion();