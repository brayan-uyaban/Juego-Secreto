


/*
function calcularDoble(numero) {
    return numero * 2;
  }
  
  function calcularTriple(numero) {
    return numero * 3;
  }
  
  const numero = 5;
  const doble = calcularDoble(numero);
  const triple = calcularTriple(numero);
  
  console.log(`El doble de ${numero} es ${doble} y el triple es ${triple}.`);

*/

/*
  function masa(resultado){
    return resultado = peso / (altura*altura)
  }

  */

  /*
  //Indice de masa sin funciones
  let peso = prompt("Ingresa tu peso en Kilos")
  let altura = prompt("Ingresa tu altura en metros")
  let resultado = peso / (altura**2);

  alert (`El resltado de tu indice de masa corporal es ${resultado}`);
*/

/*

  //Indice de masa con funciones
  function obtenerPeso() {
    return parseFloat(prompt("Ingresa tu peso en Kilos"));
}

function obtenerAltura() {
    return parseFloat(prompt("Ingresa tu altura en metros"));
}

function calcularIMC(peso, altura) {
    return peso / (altura ** 2);
}

function mostrarResultadoIMC(resultado) {
    alert(`El resultado de tu índice de masa corporal es ${resultado}`);
}

*/

/*
//conversion de peso a dolar
let valorDolar = "3900";
let cantidadPesos = prompt("Cantidad en pesos a convertir:");
let conversion = (cantidadPesos / valorDolar);

alert(`la cantidad de dolares, despues de la conversion es: ${conversion}`)
*/

/*
function valorDolar(){
  return 3900;
}

function cantidadPesos(){
  return prompt("Cantidad en pesos a convertir:");
}

function resultado(conversion){
  return cantidadPesos / valorDolar;
}

alert (`la cantidad de dolares, despues de la conversion es: ${conversion}`)
*/




function valorDolar() {
  return 3900;
}

function cantidadPesos() {
  // Usa parseFloat para convertir la cadena ingresada a un número
  return parseFloat(prompt("Cantidad en pesos a convertir:"));
}

function resultado(conversion) {
  return conversion / valorDolar();  // Llamada a la función valorDolar
}

// Lógica principal
let pesos = cantidadPesos();
let conversion = resultado(pesos);

alert(`La cantidad de dólares, después de la conversión es: ${conversion}`);
