// Inversión de una cadena:
// Escribe un algoritmo que tome una cadena de texto como entrada y retorne la cadena invertida.

const frase = prompt('Ingresa una frase');

// reversa de la frase
const fraseReversa = frase.split('').reverse().join('');
alert(`La frase que ingresaste fue: "${frase}" y la frase al reves es: "${fraseReversa}"`);