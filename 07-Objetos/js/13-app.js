const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible: true,
    mostrarInfo : function () {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

// Obtener las llaves de un objeto en forma de array 

console.log(Object.keys(producto));

// Obtener los valores de un objeto en forma de array

console.log(Object.values(producto));

// Obtener las entradas del objeto en pares en forma de array 

console.log(Object.entries(producto));


