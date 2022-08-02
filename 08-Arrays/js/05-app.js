const carrito = [];

//Definir producto
const producto = {
    nombre:"Monitor 32 pulgadas",
    precio:4500
}

const producto2 = {
    nombre:"Celular",
    precio:8990
}

const producto3 = {
    nombre:"Tablet",
    precio:6500
}

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);

console.table(carrito);
