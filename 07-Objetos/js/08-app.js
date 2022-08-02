const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible: true
}

//Congelar objeto para que no sea modificable

Object.freeze(producto);

// producto.disponible = false;

console.log(producto);

console.log(Object.isFrozen(producto));

