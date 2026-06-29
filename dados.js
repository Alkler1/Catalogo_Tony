// dados.js

const listaJoias = [
    {
        id: 1,
        nome: "Jóias Básicas - Aço",
        preco: "R$ 1,80 à 11,00",
        imagem: "imagens/labret-inicial.png", // Checar caminho até a pasta!
        indicacao: "Peça normalmente indicada para perfurações na boca (lábio), tragus ou conch.",
        tamanhos: "6mm, 8mm, 10mm e 12mm",
        cores: "Disponível nas cores Prata, Preto e Dourado",
        materiais: "Titânio e Aço Cirúrgico 316L",
        descricao: "Modelo reto clássico com fechamento por esfera de rosca externa. Perfeito para atualizações ou perfurações iniciais devido à alta biocompatibilidade.",
        palavrasChave: ["labret", "inicial", "basico", "tragus", "conch", "labio", "boca", "prata", "titanio", "aco"]
    },
    {
        id: 2,
        nome: "Umbigo Tradicional- Aço",
        preco: "R$ 5,00",
        imagem: "imagens/umbigo-básico-aco.png", // checar caminho até a pasta!
        indicacao: "Peça normalmente indicada para perfuração no umbigo.",
        tamanhos: "10mm e 12mm de comprimento da haste",
        cores: "Disponível nas cores Prata e Dourado",
        materiais: "Aço Cirúrgico 316L com pedras em Zircônia",
        descricao: "Modelo banana bell clássico com duas pedras de zircônia legítimas de alto brilho. Possui excelente polimento para evitar acúmulo de secreções.",
        palavrasChave: ["umbigo", "zirconia", "banana", "barriga", "brilhante", "prata", "dourado", "aco"]
    },
    {
        id: 3,
        nome: "Labret Ponto de Luz - Aço",
        preco: "R$ 17,00",
        imagem: "imagens/labret_ponto_luz.png", //checar caminho até a pasta!
        indicacao: "Indicado para tragus, conch, helix ou aba nasal, para australiano, para primeira, segunda ou teceira perfuração",
        tamanhos: "6mm e 8mm de comprimento de haste",
        cores: "Prata com pedra cristal",
        materiais: "Aço Cirúrgico 316L e Garra com Zircônia",
        descricao: "O queridinho das atualizações. Traz um ponto de luz discreto e elegante com cravação em garras, garantindo que a pedra não caia no dia a dia.",
        palavrasChave: ["labret", "ponto de luz", "brilhante", "cristal", "helix", "tragus", "conch", "nariz", "aco"]
    },
    {
        id: 4,
        nome: "Argola Segmentada Clicker - Aço",
        preco: "R$ 18,00",
        imagem: "imagens/clicker_segmento.png", //checar caminho até a pasta
        indicacao: "Universal. Muito utilizada em helix, septo, daith, conch ou aba nasal.",
        tamanhos: "6mm, 8mm, 10mm e 12mm de diâmetro",
        cores: "Prata, Dourado e Black por R$25,00",
        materiais: "Aço Cirúrgico 316L",
        descricao: "Design minimalista com sistema de fechamento articulado por clique (clicker). Muito fácil de colocar e remover, sem necessidade de alicates, mantendo um visual contínuo e liso.",
        palavrasChave: ["argola", "clicker", "segmentada", "lisa", "helix", "septum", "daith", "nariz", "conch", "prata", "dourado"]
    },
    {
        id: 5,
        nome: "Nostril Reto - Ponto de Luz",
        preco: "R$ 19,90",
        imagem: "imagens/nostril_basico_aco.png",  //checar caminho até a pasta
        indicacao: "Exclusivo para perfuração ou atualização na aba nasal (nariz).",
        tamanhos: "0.8mm de espessura da haste",
        cores: "Prata clássico",
        materiais: "Aço Cirúrgico 316L",
        descricao: "Piercing de nariz modelo reto com terminação em formato de mini-esfera retentora na ponta interna. No topo, uma zircônia delicada que traz um brilho discreto ao rosto.",
        palavrasChave: ["nostril", "nariz", "ponto de luz", "brilhante", "reto", "aba nasal", "prata", "aco"]
    },
    {
        id: 6,
        nome: "Microbell Curvo - Eyebrow",
        preco: "R$ 24,90",
        imagem: "src/assets/images/microbell-curvo.png",  //checar caminho ate´a pasta
        indicacao: "Indicado para sobrancelha, vertical labret ou rook.",
        tamanhos: "8mm e 10mm de comprimento",
        cores: "Prata",
        materiais: "Aço Cirúrgico 316L",
        descricao: "Haste curva leve com duas esferas rosqueáveis nas pontas (rosca externa). Modelo clássico e anatômico, polido espelhado para máximo conforto.",
        palavrasChave: ["sobrancelha", "eyebrow", "curvo", "microbell", "vertical labret", "rook", "prata", "aco"]
    },
    {
        id: 7,
        nome: "Circular Barbell - Herradura",
        preco: "R$ 29,90",
        imagem: "src/assets/images/circular-barbell.png",  //checar caminho até e pasta
        indicacao: "Muito utilizado em septum, smile, helix ou lóbulo.",
        tamanhos: "8mm, 10mm e 12mm de diâmetro",
        cores: "Prata e Preto",
        materiais: "Aço Cirúrgico 316L",
        descricao: "Modelo ferradura clássico com duas esferas removíveis. Peça extremamente versátil que permite a troca das pontas por espinhos (spikes) ou outras esferas.",
        palavrasChave: ["ferradura", "herradura", "septum", "smile", "circular", "barbell", "helix", "prata", "preto"]
    }
];