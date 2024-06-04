//Factorial de un número:
// Escribe un algoritmo que calcule el factorial de un número dado usando un ciclo for.

// num usuario
const numUsuario = parseInt(prompt('Ingresa el numero a sacar el factorial'));
// validar y dar respuesta
if (!isNaN(numUsuario) && numUsuario) {
    let resultado = 1;
    for (let i = 1; i <= 5; i++) {
        resultado *= i;
    }
    alert(`El factotial de ${numUsuario} es ${resultado}`);
} else{
    alert('Ingresa un valor valido!');
}