// Constantes para acceder al texto guardado y al span
const textoGuardado = localStorage.getItem('textoGuardado');
const dataElement = document.getElementById('data');

// Mostrar el texto guardado en el span
dataElement.textContent = textoGuardado ;