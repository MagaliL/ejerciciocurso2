
// let parrafo = document.querySelector('p');
// parrafo.innerHTML= 'Indica un número del 1 al 10';
// Esta parte de variables también se puede eliminar porque podemos mandarlo a llamar con la función asignarTextoElemento que creamos

let numeroSecreto = generarNumeroSecreto();
//A la declaración de esta variable se le puede asignar la función que creamos abajo para que se pueda utilizar de forma global. 


//Revisamos que ejecute como debería. El resultado deberá ser un número entero de 1 a 10

function asignarTextoElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
};

function verificarIntento(){
   let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
   //El parseInt va a obliar a que la variable numeroUsuario sea un número entero, ya que el valor que se obtiene del input es un string debido a la función getElementById, por lo que se debe convertir a número entero para poder compararlo con el número secreto.
   //El getElementById obtiene el elemento del DOM que tenga el id valorUsuario,
    //y la propiedad .value obtiene el valor que el usuario ha ingresado en el input.

   
//    console.log(numeroUsuario === numeroSecreto);

if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', '¡Acertaste!');
   } else {
        if (numeroSecreto < numeroUsuario) {
            asignarTextoElemento('p','El número secreto es menor al que elegiste.');
        } else {
            asignarTextoElemento('p','El número secreto es mayor al que elegiste.');
        }
   }
   ;
   //Esta parte del código es para verificar que el numeroUsuario y el numeroSecreto sean iguales tanto en valor como en tipo, ya que el número secreto es un número entero y el número del usuario también debe serlo para que la comparación sea correcta. El tipo de dato que va a regresar es booleano. 

   return;
   
};

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
    //Esta función va a hacer la operación necesaria para crear al número secreto, la función se puede asignar a una variable para que tenga alcance global, si se pone aquí la variable sólo tendrá alcance de bloque y no podrá ser utilizada fuera de la función. 
}

// En esta función se esta pasando los parámetros elemento y para que la función pueda trabajar con ellas como variables 


asignarTextoElemento('h1','Juego del Número Secreto');
asignarTextoElemento('p','Indica un número entre 1 y 10');