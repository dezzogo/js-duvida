const valor1 = document.querySelector('#num1');
const operator = document.querySelector('#operator');
const valor2 = document.querySelector('#num2');
const botao=document.querySelector("#botao");
let resultado = document.querySelector('#resultado');

function calcular() {
    if ( operator.value === "+") {
        resultado.innerHTML = parseInt(valor1.value) + parseInt(valor2.value);
    }

    if ( operator.value === "-") {
        resultado.innerHTML = parseInt(valor1.value) - parseInt(valor2.value);
    }

    if ( operator.value === "*") {
        resultado.innerHTML = parseInt(valor1.value) * parseInt(valor2.value);
    }

    if ( operator.value === "/") {
        resultado.innerHTML = parseInt(valor1.value) / parseInt(valor2.value);
    }
}

botao.addEventListener("click",calcular);