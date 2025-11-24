function cargarUsuario(callback) {
    var tiempoAleatorio = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;
    
    setTimeout(function() {
        var usuario = {
            id: 1,
            nombre: "Juancito"
        };
        callback(usuario);
    }, tiempoAleatorio);
}

function iniciar() {
    var resultado = document.getElementById('resultado');
    resultado.style.display = 'block';
    resultado.innerHTML = 'Cargando usuario...';
    
    cargarUsuario(function(usuario) {
        resultado.innerHTML = 'Usuario cargado: ' + usuario.nombre + ' (ID: ' + usuario.id + ')';
    });
}