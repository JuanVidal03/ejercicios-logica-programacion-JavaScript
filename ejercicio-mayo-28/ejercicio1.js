// En un hospital se pide realizar un algoritmo sobre la altura de un paciente. Que si la altura es menor o igual a 150 cm, envíe el mensaje: “Persona de Altura baja”; si la altura está entre 151 y 170 cm, escriba: “Persona de Altura Media” y si la altura es mayor a 171 cm escriba: “Persona de Altura Alta”. Se debe proporcionar una captura de pantalla resultado de la ejecución

// altura del paciente
const alturaPaciente = parseFloat(prompt('Ingresa tu alruta en centimetros'));

// validando se hayan ingresado datos y que sean numeros
if (!isNaN(alturaPaciente) && alturaPaciente) {

    // validaciones de la edad
    if (alturaPaciente <= 150) {
        alert('Persona de altura baja');
    } else if(alturaPaciente >= 151 && alturaPaciente <= 170){
        alert('Paciente de altura Media');
    } else {
        alert('Paciente de altura Alta');
    }

    // en caso de que no ingrese numeros
} else {
    alert('Asegurate de que los valores sean numericos!');
}