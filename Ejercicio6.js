function validarEdad(edad) {
    if (edad < 0 || isNaN(edad)) {
        throw new Error("Edad invalida");
    }
    return true;
}

function validarEdadUsuario() {
    var resultado = document.getElementById('resultado');
    var edad = document.getElementById('edad').value;
    
    try {
        validarEdad(edad);
        resultado.style.display = 'block';
        resultado.className = 'success';
        resultado.innerHTML = 'Edad valida: ' + edad;
    } catch (error) {
        resultado.style.display = 'block';
        resultado.className = 'error';
        resultado.innerHTML = 'Error: ' + error.message;
    }
}