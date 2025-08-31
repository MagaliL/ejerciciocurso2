
<h1>Juego del Número Secreto</h1>
<h2>Descripción</h2>
<p>Juego interactivo web donde el usuario debe adivinar un número secreto generado aleatoriamente entre 1 y 10. El juego proporciona pistas indicando si el número secreto es mayor o menor que el número ingresado por el usuario, y lleva un conteo de los intentos realizados.</p>
    
<h2>Características</h2>
    <ul>
        <li>Generación de números aleatorios únicos (sin repetición hasta agotar todas las posibilidades)</li>
        <li>Interfaz interactiva con mensajes personalizados</li>
        <li>Contador de intentos</li>
        <li>Pistas para guiar al usuario (mayor/menor)</li>
        <li>Botón para reiniciar el juego</li>
    </ul>
    
<h2>Tecnologías utilizadas</h2>
    <ul>
        <li>HTML5</li>
        <li>JavaScript (vanilla)</li>
        <li>CSS (implícito a través de clases de Bootstrap o similar)</li>
    </ul>
    
    
 <h2>Funcionalidades principales</h2>
    
<h3>asignarTextoElemento(elemento, texto)</h3>
    <p>Asigna texto a un elemento del DOM seleccionado mediante un selector CSS.</p>
    
<h3>verificarIntento()</h3>
    <p>Verifica si el número ingresado por el usuario coincide con el número secreto y proporciona retroalimentación.</p>
    
 <h3>generarNumeroSecreto()</h3>
    <p>Genera un número aleatorio único entre 1 y 10, evitando repeticiones hasta agotar todos los números posibles.</p>
    
<h3>limpiarcaja()</h3>
    <p>Limpia el campo de entrada de texto.</p>
    
<h3>condicionesIniciales()</h3>
    <p>Inicializa el juego estableciendo los textos iniciales y generando un nuevo número secreto.</p>
    
<h3>reiniciarJuego()</h3>
    <p>Reinicia el juego limpiando la caja, estableciendo las condiciones iniciales y deshabilitando el botón de reinicio.</p>
    
  <h2>Personalización</h2>
    <p>Puedes modificar la dificultad del juego cambiando el valor de la variable <code>numeroMax</code> para ajustar el rango de números posibles.</p>
    
  <h2>Notas</h2>
    <ul>
        <li>El juego evita repetir números hasta que se hayan utilizado todos los valores posibles entre 1 y 10</li>
        <li>Una vez adivinado el número, se muestra el número de intentos realizados</li>
        <li>El botón "Nuevo Juego" se habilita automáticamente al ganar</li>
    </ul>
    
   <h2>Enlace al juego</h2>
    <p>Puedes jugar en línea visitando: <a href="https://magalil.github.io/JuegoSecretoJS/">https://magalil.github.io/JuegoSecretoJS/</a></p>
    
 
