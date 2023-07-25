const inputNacimiento = document.querySelector('#birth');

inputNacimiento.addEventListener('blur', (evento) => {
    validarNacimiento(evento.target);
});

function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    //establese el mensaje de error
    let mensaje = "";
    if (!mayorDeEdad(fechaCliente)) {
        mensaje = 'Debes ser mayor de edad.';
    }
    input.setCustomValidity(mensaje); // Establecer mensaje de error personalizado
}

function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    );
    return diferenciaFechas <= fechaActual;
}
