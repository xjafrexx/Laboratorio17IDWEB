function probarTypeError() {
    var resultado = document.getElementById('resultado');
    
    try {
        var x = null;
        x.nombre;
    } catch (e) {
        resultado.style.display = 'block';
        
        if (e instanceof TypeError) {
            resultado.innerHTML = 'Es un TypeError: ' + e.message;
        } else {
            resultado.innerHTML = 'Es otro tipo de error: ' + e.message;
        }
    }
}