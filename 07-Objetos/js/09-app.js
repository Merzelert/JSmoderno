"use strict";

const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible: true
}

// Seal te permite modificar las keys existentes pero no te permite eliminar o agrgar keys nuevas

Object.seal(producto);

producto.disponible= false;
console.log(producto);

console.log(Object.isSealed(producto));



