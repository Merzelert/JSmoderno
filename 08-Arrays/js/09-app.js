const carrito = [
    {nombre: "Monitor 32 pulgadas", precio: 5500},
    {nombre: "Tablet", precio: 3500},
    {nombre: "Celular", precio: 7400},
    {nombre: "Disco duro", precio: 500},
    {nombre: "Teclado", precio: 2200},
    {nombre: "Audifonos", precio: 1500},
]

for (let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - Precio ${carrito[i].precio}`);
}
//Metodo
carrito.forEach(
    function(producto){
        console.log(`${producto.nombre} - Precio ${producto.precio}`);       
    }
)