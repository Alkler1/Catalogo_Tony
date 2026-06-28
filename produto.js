// produto.js

// 1. A MÁGICA DA URL: O JavaScript olha para a barra de endereço do navegador e pega o ID do produto
// Exemplo: se a URL for "produto.html?id=2", ele consegue extrair o número 2.
const parametrosURL = new URLSearchParams(window.location.search);
const idProduto = parseInt(parametrosURL.get('id'));

// 2. BUSCA NA COZINHA: Ele vai até a nossa 'listaJoias' (do dados.js) e procura o produto com o ID correspondente
const joiaSelecionada = listaJoias.find(joia => joia.id === idProduto);

// 3. ENCHE A TELA: Se ele encontrar a jóia, ele captura os elementos do HTML e injeta os dados reais neles
if (joiaSelecionada) {
    document.getElementById('foto-grande').src = joiaSelecionada.imagem;
    document.getElementById('foto-grande').alt = joiaSelecionada.nome;
    document.getElementById('titulo-produto').innerText = joiaSelecionada.nome;
    document.getElementById('preco-produto').innerText = joiaSelecionada.preco;
    
    // Injetando as novas informações que você planejou estilo Nuuvem
    document.getElementById('indicacao-produto').innerText = joiaSelecionada.indicacao;
    document.getElementById('tamanhos-produto').innerText = `📏 Tamanhos disponíveis: ${joiaSelecionada.tamanhos}`;
    document.getElementById('cores-produto').innerText = `🎨 Cores: ${joiaSelecionada.cores}`;
    document.getElementById('materiais-produto').innerText = `🛡️ ${joiaSelecionada.materiais}`;
    document.getElementById('descricao-produto').innerText = joiaSelecionada.descricao;
} else {
    // Se por acaso alguém digitar um ID que não existe na URL, ele avisa na tela
    document.getElementById('titulo-produto').innerText = "Jóia não encontrada! 😢";
}
// Captura a barra de pesquisa que acabamos de liberar no HTML
const barraPesquisaProduto = document.getElementById('search-input');

// Fica ouvindo o teclado do usuário dentro do campo
barraPesquisaProduto.addEventListener('keydown', (evento) => {
    // Se a tecla apertada for o 'Enter'
    if (evento.key === 'Enter') {
        const termo = barraPesquisaProduto.value.trim();
        if (termo !== "") {
            // Redireciona para a página inicial levando o termo de busca na URL!
            window.location.href = `index.html?busca=${encodeURIComponent(termo)}`;
        }
    }
});
// =========================================================================
// MOTOR DE BUSCA FLUTUANTE ESTILO KABUM
// =========================================================================

// 1. Mapeamos os novos elementos que vamos controlar nesta tela
const barraPesquisaFlutuante = document.getElementById('search-input');
const caixaDropdown = document.getElementById('resultados-flutuantes');

// 2. Ouvinte de evento: dispara a cada letra que o usuário digita
barraPesquisaFlutuante.addEventListener('input', () => {
    const termoBusca = barraPesquisaFlutuante.value.toLowerCase().trim();

    // Se o usuário limpar o campo, esconde a caixinha flutuante e para a execução
    if (termoBusca === "") {
        caixaDropdown.innerHTML = "";
        caixaDropdown.style.display = "none";
        return;
    }

    // 3. Varredura na cozinha (dados.js): filtra os produtos pelas tags ou nome
    const produtosEncontrados = listaJoias.filter(joia => {
        const nomeBate = joia.nome.toLowerCase().includes(termoBusca);
        const palavraChaveBate = joia.palavrasChave.some(palavra => palavra.toLowerCase().includes(termoBusca));
        return nomeBate || palavraChaveBate;
    });

    // 4. Renderização: Se não achar nada, avisa. Se achar, fabrica as linhas de produto.
    if (produtosEncontrados.length === 0) {
        caixaDropdown.innerHTML = `<div style="padding: 15px; color: #888; font-size: 14px; text-align: center;">Nenhum produto encontrado...</div>`;
        caixaDropdown.style.display = "block";
    } else {
        caixaDropdown.innerHTML = ""; // Limpa os resultados da letra anterior

        produtosEncontrados.forEach(joia => {
            // Desenha cada linha de produto como um link dinâmico que recarrega a página com o novo ID!
            const itemHTML = `
                <a href="produto.html?id=${joia.id}" class="item-busca-flutuante">
                    <img src="${joia.imagem}" alt="${joia.nome}">
                    <div class="info-mini">
                        <span class="nome-mini">${joia.nome}</span>
                        <span class="preco-mini">${joia.preco}</span>
                    </div>
                </a>
            `;
            caixaDropdown.innerHTML += itemHTML;
        });

        // Mostra a caixinha flutuante na tela por cima do conteúdo
        caixaDropdown.style.display = "block";
    }
});

// 5. FECHAMENTO INTELIGENTE: Se o usuário clicar em qualquer lugar fora da barra, a caixinha some
document.addEventListener('click', (evento) => {
    if (!barraPesquisaFlutuante.contains(evento.target) && !caixaDropdown.contains(evento.target)) {
        caixaDropdown.style.display = "none";
    }
});