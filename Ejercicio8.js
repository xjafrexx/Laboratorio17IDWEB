var mensajes = '';

function nivel2() {
    try {
        var resultado = x + 1;
    } catch (e) {
        mensajes = mensajes + '<div class="mensaje">Nivel 2 atrapo el error: ' + e.message + '</div>';
        throw e;
    }
}

function nivel1() {
    try {
        nivel2();
    } catch (e) {
        mensajes = mensajes + '<div class="mensaje">Nivel 1 recibio el error: ' + e.message + '</div>';
        throw e;
    }
}

function iniciar() {
    var resultado = document.getElementById('resultado');
    mensajes = '';
    
    try {
        nivel1();
    } catch (e) {
        mensajes = mensajes + '<div class="mensaje">ERROR FINAL capturado en el nivel superior: ' + e.message + '</div>';
    }
    
    resultado.style.display = 'block';
    resultado.innerHTML = mensajes;
}