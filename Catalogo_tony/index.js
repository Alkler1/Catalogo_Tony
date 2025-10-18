// 1. Seleciona o elemento pela classe
const itemClicavel = document.querySelector('.disclaimer__button');

// 2. Define o link de destino
const urlDeDestino = 'https://www.tonypiercing.com.br/';

// 3. Adiciona um "ouvinte" de evento de clique
itemClicavel.addEventListener('click', function() {
    // Redireciona a janela para a URL
    window.location.href = urlDeDestino;
});