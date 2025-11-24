function probarTryCatchFinally() {
    var resultado = document.getElementById('resultado');
    var mensajes = '';
    
    try {
        console.log.algo.error();
    } catch (error) {
        mensajes = mensajes + '<div class="mensaje">fallo</div>';
    } finally {
        mensajes = mensajes + '<div class="mensaje">siempre se ejecuta</div>';
    }
    
    resultado.style.display = 'block';
    resultado.innerHTML = mensajes;
}