//for of itera sobre un arreglo 

const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

for (let item of pendientes){
    console.log(item)
}

// For in itera sobre un objeto 

const auto = {
    modelo: "Ford",
    year: 1969,
    motor: "V8"
}

/* for(let propiedad in auto){
    console.log(`${auto[propiedad]}`)
}
 */

for(let [llave, valor] of Object.entries(auto)){
    console.log(llave);
    console.log(valor);
}


