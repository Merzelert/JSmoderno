const carrito = [
    {nombre: "Monitor 32 pulgadas", precio: 5500},
    {nombre: "Tablet", precio: 3500},
    {nombre: "Celular", precio: 7400},
    {nombre: "Disco duro", precio: 500},
    {nombre: "Teclado", precio: 2200},
    {nombre: "Audifonos", precio: 1500},
]

//Metodo forEach            parametros funcion flecha           argumentos del array
carrito.forEach( (producto) => console.log(`${producto.nombre} - Precio ${producto.precio}`))

//Metodo map este metodo crea un nuevo arreglo 

const nuevoArreglo = carrito.map ( (producto) => `${producto.nombre} - Precio ${producto.precio}`)

console.log(nuevoArreglo);

//reproductor de musica

const reproductor = {
    reproducir : (id) => `Reproduciendo cancion con el id ${id}`,
    pausar: () => "Pausando...",
    grabar: (id) => `Grabando cancion con el id ${id}`
}

console.log(reproductor.reproducir(30));
console.log(reproductor.reproducir(40));
console.log(reproductor.pausar());
console.log(reproductor.grabar(40))

reproductor.borrar = (id) => `Borrando cancion... con el id ${id}`;

console.log(reproductor.borrar(30));