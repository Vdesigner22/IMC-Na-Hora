// Seleciona os elementos uma única vez fora das funções
const elemento1 = document.getElementById('underweight');
const elemento2 = document.getElementById('Idealweight');
const elemento3 = document.getElementById('SlightlyOverweight');
const elemento4 = document.getElementById('Obesity1Grade');
const elemento5 = document.getElementById('Obesity2Grade');
const elemento6 = document.getElementById('Obesity3Grade');

// Função que garante que apenas um elemento apareça
function mostrarSomente(id) {
    const ids = ['underweight', 'Idealweight', 'SlightlyOverweight', 'Obesity1Grade', 'Obesity2Grade', 'Obesity3Grade'];

    ids.forEach(itemId => {
        const el = document.getElementById(itemId);
        if (el) {
            el.style.display = (itemId === id) ? 'block' : 'none';
        }
    });
}

// Função principal do cálculo do IMC
function imc() {
    const nome = document.getElementById('nome').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = document.getElementById('resultado');

    if (nome !== '' && !isNaN(altura) && !isNaN(peso)) {
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        let classificacao = '';
        let idMostrar = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
            idMostrar = 'underweight';
        } else if (valorIMC < 25) {
            classificacao = 'com o peso ideal. Parabéns!!!';
            idMostrar = 'Idealweight';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
            idMostrar = 'SlightlyOverweight';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau Ⅰ.';
            idMostrar = 'Obesity1Grade';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau Ⅱ.';
            idMostrar = 'Obesity2Grade';
        } else {
            classificacao = 'com obesidade grau Ⅲ. Cuidado!';
            idMostrar = 'Obesity3Grade';
        }

        mostrarSomente(idMostrar);
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
    } else {
        resultado.textContent = 'Preencha todos os campos corretamente!';
        mostrarSomente(''); // esconde todos se der erro
    }
}



        




calcular.addEventListener('click', imc);
