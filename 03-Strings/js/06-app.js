const producto = "Monitor 20 pulgadas";

// . repeat nos va a permitir repetir una cadena de texto... si el numero no es entero (2.5) se va a redondear hacia abajo

const texto = " en promocion".repeat(3);

console.log(texto);

console.log(`${producto} ${texto}!!!`);


// Split, dividir una cadena 

const actividad = "Estoy aprendiendo JS moderno";

console.log(actividad.split(" "));

const hobbies = "Leer, caminar, escuchar musica, aprender a programar";
console.log(hobbies.split(", "));
