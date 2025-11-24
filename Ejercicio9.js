function cargarMensaje(callback) {
    setTimeout(function() {
        callback("Mensaje cargado");
    }, 1000);
}

function iniciar() {
    var resultado = document.getElementById('resultado');
    resultado.style.display = 'block';
    resultado.innerHTML = 'Cargando...';
    
    cargarMensaje(function(mensaje) {
        resultado.innerHTML = mensaje;
    });
}