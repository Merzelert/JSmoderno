const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 3000,
    disponible: true
}

const {nombre} = producto;

console.log(nombre);

//Destructurin de arrays

const numeros = [10, 20, 30, 40, 50];

const [pimero, segundo, ...tercero] = numeros;

console.log(tercero);

