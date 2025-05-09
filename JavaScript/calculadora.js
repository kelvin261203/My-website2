const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const operacion = document.getElementById("operacion");
const resullt = document.getElementById("resullt");
const buttonr = document.getElementById("buttonr");

// Una sola función que maneja todas las operaciones
function calcular() {
    // Obtenemos los valores como números
    const num1 = parseInt(box1.value);
    const num2 = parseInt(box2.value);
    let resultado;
    
    // Verificamos qué operación se seleccionó
    const tipoOperacion = operacion.value;
    
    // Realizamos la operación correspondiente
    switch(tipoOperacion) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            // Verificamos que no se divida por cero
            if(num2 === 0) {
                resultado = "Error: No se puede dividir por cero";
            } else {
                resultado = num1 / num2;
            }
            break;
    }
    
    // Mostramos el resultado
    resullt.textContent = resultado;
}

// Agregamos solo un evento de clic al botón
buttonr.addEventListener("click", calcular);