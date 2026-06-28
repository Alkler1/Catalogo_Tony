// =========================================================================
// 1. REDIRECIONAMENTO DO BOTÃO DE DISCLAIMER
// =========================================================================
const itemClicavel = document.querySelector('.disclaimer__button');
const urlDeDestino = 'https://www.tonypiercing.com.br/';

itemClicavel.addEventListener('click', function() {
    window.location.href = urlDeDestino;
});
 
// =========================================================================
// 2. MAPEAMENTO DE ELEMENTOS GLOBAIS
// =========================================================================
const barraPesquisa = document.getElementById('search-input');
const vitrineCategorias = document.getElementById('vitrine-categorias');

// 💡 AQUI ESTÁ O SEGREDO: O seu container de resultados da busca na Home 
// é a própria vitrine-categorias que vamos limpar e usar de Grid!
const containerResultados = document.getElementById('vitrine-categorias');


// =========================================================================
// 3. FUNÇÃO PRINCIPAL DE RENDERIZAR OS CARDS (Estilo Kabum)
// =========================================================================
function renderizarFiltro(joiasFiltradas) {
    // Liga a vitrine de volta como Grid antes de injetar os cards novos
    containerResultados.style.display = "grid"; 
    containerResultados.innerHTML = "";

    if (joiasFiltradas.length === 0) {
        containerResultados.innerHTML = "<p style='color: white; font-size: 18px; width: 100%; text-align: center;'>Nenhuma jóia encontrada com essa palavra-chave...</p>";
        return;
    }

    joiasFiltradas.forEach(joia => {
        const cardHTML = `
            <a href="produto.html?id=${joia.id}" class="link-produto-home">
                <div class="card-produto-home">
                    <div class="imagem-produto-home">
                        <img src="${joia.imagem}" alt="${joia.nome}">
                    </div>
                    <div class="info-produto-home">
                        <span class="nome-produto-home">${joia.nome}</span>
                        <span class="preco-produto-home">${joia.preco}</span>
                    </div>
                </div>
            </a>
        `;
        containerResultados.innerHTML += cardHTML;
    });
}


// =========================================================================
// 4. O OUVINTE INTELIGENTE DA BARRA DE PESQUISA
// =========================================================================
barraPesquisa.addEventListener('input', () => {
    const termoBusca = barraPesquisa.value.toLowerCase().trim();

    // Se o usuário apagar o texto da barra, o site dá um F5 falso e recarrega a página 
    // para fazer as categorias coloridas originais voltarem a aparecer instantaneamente!
    if (termoBusca === "") {
        window.location.reload();
        return;
    }

    // Filtra a lista com base no que foi digitado
    const joiasEncontradas = listaJoias.filter(joia => {
        const nomeBate = joia.nome.toLowerCase().includes(termoBusca);
        const palavraChaveBate = joia.palavrasChave.some(palavra => palavra.toLowerCase().includes(termoBusca));
        return nomeBate || palavraChaveBate;
    });

    // Dispara a função para desenhar os novos cards estilo e-commerce
    renderizarFiltro(joiasEncontradas);
});