const valor1 = document.querySelector=('#num1');
const operator = document.querySelector=('#operator');
const valor2 = document.querySelector=('#num2');
const botao=document.querySelector=("#botao");
let resultado = document.querySelector=('#resultado');

function calcular() {
    valor1 = parseInt(valor1.value);
    valor2 = parseInt(valor2.value);
    operator = operator.value;

    if (operator === "+") {
        resultado.innerHTML = valor1 + valor2;
    }
    if (operator === "-") {
        resultado.innerHTML = valor1 - valor2;
    }
    if (operator === "*") {
        resultado.innerHTML = valor1 * valor2;
    }
    if (operator === "/") {
        resultado.innerHTML = valor1 / valor2;
    }
}

botao.addEventListener("click",calcular);