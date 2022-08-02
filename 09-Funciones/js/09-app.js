const reproductor = {
    reproducir : function (id) {
        console.log(`Reproduciendo cancion con el id ${id}`)
    },
    pausar: function () {
        console.log("Pausando...")
    }
}

reproductor.reproducir(30);
reproductor.reproducir(40);
reproductor.pausar();

reproductor.borrar = function (id){
    console.log(`Borrando cancion... con el id ${id}`)
}

reproductor.borrar(30);
/* 
console.log(reproductor);

const {reproducir, borrar, pausar} = reproductor;

console.log(reproducir);
console.log(borrar);
console.log(pausar); */




