let numeroSecreto = generarNumeroSecreto();
//A la declaración de esta variable se le puede asignar la función que creamos abajo para que se pueda utilizar de forma global. 
let intentos = 1; //En esta parte del código se declara una variable de intentos para la implementación de un contador, es igual a uno porque siempre va a intentarlo al menos una vez. 

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


// En esta parte se esta pasando los parámetros elemento y para que la función pueda trabajar con ellas como variables 

asignarTextoElemento('h1','Juego del Número Secreto');
asignarTextoElemento('p','Indica un número entre 1 y 10');