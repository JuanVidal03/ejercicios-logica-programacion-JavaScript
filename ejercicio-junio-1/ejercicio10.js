// Serie Fibonacci:
// Escribe un algoritmo que imprima los primeros N números de la serie de Fibonacci usando un ciclo for.

function fibonacci(n) {
    if (n === 0 || n === 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
// num del usuario
const num = parseInt(prompt('Ingresa el limite de la secuencia'));
for (let i = 0; i < num; i++) {
    console.log(fibonacci(i));
}
alert('Mira el resultado por consola ;)');