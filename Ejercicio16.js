function procesarLista(numeros) {
    return new Promise(function(resolve, reject) {
        let i = 0;
        function procesarSiguiente() {
            if (i < numeros.length) {
                let tiempo = Math.random() * (1500 - 500) + 500;
                setTimeout(function() {
                    console.log("Procesando " + numeros[i] + "...");
                    document.getElementById("resultado").innerHTML += "Procesando " + numeros[i] + "...<br>";
                    i++;
                    procesarSiguiente();
                }, tiempo);
            } else {
                resolve("Proceso completado");
            }
        }
        procesarSiguiente();
    });
}

let lista = [5, 10, 15, 20];
procesarLista(lista)
    .then(function(mensaje) {
        console.log(mensaje);
        document.getElementById("resultado").innerHTML += mensaje;
    })
    .catch(function(error) {
        console.log(error);
    });