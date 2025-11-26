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

document.getElementById("dividir").addEventListener("click", async function() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    
    try {
        let resultado = await dividirAsync(a, b);
        console.log("Resultado: " + resultado);
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    } catch (error) {
        console.log(error.message);
        document.getElementById("resultado").innerHTML = error.message;
    }
});