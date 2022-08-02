//Declaracion de funcion (function Declaration) esta puede ser llamada antes de ser declarada
sumar();

function sumar (){
    console.log(2+2);
}

//Expresion de funcion (funcion Expresion) no puede ser llamada antes de ser expresada, ya que no esta declarada
sumar2();

const sumar2 = function() {
    console.log(3+3);
}

