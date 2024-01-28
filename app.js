let numeroSecreto = Math.floor(Math.random()*10)+1;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);


   let asignarTextoElemento = (selector, mi_texto) => {
        let elemntoHTML = document.querySelector(selector);
        elemntoHTML.innerHTML = mi_texto;
        }

        
   let asignarIdentificadorTexto = (selector, mi_texto) => {
            let elemntoHTML = document.querySelector(selector);
            elemntoHTML.innerHTML = mi_texto;
            }

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 0;
}


asignarIdentificadorTexto("#botonIntentar", "Intentar");

boton = document.getElementById("botonIntentar")
boton.addEventListener("click", ()=>{
    verificarIntento()
  
})


function verificarIntento(){
   let numeroDeUsuario = document.getElementById("valorUsuario");
   let numero = parseInt(numeroDeUsuario.value);
    
   
    console.log(numeroSecreto);
    if (numero === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`)
        document.getElementById("reiniciar").removeAttribute("disabled");
        boton.style.backgroundColor = "green"
        intentos++;
        generarNumeroSecreto();
        alert(`El numero de intentos fue de ${intentos}`);
   }else{
    //El usuario no acerto
        if(numero >= numeroSecreto){
            alert("El numero secreto es menor")
        }else{
            alert("El numero secreto es mayor")
        }intentos++;

        limpiarCaja();
   }
 
   return;
}

function limpiarCaja(){
  /* Otra forma de hacerlo
    let valorCaja = document.querySelector("#valorUsuario");
   valorCaja.value = "";
   */
    //Menos codigo
    document.querySelector("#valorUsuario").value = "";
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar numero secreto 
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");

}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() *numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", `Ya se sortearon todos los numeros posibles`);
    }else{
        //Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}
