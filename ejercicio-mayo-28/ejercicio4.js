// Realice un algoritmo para determinar cuánto pagará una persona que adquiere N artículos que están de promoción. Considere que si su precio es mayor o igual a Carlos E. Salazar Guaña 185 $200 se le aplica un descuento de 15%, y si su precio es mayor a $100 pero menor a $200, el descuento es de 12%; de lo contrario, sólo se le aplica 10% de descuento. Se debe saber cuál es el costo y el descuento que tendrá cada uno de los artículos y finalmente cuánto se pagará por todos los artículos vendidos. Se requiere analizar y realizar el respectivo ejercicio adjunte la captura de pantalla de la ejecucion.

const numeroArticulos = parseInt(prompt('Ingresa la cantidad de articulos:'));

const historialProducto = [];

// validando el tipo de dato
if (!isNaN(numeroArticulos)) {
    // validaciones para saber los descuentos de los productos
    for (let i = 1; i <= numeroArticulos; i++) {

        const montoProducto = parseFloat(prompt(`Ingresa el valor del producto No.${i}`));
        let valorConDescuento = 0;
        // estructura de como se va a guardar el prodcuto en el historial
        const produtData = {
            producto: '',
            valor: '',
            descuento: '',
            valorConDescuento: '',
        }
        // mayor o igual a 200
        if (montoProducto >= 200) {

            valorConDescuento = montoProducto - (montoProducto * .15);
            alert(`El prodcuto No.${i} tienen un valor de: $${montoProducto}COP\nSe le aplica un descuento de 15%\nSu valor final sera: $${valorConDescuento}COP`);

            produtData.producto = `Producto No.${i}`;
            produtData.valor = montoProducto;
            produtData.descuento = '15%';
            produtData.valorConDescuento = valorConDescuento;

            historialProducto.push(produtData);
            // entre 100 y 200
        } else if(montoProducto > 100 && montoProducto < 200) {

            valorConDescuento = montoProducto - (montoProducto * .12);
            alert(`El prodcuto No.${i} tienen un valor de: $${montoProducto}COP\nSe le aplica un descuento de 12%\nSu valor final sera: $${valorConDescuento}COP`);

            produtData.producto = `Producto No.${i}`;
            produtData.valor = montoProducto;
            produtData.descuento = '12%';
            produtData.valorConDescuento = valorConDescuento;

            historialProducto.push(produtData);
            // menor a 100
        } else {

            valorConDescuento = montoProducto - (montoProducto * .10);
            alert(`El prodcuto No.${i} tienen un valor de: $${montoProducto}COP\nSe le aplica un descuento de 10%\nSu valor final sera: $${valorConDescuento}COP`);

            produtData.producto = `Producto No.${i}`;
            produtData.valor = montoProducto;
            produtData.descuento = '10%';
            produtData.valorConDescuento = valorConDescuento;

            historialProducto.push(produtData);

        }
        
    }
    
} else {
    alert('Debes ingresar un valor valido!');
}

// total a pagar
let total = 0;
let totalConDescuento = 0;
historialProducto.forEach(producto => {
    totalConDescuento += producto.valorConDescuento;
    total += producto.valor;
});
alert(`El total de los productos con descuento incluido es: $${totalConDescuento}COP`);
alert(`El total de los productos sin descuento incluido es: $${total}COP`);


// ver el historial
console.log(historialProducto);
alert('Para verificar el los productos abre la consola ;)');