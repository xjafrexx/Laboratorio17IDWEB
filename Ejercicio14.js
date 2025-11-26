function cargarUsuario() {
    return new Promise(function(resolve, reject) {
        let tiempo = Math.random() * (1500 - 800) + 800;
        setTimeout(function() {
            let usuario = {
                id: 1,
                nombre: "Juan"
            };
            resolve(usuario);
        }, tiempo);
    });
}

cargarUsuario()
    .then(function(usuario) {
        let mensaje = "Usuario cargado: " + usuario.nombre + " (ID: " + usuario.id + ")";
        console.log(mensaje);
        document.getElementById("resultado").innerHTML = mensaje;
    })
    .catch(function(error) {
        console.log(error);
    });