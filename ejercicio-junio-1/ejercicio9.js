// Números primos:
// Escribe un algoritmo que determine si un número ingresado es primo o no. Usa un ciclo for para verificar los divisores.


const num = parseInt(prompt('Ingresa el numero a evaluar'));

// funcion para saber si es primo
function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) return false;
    }
    return true;
}

// validando el tipo de dato
if (!isNaN(num) && num) {
    
    const resultado = esPrimo(num);
    resultado ? alert(`El numero ${num} es primo`) : alert(`El numero ${num} no es primo`);

} else {
    alert('Debes ingresar un valor valido!');
}