// Suma de dos números:
// Escribe un algoritmo que solicite dos números al usuario y retorne su suma. Imprime el resultado.

function suma(num1, num2) {
    const suma = num1 + num2;
    return suma;
}

// solicitando numeros
const num1 = parseFloat(prompt('Ingresa el numero 1'));
const num2 = parseFloat(prompt('Ingresa el numero 2'));

// validando los valores de los nuemros
if (!isNaN(num1) && !isNaN(num2)) {
    const resultado = suma(num1, num2);
    alert(`El resultado de la suma es: ${resultado}`);
} else {
    alert('Ingresa valores validos!');
}