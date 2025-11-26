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

async function ejecutar() {
    try {
        let usuario = await cargarUsuario();
        let mensaje = "Usuario cargado: " + usuario.nombre + " (ID: " + usuario.id + ")";
        console.log(mensaje);
        document.getElementById("resultado").innerHTML = mensaje;
    } catch (error) {
        console.log(error);
    }
}

ejecutar();