let pantalla = document.getElementById("pantalla");

function agregar(valor) {
    const operadores = ["+", "-", "*", "/"];
    let ultimo = pantalla.value.slice(-1); 
 
    if (operadores.includes(valor)) {
        if (pantalla.value === "") return; 
        if (operadores.includes(ultimo)) {
           
            pantalla.value = pantalla.value.slice(0, -1) + valor;
            return;
        }
    }

    if (valor === ".") {
        let partes = pantalla.value.split(/[\+\-\*\/]/);
        let ultima = partes[partes.length - 1];
        if (ultima.includes(".")) return;
    }
 
    if (valor === "x") valor = "*";

    pantalla.value += valor;
}

function limpiar() {
    pantalla.value = "";
}

function calcular() {
    try {
        if (pantalla.value.trim() === "") return;
        let resultado = eval(pantalla.value);

        if (resultado === Infinity || resultado === -Infinity) {
            pantalla.value = "Error: División por 0";
        } else {
            pantalla.value = resultado;
        }
    } catch {
        pantalla.value = "Error";
    }
}
function retroceso() {
   
    pantalla.value = pantalla.value.slice(0, -1);
}