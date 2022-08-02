//Object literal 

const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible: true,
    mostrarInfo : function () {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

//Object constructor

function Producto(nombre, precio, disponible) {
    this.nombre= nombre;
    this.precio=precio;
    this.disponible=true;
}

const producto2 = new Producto("Celular", 8000);

console.log(producto2);

