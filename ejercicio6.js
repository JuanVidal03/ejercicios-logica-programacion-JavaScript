// Elaborar un algoritmo que permita ingresar la edad y los nombres de 5 estudiantes y muestre cuántos estudiantes son mayores a 20 años. Se requiere analizar, crear el algoritmo y representarlo. Se debe proporcionar una captura de pantalla del pseudocódigo con su respectiva ejecución.

// almacenar estudiantes
const estudiantes = [];
let contadorMayoresDe20 = [];
// ingresando los datos de los aprendices
for (let i = 1; i <= 5; i++) {
    
    const nombre = prompt(`Ingresa el nombre del estudiante No.${i}`);
    const edad = parseInt(prompt(`Ingresa la edad del estudiante No.${i}`));

    const estudiante = { nombre, edad }
    // estudiante mayor que 20
    estudiante.edad > 20 && contadorMayoresDe20.push(estudiante);
    // agregando todso los estudiantes
    estudiantes.push(estudiante);
    
}

// renderizando resultado
if (contadorMayoresDe20.length > 0) {
    alert(`En total hay: ${contadorMayoresDe20.length} estudiantes mayores a 20 anios.`);
} else {
    alert('No hay estudiantes mayores de 20 anios.');
}

console.log(estudiantes);
alert('Mira todos los estudiantes en la terminal ;)');