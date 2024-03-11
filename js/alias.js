  // Función para copiar el mensaje al portapapeles y guardar en almacenamiento local
function copiarMensaje() {
    // Obtenemos el contenido del textarea
    const mensaje = document.getElementById("mensaje").value;
    // Guardamos el mensaje en almacenamiento local
    localStorage.setItem('mensaje', mensaje);
    // Creamos un elemento de texto temporal
    const inputTemp = document.createElement("textarea");
    // Asignamos el valor del mensaje al campo temporal
    inputTemp.value = mensaje;
    // Añadimos el campo temporal al documento
    document.body.appendChild(inputTemp);
    // Seleccionamos el contenido del campo temporal
    inputTemp.select();
    // Copiamos el contenido seleccionado al portapapeles
    document.execCommand("copy");
    // Removemos el campo temporal del documento
    document.body.removeChild(inputTemp);
};