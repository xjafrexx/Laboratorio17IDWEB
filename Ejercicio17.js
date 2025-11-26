function cargarMensaje() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Mensaje cargado");
        }, 1000);
    });
}

async function ejecutar() {
    try {
        let mensaje = await cargarMensaje();
        console.log(mensaje);
        document.getElementById("resultado").innerHTML = mensaje;
    } catch (error) {
        console.log(error);
    }
}

ejecutar();