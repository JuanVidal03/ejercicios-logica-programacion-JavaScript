// Implementar un algoritmo que permita realizar operaciones sobre matrices de M x N. El programa debe permitir al usuario la selección de alguna de las siguientes operaciones: sumar, restar, multiplicas o trasponer dos matrices. Se requiere analizar y crear el algoritmo y representarlo. Se debe proporcionar una captura de pantalla del pseudocódigo con su respectiva ejecución.

// matrices que se van a evaluar
let matrizM = [[10,34],[15,2]];
let matrizN = [[50,8],[2,9]];

// matrices a evaluar
alert(`Matriz M a evaluar:\n${matrizM}`);
alert(`Matriz N a evaluar:\n${matrizN}`);

// validar que operacion se va a hacer
let operacion;

// validar que se ejecute la operacino
while (operacion != 1 && operacion != 2 && operacion != 3 && operacion != 4) {

    operacion = parseInt(prompt('Ingresa el numero de la operacion a realizar:\nSuma(1)\nResta(2)\nMultiplicacion(3)\nDivision(4)'));

    // validar si el campo de operacion es valido 
    if (!isNaN(operacion)) {
        
        // iterar las matrices para saber que operacion ejecutar
        for (let i = 0; i < matrizM.length; i++) {
        
            for (let j = 0; j < matrizM.length; j++) {
                const elementoMatrizM = matrizM[i][j];
                const elementoMatrizN = matrizN[i][j];

                let resultado = 0;
                // validar la operacion a evaluar
                switch (operacion) {
                    case 1:
                        resultado = elementoMatrizM + elementoMatrizN;
                        alert(`La suma de ${elementoMatrizM} + ${elementoMatrizN} = ${resultado}`);
                        break;
                    case 2:
                        resultado = elementoMatrizM - elementoMatrizN;
                        alert(`La resta de ${elementoMatrizM} - ${elementoMatrizN} = ${resultado}`);
                    break;
                    case 3:
                        resultado = elementoMatrizM * elementoMatrizN;
                        alert(`La multiplicacion de ${elementoMatrizM} * ${elementoMatrizN} = ${resultado}`);
                    break;
                    case 4:
                        resultado = elementoMatrizM / elementoMatrizN;
                        alert(`La division de ${elementoMatrizM} / ${elementoMatrizN} = ${resultado}`);
                    break;
                }
            }
        
        }
        // en caso de no ingresar una opcion valida
    } else{
        alert('Debes elegir una opcion disponible!');
    }

}