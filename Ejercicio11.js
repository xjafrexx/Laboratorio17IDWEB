function dividirAsync(a, b, callback) {
    setTimeout(function() {
        if (b === 0) {
            callback(new Error("No se puede dividir entre cero"), null);
        } else {
            callback(null, a / b);
        }
    }, 1500);
}

function iniciar() {
    var resultado = document.getElementById('resultado');
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    
    resultado.style.display = 'block';
    resultado.innerHTML = 'Calculando...';
    
    dividirAsync(a, b, function(error, result) {
        if (error) {
            resultado.innerHTML = 'Error: ' + error.message;
        } else {
            resultado.innerHTML = 'Resultado: ' + result;
        }
    });
}