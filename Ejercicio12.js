function procesarLista(numeros, callback) {
    var resultado = document.getElementById('resultado');
    var procesados = 0;
    
    for (var i = 0; i < numeros.length; i++) {
        var tiempo = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
        
        (function(numero, tiempo) {
            setTimeout(function() {
                var mensaje = document.createElement('div');
                mensaje.className = 'mensaje';
                mensaje.innerHTML = 'Procesando ' + numero + '...';
                resultado.appendChild(mensaje);
                
                procesados++;
                if (procesados === numeros.length) {
                    callback("Proceso completado");
                }
            }, tiempo);
        })(numeros[i], tiempo);
    }
}

function iniciar() {
    var resultado = document.getElementById('resultado');
    resultado.style.display = 'block';
    resultado.innerHTML = '';
    
    var numeros = [1, 2, 3, 4, 5];
    
    procesarLista(numeros, function(mensaje) {
        var mensajeFinal = document.createElement('div');
        mensajeFinal.className = 'mensaje';
        mensajeFinal.innerHTML = '<strong>' + mensaje + '</strong>';
        resultado.appendChild(mensajeFinal);
    });
}