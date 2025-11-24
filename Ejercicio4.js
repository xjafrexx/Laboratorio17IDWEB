function generarSyntaxError() {
    var resultado = document.getElementById('resultado');
    
    try {
        var texto = "{nombre: 'Juan'}";
        var obj = JSON.parse(texto);
    } catch (e) {
        resultado.style.display = 'block';
        resultado.innerHTML = 'Nombre: ' + e.name + '<br>Mensaje: ' + e.message;
    }
}