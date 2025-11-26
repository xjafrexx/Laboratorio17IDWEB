function cargarMensaje() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Mensaje cargado");
        }, 1000);
    });
}

cargarMensaje()
    .then(function(mensaje) {
        console.log(mensaje);
        document.getElementById("resultado").innerHTML = mensaje;
    })
    .catch(function(error) {
        console.log(error);
    });