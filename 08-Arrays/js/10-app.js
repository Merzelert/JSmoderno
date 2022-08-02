const carrito = [
    {nombre: "Monitor 32 pulgadas", precio: 5500},
    {nombre: "Tablet", precio: 3500},
    {nombre: "Celular", precio: 7400},
    {nombre: "Disco duro", precio: 500},
    {nombre: "Teclado", precio: 2200},
    {nombre: "Audifonos", precio: 1500},
]

//Metodo forEach
carrito.forEach( function(producto){
        console.log(`${producto.nombre} - Precio ${producto.precio}`);       
    }
)

//Metodo map este metodo crea un nuevo arreglo 

const nuevoArreglo = carrito.map (function(producto){
    return `${producto.nombre} - Precio ${producto.precio}`;
    }
)

console.log(nuevoArreglo);





