const valor1 = document.querySelector('#num1');
const operator = document.querySelector('#operator');
const valor2 = document.querySelector('#num2');
let resultado = document.querySelector('#resultado');

function calcular() {
    if (valor1.value!=='' && valor2.value!=='') {
        if ( operator.value === "+") {
            resultado.innerHTML = parseInt(valor1.value) + parseInt(valor2.value);
        }

        if ( operator.value === "-") {
            resultado.innerHTML = parseInt(valor1.value) - parseInt(valor2.value);
        }

        if ( operator.value === "x") {
            resultado.innerHTML = parseInt(valor1.value) * parseInt(valor2.value);
        }

        if ( operator.value === "/") {
            resultado.innerHTML = parseInt(valor1.value) / parseInt(valor2.value);
        }
    }  
    else {
        resultado.innerHTML='';
    }
}

operator.addEventListener("change",calcular);
valor1.addEventListener("keyup",calcular);
valor2.addEventListener("keyup",calcular);