const carrito = [];

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

console.table(carrito);

let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];

console.table(resultado);

