//Mensaje Bienvenida
/*
function mostrarMensaje(){
let nombre = prompt("¿Cual es tu nombre?")
let mensaje = `Hola ${nombre}, bienvenido`;

alert(mensaje);
}

mostrarMensaje();
*/

//Duplicar Numero
/*
function duplicarNumero(){
    let numero = parseInt(prompt("¿Que numero deseas multiplicar por 2?"));
    let resultado = numero * 2;

    alert(`El resultado de la multiplicacion es: ${resultado}`);
}

duplicarNumero();
*/


//Promedio
function mostrarPromedio(){
    let primerNumero = parseInt(prompt("¿Cual es tu primer numero para el promedio?"));
    let segundoNumero = parseInt(prompt("¿Cual es tu segundo numero para el promedio?"));
    let tercerNumero = parseInt(prompt("¿Cual es tu tercer numero para el promedio?"));
    let resultado = (primerNumero + segundoNumero + tercerNumero) /3;

    alert(resultado);
}

mostrarPromedio();

