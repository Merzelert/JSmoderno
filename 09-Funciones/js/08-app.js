//Funcion para sumar dos numeros 
function sumar(a,b) {
    return(a+b);
}

const resultado = sumar(2,3);

console.log(resultado);

// Ejemplo mas avanzado 

let total = 0;
function agregarCarrito (precio){
    return total += precio;
}

function calcularImpuestos (total) {
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(400);
total = agregarCarrito(200);

const totalApagar = calcularImpuestos(total);

console.log(total);

console.log(`El total a pagar es de ${totalApagar} (impuestos del 15%)`);

