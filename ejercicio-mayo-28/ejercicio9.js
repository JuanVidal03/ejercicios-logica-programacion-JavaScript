// Se desea obtener el grado de eficiencia de N operarios de una fábrica productora de pupitres, de acuerdo con las siguientes condiciones que se les impone para un periodo determinado. Condiciones:
// o Ausencia del trabajo  <= 3,5 horas.
// o Pupitres defectuosos &lt; 300.
// o Pupitres producidos &gt; 10000.
// • Los grados de eficiencia del trabajador son asignados de la siguiente forma:
// o Si no cumple ninguna condición: Grado = 5
// o Si sólo cumple la primera condición: Grado = 7
// o Si sólo cumple la segunda condición: Grado = 8
// o Si sólo cumple la tercera condición: Grado = 9
// o Si cumple la primera y la segunda: Grado = 12
// o Si cumple la primera y la tercera: Grado = 13
// o Si cumple la segunda y la tercera: Grado = 15
// o Si cumple las tres condiciones: Grado = 20

// • Por cada trabajador se tiene un registro con los siguientes datos:
// o Código del trabajador.
// o Horas de ausencia.
// o Pupitres defectuosos.
// o Pupitres producidos.

//Elaborar un algoritmo que calcule para cada trabajador su correspondiente grado de eficiencia e imprima toda su información. Se debe utilizar subprocesos o funciones. Se requiere analizar y crear el algoritmo además proporciona una captura de pantalla código con su respectiva ejecución.

const numeroDeTrabajadoresAEvaluar = parseInt(prompt('Ingresa el numero de trabajadores a evaluar.'));
// alamacenar todos los trabajadores
const trabajadores = [];

// ingresando los datos del trabajor
function ingresarTrabajadores(numTrabajadores) {
    
    for (let i = 1; i <= numTrabajadores; i++) {

        const nombre = prompt(`Ingresa el nombre del trabajador No.${i}:`);
        const codigo = prompt(`Ingresa el codigo del trabajador No.${i}:`);
        const horasAusencias = parseFloat(prompt(`Ingresa las horas de ausencia del trabajador No.${i}:`));
        const pupitresProducidos = parseInt(prompt('Ingresa los pupitres producidos'));
        const pupitresDefectuosos = parseInt(prompt('Ingresa los pupitres defectuosos:'));

        const trabajador = {
            nombre,
            codigo,
            horasAusencias,
            pupitresProducidos,
            pupitresDefectuosos,
            grado: 0,
            validacionHorasAusencia: false,
            validacionPupitresProducidos: false,
            validacionPupitresDefectuosos: false,
        }

        trabajadores.push(trabajador);
    }

    return trabajadores;
}

// validar entregas de los empleados
function validarEntregas() {
    
    trabajadores.forEach((trabajador, index) => {
        let ausenciaDetrabajo = false;
        let pupitresDefectuosos = false;
        let pupitresProducidos = false;
        
        if (trabajador.horasAusencias <= 3.5) {
            ausenciaDetrabajo = true;
        }
        if (trabajador.pupitresDefectuosos < 300) {
            pupitresDefectuosos = true;
        }
        if (trabajador.pupitresProducidos > 10000) {
            pupitresProducidos = true
         }

        trabajadores[index].validacionHorasAusencia = ausenciaDetrabajo;
        trabajadores[index].validacionPupitresProducidos = pupitresProducidos;
        trabajadores[index].validacionPupitresDefectuosos = pupitresDefectuosos;

    });

    return trabajadores;
}


// evaluar grados de eficiencia
function evaluarGradosDeEficencia() {

    let grado = 0;
    
    trabajadores.forEach((trabajador, index) => {

        if(trabajador.validacionHorasAusencia ==false && trabajador.validacionPupitresDefectuosos ==false && trabajador.validacionPupitresProducidos ==false){
            grado = 5;
        }else if(trabajador.validacionHorasAusencia == true && trabajador.validacionPupitresDefectuosos==false && trabajador.validacionPupitresProducidos==false){
            grado=7;
        }else if(trabajador.validacionHorasAusencia==false && trabajador.validacionPupitresDefectuosos==true && trabajador.validacionPupitresProducidos==false){
            grado=8;
        }else if(trabajador.validacionHorasAusencia==false && trabajador.validacionPupitresDefectuosos==false && trabajador.validacionPupitresProducidos==true){
            grado=9;
        }else if(trabajador.validacionHorasAusencia==true && trabajador.validacionPupitresDefectuosos==true && trabajador.validacionPupitresProducidos==false){
            grado=12;
        }else if(trabajador.validacionHorasAusencia==true && trabajador.validacionPupitresDefectuosos==false && trabajador.validacionPupitresProducidos==true){
            grado=13;
        }else if(trabajador.validacionHorasAusencia==false && trabajador.validacionPupitresDefectuosos==true && trabajador.validacionPupitresProducidos==true){
            grado=15;
        }else if(trabajador.validacionHorasAusencia==true && trabajador.validacionPupitresDefectuosos==true && trabajador.validacionPupitresProducidos==true){
            grado=20;
        }

        trabajadores[index].grado = grado;
        console.log(`El trabajador: ${trabajador.nombre} tuvo un grado de eficiencia de ${trabajador.grado} `);

    });   
}

ingresarTrabajadores(numeroDeTrabajadoresAEvaluar);
validarEntregas();
evaluarGradosDeEficencia();
alert('Mira los resultados en consola ;)');