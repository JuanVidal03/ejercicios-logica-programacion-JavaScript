// Número par o impar:
// Escribe un algoritmo que determine si un número ingresado por el usuario es par o impar. Usa validaciones para asegurar que la entrada sea un número.

function numMayor(num1, num2) {
    // validar que los valores sean correctos
    if (!isNaN(num1) && !isNaN(num2) && num1 && num2) {

        if (num1 > num2) {
            alert(`El numero 1: ${num1} es mayor que el numero 2: ${num2}`);
        } else if(num1 === num2){
            alert('Los numeros son iguales');
        } else {
            alert(`El numero 2: ${num2} es mayor que el numero 1: ${num1}`);
        }
        
    } else {
        alert('Asegurate que los valores sean numericos!');
    }
}

// ingresando valores
const num1 = parseFloat(prompt('Ingresa el numero 1'));
const num2 = parseFloat(prompt('Ingresa el numero 2'));

numMayor(num1, num2);