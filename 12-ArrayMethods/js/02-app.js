const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach( (mes, i) => {
    if (mes === "Enero") {
        console.log(`${mes} encontrado en el indice ${i}`)
    }
})

// Encontrar el indice con el metodo .findIndex en un array

const indice = meses.findIndex( mes => mes === "Enero")

console.log(indice);


// Encontrar el indice con el metodo .findIndex en un objeto

const index = carrito.findIndex (producto => producto.precio === 200);
console.log(index)
