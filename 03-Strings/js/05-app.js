const producto = "Monitor 20 pulgadas";

//Reemplazar una cadena de texto .replace

console.log(producto);
console.log(producto.replace("pulgadas", '"'));

// .slice para cortar

/* console.log(producto.slice(0, 10));
console.log(producto.slice(8)); 
console.log(producto.slice(2, 1)) Esto no hara nada ya que el primer valor es mayor 
 */
// Alternativa a slice

console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1)); // Por otro lado esto va a actuar de manera inteligente y cortara del 1 al 2 

const usuario = "Erik";
//Cortar y mostrar la primer letra de la cadena
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));



