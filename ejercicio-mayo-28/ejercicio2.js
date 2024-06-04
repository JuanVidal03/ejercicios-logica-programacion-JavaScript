// Una institución financiera ha solicitado a la dirección de tecnología desarrollar un algoritmo para determinar la cantidad de dinero recibida por un trabajador por las horas semanales trabajadas en una empresa. Sabiendo que: cuando las horas de trabajo exceden de 40 el resto se consideran horas extras y se pagan el doble de una hora normal, cuando no exceden de 8; si las horas extras exceden de 8, se pagan las primeras 8 el doble de lo que se paga una hora normal y el resto al triple. Del trabajador se proporcionan los siguientes datos: nombres, número de horas trabajadas en la semana y valor recibido por una hora normal de trabajo. crear el algoritmo y representarlo. Se debe proporcionar una captura de pantalla de su respectiva ejecución.


// datos del trabajador
const nombreTrabajador = prompt('Ingresa tu nombre:');
const horasTrabajadasSemana = parseInt(prompt('Ingresa tus horas trabajadas en la semana'));
const pagoPorHora = parseFloat(prompt('Ha cuanto te pagan la hora?'));

// validando los datos
if (horasTrabajadasSemana && !isNaN(horasTrabajadasSemana) && pagoPorHora && !isNaN(pagoPorHora) && nombreTrabajador && isNaN(nombreTrabajador)) {
    // guardar las horas extras, sueldo total
    let sueldoTotal = 0;
    let horasExtras = 0;
    // validando si hay horas extras
    if (horasTrabajadasSemana > 40) {
        // horas extras
        horasExtras = horasTrabajadasSemana - 40;

        let pagoHorasExtras = 0;

        // validar si hay mas de 8 horas
        if (horasTrabajadasSemana > 8 && horasTrabajadasSemana <= 48) {
            pagoHorasExtras = horasExtras * pagoPorHora * 2;
            sueldoTotal = ((horasTrabajadasSemana - horasExtras ) * pagoPorHora) + pagoHorasExtras;
            alert(`Hola, ${nombreTrabajador}. Trabajaste ${horasTrabajadasSemana} horas, tuviste ${horasExtras} horas extras en esta semana y te las pagaron a $${pagoPorHora} COP. Tu sueldo de esta semana es: $${sueldoTotal} COP`);

            // mas de 8 horas pagadas al triple
        } else {
            const horasPagadasAlTriple = horasExtras - 8;
            const horasPagadasAlDoble = horasExtras - horasPagadasAlTriple;
            pagoHorasExtras = (horasPagadasAlDoble * pagoPorHora * 2) + (horasPagadasAlTriple * pagoPorHora * 3);

            const horasSinHorasExtras = horasTrabajadasSemana - horasExtras;
            sueldoTotal = pagoHorasExtras + (horasSinHorasExtras * pagoPorHora);
            alert(`Hola, ${nombreTrabajador}. Trabajaste ${horasTrabajadasSemana} horas, tuviste ${horasExtras} horas extras en esta semana y te las pagaron a $${pagoPorHora} COP. Tu sueldo de esta semana es: $${sueldoTotal} COP`);
        }

        // en caso de no haber trabajado horas extras
    } else {
        sueldoTotal = horasTrabajadasSemana * pagoPorHora;
        alert(`Hola, ${nombreTrabajador}. Trabajaste ${horasTrabajadasSemana} horas en la semana y te las pagaron a $${pagoPorHora} COP. Tu sueldo de esta semana es: $${sueldoTotal} COP`);
    }

    // en caso de no ingresar un valor o un valor incorrecto
} else {
    alert('Debes ingresar todos los valores y su respectivo valor!');
}