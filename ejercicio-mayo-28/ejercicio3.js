// Un vendedor ha realizado N ventas y desea saber:
// • ¿Cuántas fueron de $1 a $10.000?
// • ¿Cuántas fueron por más de $10.000 pero por menos de $20.000?
// • ¿Cuánto fue el monto de las ventas de cada una y el monto global?
// • Realice un algoritmo para determinar los totales.
// Se requiere analizar. crear el algoritmo y representarlo. Se debe proporcionar una captura de su respectiva ejecución.

// numero de ventas
const numeroDeVentas = parseInt(prompt('Ingresa el numero de ventas'));
// almacenar las ventas
let ventasTotales = 0;
const ventasDe1A10000 = [];
const ventasDe10000A20000 = [];

// ingresando las ventas
for (let i = 1; i <= numeroDeVentas; i++) {

    // ingresando la venta
    const venta = parseInt(prompt(`Ingresa el valor de venta No.${i}`));
    // de 1 a 10000
    if (venta >= 1 && venta < 10000) {
        ventasDe1A10000.push(venta)
    // de 10000 a 20000
    } else if (venta >= 10000 && venta <= 20000) {
        ventasDe10000A20000.push(venta);
    }

    // sumando las ventas
    ventasTotales += venta;

}

// sumatoria del array de las ventas
function sumarValoresArray(arr) {
    let total = 0;
    arr.forEach(item => {
        total += item;
    });
    return total;
}

// retornar resultados
alert(`En total fueron ${numeroDeVentas} ventas y su monto total fue de: $${ventasTotales} COP`);
if (ventasDe1A10000.length > 0 && ventasDe10000A20000.length <= 0) {
    alert(`En el rango de $1 a $10000 tuviste: ${ventasDe1A10000.length} ventas y su total fue de: $${sumarValoresArray(ventasDe1A10000)}COP`);   
    alert('En el rango de $10000 a $20000 no tuviste ventas :(');
} else if (ventasDe1A10000.length <= 0 && ventasDe10000A20000.length > 0) {
    alert(`En el rango de $10000 a $20000 tuviste: ${ventasDe10000A20000.length} ventas y su total fue de: $${sumarValoresArray(ventasDe10000A20000)}COP`);
    alert('En el rango de $1 a $10000 no tuviste ventas :(');
} else {
    alert(`En el rango de $1 a $10000 tuviste: ${ventasDe1A10000.length} ventas y su total fue de: $${sumarValoresArray(ventasDe1A10000)}COP`);   
    alert(`En el rango de $10000 a $20000 tuviste: ${ventasDe10000A20000.length} ventas y su total fue de: $${sumarValoresArray(ventasDe10000A20000)}COP`);
}