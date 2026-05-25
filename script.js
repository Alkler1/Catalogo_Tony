// 1. Seleciona o elemento pela classe
const itemClicavel = document.querySelector('.disclaimer__button');

// 2. Define o link de destino
const urlDeDestino = 'https://www.tonypiercing.com.br/';

// 3. Adiciona um "ouvinte" de evento de clique
itemClicavel.addEventListener('click', function() {
    // Redireciona a janela para a URL
    window.location.href = urlDeDestino;
});
 
// 1. Mapeamos os elementos do HTML que vamos controlar
const barraPesquisa = document.getElementById('search-input');
const vitrineCategorias = document.getElementById('vitrine-categorias');
const containerResultados = document.getElementById('resultados-busca');

// 2. Função para desenhar os cards da pesquisa na tela
function renderizarFiltro(joiasFiltradas) {
    containerResultados.innerHTML = "";

    if (joiasFiltradas.length === 0) {
        containerResultados.innerHTML = "<p style='color: white; font-size: 18px; width: 100%; text-align: center;'>Nenhuma jóia encontrada com essa palavra-chave...</p>";
        return;
    }

    joiasFiltradas.forEach(joia => {
        const cardHTML = `
            <a href="" class="card-card1">
                <div class="card1">
                    <div class="card-title">${joia.nome}</div>
                    <div class="album-image1">
                        <img src="${joia.imagem}" alt="${joia.nome}">
                    </div>
                </div>
            </a>
        `;
        containerResultados.innerHTML += cardHTML;
    });
}

// 3. O Ouvinte da barra de pesquisa
barraPesquisa.addEventListener('input', () => {
    const termoBusca = barraPesquisa.value.toLowerCase().trim();

    if (termoBusca === "") {
        vitrineCategorias.style.display = "grid";
        containerResultados.style.display = "none";
        return;
    }

    vitrineCategorias.style.display = "none";
    containerResultados.style.display = "grid";

    const joiasEncontradas = listaJoias.filter(joia => {
        const nomeBate = joia.nome.toLowerCase().includes(termoBusca);
        const palavraChaveBate = joia.palavrasChave.some(palavra => palavra.toLowerCase().includes(termoBusca));
        return nomeBate || palavraChaveBate;
    });

    renderizarFiltro(joiasEncontradas);
});