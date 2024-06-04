// Número par o impar:
// Escribe un algoritmo que determine si un número ingresado por el usuario es par o impar. Usa validaciones para asegurar que la entrada sea un número.

function parOImpar(num) {
    // validar que los valores sean correctos
    if (!isNaN(num) && num) {

        if (num % 2 == 0) {
            alert(`El numero ${num} es par`)
        } else{
            alert(`El numero ${num} es impar`);
        }
        
    } else {
        alert('Asegurate que los valores sean numericos!');
    }
}

// ingresando valores
const num = parseFloat(prompt('Ingresa el numero para saber si es par o impar'));

parOImpar(num);