let numeroSecreto = 0;
let intentos = 0; 
//Sólo se está declarando las variables de forma global para que se puedan utilizar después, sus valores los adquirirá en la función condicionesIniciales
//Revisamos que ejecute como debería. El resultado deberá ser un número entero de 1 a 10

function asignarTextoElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
    //En esta función se asigna el texto a un elemento del DOM, se utiliza el método querySelector para seleccionar el elemento y luego se asigna el texto a su propiedad innerHTML. document es un objeto que representa el documento HTML cargado en el navegador, y querySelector es un método que permite seleccionar el primer elemento que coincida con el selector CSS proporcionado. 
    //elementoHTML es una variable que almacena el elemento HTML seleccionado, y la propiedad innerHTML se utiliza para establecer o obtener el contenido HTML de un elemento.
};

function verificarIntento(){
   let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
   //El parseInt va a obliar a que la variable numeroUsuario sea un número entero, ya que el valor que se obtiene del input es un string debido a la función getElementById, por lo que se debe convertir a número entero para poder compararlo con el número secreto.
   //El getElementById obtiene el elemento del DOM que tenga el id valorUsuario,
    //y la propiedad .value obtiene el valor que el usuario ha ingresado en el input.

   
//    console.log(numeroUsuario === numeroSecreto);

console.log(intentos);  
if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `¡Acertaste! El número secreto es ${numeroSecreto} y lo lograste en ${intentos} ${(intentos === 1 ? 'vez': 'veces')}.`); //En esta parte del código le avisamos al usuario en cuántos intentos logró acertar al número secreto con el contador "intentos"

        document.getElementById('reiniciar').removeAttribute('disabled');
        //Activa el botón de Iniciar nuevo juego una vez se acierta. Aquí todavía no tiene funcionalidad            
   } else {
        if (numeroSecreto < numeroUsuario) {
            asignarTextoElemento('p','El número secreto es menor al que elegiste.');
        } else {
            asignarTextoElemento('p','El número secreto es mayor al que elegiste.');
        }

        intentos ++;
        //Este es el contador que va a ir aumentando cuando el usuario no acierte al número secreto. 
        limpiarcaja(); 
   }
   ;
   //Esta parte del código es para verificar que el numeroUsuario y el numeroSecreto sean iguales tanto en valor como en tipo, ya que el número secreto es un número entero y el número del usuario también debe serlo para que la comparación sea correcta. El tipo de dato que va a regresar es booleano. 

   return;
   
};

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
    //Esta función va a hacer la operación necesaria para crear al número secreto, la función se puede asignar a una variable para que tenga alcance global, si se pone aquí la variable sólo tendrá alcance de bloque y no podrá ser utilizada fuera de la función. 
}

function limpiarcaja(){
    document.querySelector('#valorUsuario').value = "";
    

    //Esta función se encarga de limpiar el input del usuario, se utiliza el método querySelector para seleccionar el elemento con el id valorUsuario y luego se establece su valor a una cadena vacía.
}


function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Número Secreto');
    asignarTextoElemento('p','Indica un número entre 1 y 10');
     //Generar número aleatorio 
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el contador de intentos
    intentos = 1; 

}

function reiniciarJuego(){
    //limpiar la caja 
    limpiarcaja();
    //Indicar mensaje de inicio 
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');

}




condicionesIniciales();

