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
const containerResultados = document.getElementById('vitrine-categorias');

// Guardamos o HTML original da vitrine (as categorias coloridas) assim que a página carrega
const htmlCategoriasOriginais = containerResultados.innerHTML;
let buscaAtiva = false;

// =========================================================================
// 3. FUNÇÃO PRINCIPAL DE RENDERIZAR OS CARDS (Estilo Kabum)
// =========================================================================
function renderizarFiltro(joiasFiltradas) {
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
// 4. FUNÇÃO AUXILIAR PARA EXECUTAR A BUSCA (Unificada)
// =========================================================================
function executarBusca(termo) {
    if (termo === "") {
        buscaAtiva = false;
        containerResultados.innerHTML = htmlCategoriasOriginais;
        configurarCliquesNosCards(); // Reativa os ouvintes nos cards restaurados
        return;
    }

    if (!buscaAtiva) {
        history.pushState({ tela: "busca" }, "");
        buscaAtiva = true;
    }

    const joiasEncontradas = listaJoias.filter(joia => {
        const nomeBate = joia.nome.toLowerCase().includes(termo);
        const palavraChaveBate = joia.palavrasChave.some(palavra => palavra.toLowerCase().includes(termo));
        return nomeBate || palavraChaveBate;
    });

    renderizarFiltro(joiasEncontradas);
}

// =========================================================================
// 5. OUVINTE DE CLIQUES NOS CARDS DE CATEGORIAS
// =========================================================================
function configurarCliquesNosCards() {
    const cardsCategorias = document.querySelectorAll('.card-link');
    
    cardsCategorias.forEach(card => {
        card.addEventListener('click', (evento) => {
            evento.preventDefault();
            const categoriaSelecionada = card.getAttribute('data-categoria');
            if (categoriaSelecionada) {
                barraPesquisa.value = categoriaSelecionada;
                executarBusca(categoriaSelecionada);
            }
        });
    });
}

// Ativa os cliques pela primeira vez ao carregar o site
configurarCliquesNosCards();

// Ouvinte da digitação na barra de pesquisa
barraPesquisa.addEventListener('input', () => {
    const termoBusca = barraPesquisa.value.toLowerCase().trim();
    executarBusca(termoBusca);
});

// =========================================================================
// 6. DETECTAR SETA DE VOLTAR DO NAVEGADOR (UX de Qualidade)
// =========================================================================
window.addEventListener('popstate', () => {
    barraPesquisa.value = "";
    buscaAtiva = false;
    containerResultados.innerHTML = htmlCategoriasOriginais;
    configurarCliquesNosCards(); // Garante que os cards continuem clicáveis ao voltar
});