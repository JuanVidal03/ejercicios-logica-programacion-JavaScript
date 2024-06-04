// Suma de los primeros N números:
// Escribe un algoritmo que solicite un número N y use un ciclo for para calcular la suma de los primeros N números naturales.

// saber cuantos numeros se vana sumar
const numASumar = parseInt(prompt('Cuantos numeros vas a sumar?'));

// validar si el valor es valido
if (!isNaN(numASumar) && numASumar) {

    let resultado = 0;
    // sumando los numeros
    for (let i = 1; i <= numASumar; i++) {
        const num = parseInt(prompt('Ingresa el numero'));
        resultado += num;
    }
    alert(`El resultado de la suma es ${resultado}`);
    
} else {
    alert('Debes ingresar un valor correcto!');
}