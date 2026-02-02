// 1. Seleciona o elemento pela classe
const itemClicavel = document.querySelector('.disclaimer__button');

// 2. Define o link de destino
const urlDeDestino = 'https://www.tonypiercing.com.br/';

// 3. Adiciona um "ouvinte" de evento de clique
itemClicavel.addEventListener('click', function() {
    // Redireciona a janela para a URL
    window.location.href = urlDeDestino;
});
var d = window.document.getElementById('h1-material')
        d.style.color = 'white'
        d.style.fontFamily = 'Arial'
        d.style.fontSize = '24px'

var e = window.document.getElementById('h1-perfuração')
        d.style.color = 'white'
        d.style.fontFamily = 'Arial'
        d.style.fontSize = '24px'