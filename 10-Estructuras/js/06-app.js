const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice}: ${pendiente}`)
})

const carrito = [
    {nombre: "Monitor 32 pulgadas", precio: 5500},
    {nombre: "Tablet", precio: 3500},
    {nombre: "Celular", precio: 7400},
    {nombre: "Disco duro", precio: 500},
    {nombre: "Teclado", precio: 2200},
    {nombre: "Audifonos", precio: 1500},
]

carrito.forEach( (producto) => {
    console.log(producto.precio)
}) //no crea un nuevo arreglo, solo lo recorre 

const nuevoArray = carrito.map( (producto) => producto.nombre)

console.log(nuevoArray); //Crea un nuevo arreglo a partir de recorrerlo 

