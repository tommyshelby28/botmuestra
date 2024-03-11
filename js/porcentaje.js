document.getElementById("fifteenButton").addEventListener("click", function() {
    sumarPorcentaje(15);
});
    
document.getElementById("twentyButton").addEventListener("click", function() {
    sumarPorcentaje(20);
});
    
document.getElementById("thirtyButton").addEventListener("click", function() {
    sumarPorcentaje(30);
});
    
function sumarPorcentaje(porcentaje) {
    const numberInput = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");
    
    const numero = parseFloat(numberInput.value);
    
    if (!isNaN(numero)) {
        const porcentajeCalculado = numero * (porcentaje / 100);
            resultElement.textContent = numero + " + " + porcentajeCalculado.toFixed(2);
        } else {
            resultElement.textContent = "Por favor ingrese un número válido.";
        }
};
    