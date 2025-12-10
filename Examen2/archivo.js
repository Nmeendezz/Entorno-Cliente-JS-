class Producto {
    constructor(id, nombre, categoria, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    actualizarCantidad(nuevaCantidad) {
        this.cantidad = nuevaCantidad;
    }

    obtenerValorTotal() {
        return this.precio * this.cantidad;
    }


}
let p1 = new Producto(1, "Teclado", "Periferico", 200, 10);
console.log(p1);
let nuevoPrecio = p1.obtenerValorTotal();
console.log(nuevoPrecio);

p1.actualizarCantidad(4);

console.log(p1);
let nuevoPrecio2 = p1.obtenerValorTotal();
console.log(nuevoPrecio2);


class Almacen {
    productos = new Set();

    agregarProducto(producto) {
        this.productos.add(producto);
    }

    buscarProducto(id) {
        for (let producto of this.productos) {
            if (producto.id == id) {
                console.log("Se ha encontrado el producto con el id " + id);
                return producto;
            }
        }
        console.log("No se ha encontrado el producto con el id " + id);
        return null;
    }

    eliminarProducto(id) {
        let producto = this.buscarProducto(id);
        if (producto != null) {
            this.productos.delete(producto);
            console.log("Se ha eliminado el producto con éxito");
        }
    }
}
let a1 = new Almacen();
a1.agregarProducto(new Producto(1, "Teclado", "Periferico", 200, 10));
a1.agregarProducto(new Producto(2, "Portatil", "Ordenador", 800, 5));
a1.agregarProducto(new Producto(3, "Iphone 16", "Movil", 1000, 7));
a1.agregarProducto(new Producto(4, "Cascos Hyperx", "Periferico", 100, 15));
a1.eliminarProducto(1);
console.log(a1);
