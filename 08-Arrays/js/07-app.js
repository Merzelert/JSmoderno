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

const producto4 = {
    nombre:"DD",
    precio:500
}

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);
carrito.unshift(producto4);

//Eliminar un elemento especifico

console.table(carrito);

carrito.splice(2,2);

console.table(carrito);
/* 
//Eliminar el ultimo elemento de un arreglo 

carrito.pop();

console.table(carrito);

//eliminar del inicio del arreglo

carrito.shift();

console.table(carrito);
 */




