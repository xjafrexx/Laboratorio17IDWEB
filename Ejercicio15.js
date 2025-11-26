function dividirAsync(a, b) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (b === 0) {
                reject(new Error("No se puede dividir entre cero"));
            } else {
                resolve(a / b);
            }
        }, 1500);
    });
}

document.getElementById("dividir").addEventListener("click", function() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    
    dividirAsync(a, b)
        .then(function(resultado) {
            console.log("Resultado: " + resultado);
            document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
        })
        .catch(function(error) {
            console.log(error.message);
            document.getElementById("resultado").innerHTML = error.message;
        });
});