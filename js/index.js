// Constantes para acceder al campo de texto y al botón
const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');

// Función que se ejecuta al presionar al botón, que guarda el localStorage
buttonText.onclick = function() {
const texto = inputText.value;
localStorage.setItem('textoGuardado', texto);
};