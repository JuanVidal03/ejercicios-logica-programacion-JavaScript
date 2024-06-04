// Conteo de vocales en una cadena:
// Escribe un algoritmo que cuente el número de vocales en una cadena de texto ingresada por el usuario. Usa un ciclo for para recorrer la cadena donde una cadena es una palabra cualquiera . Por ejemplo abc=3 o hola=4

// escribe la frase a evaluar
const frase = prompt('Ingresa la frase a evaluar');
const fraseLetraPorLetra = frase.split('');

// contar vocales
function conteoVocales() {

    let numVocales = 0;
    const vocales = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < fraseLetraPorLetra.length; i++) {
        const letra = fraseLetraPorLetra[i];
        if (vocales.includes(letra)) {
            numVocales ++;
        }
    }

    alert(`El total de vocales en la frase "${frase}" es: ${numVocales}`);

}

conteoVocales();