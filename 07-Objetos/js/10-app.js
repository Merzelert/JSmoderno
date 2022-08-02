//Unir dos objetos

const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible: true
}

const medidas = {
    peso : "1kg",
    medida : "1m"
}

console.log(producto);
console.log(medidas);

//forma 1 con assign

const resultado = Object.assign(producto, medidas);

//forma dos Spread operator 

const resultado2 = {...producto, ...medidas}

console.log(resultado);

console.log(resultado2);


