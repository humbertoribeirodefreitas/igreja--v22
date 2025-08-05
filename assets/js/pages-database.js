// Banco de Dados Temporário - Páginas Internas (pages/)
// Igreja Admac

// Dados dos ministérios
const ministerios = {
    intercessao: {
        titulo: "Ministério de Intercessão",
        subtitulo: "Unidos em oração, transformando vidas através da intercessão",
        descricao: "O Ministério de Intercessão é dedicado à oração e intercessão pela igreja, pela cidade e por todas as necessidades. Nossa missão é buscar a presença de Deus e interceder por todos.",
        imagem: "assets/img/Intercessão.jpg",
        horarios: [
            { dia: "Segunda", horario: "19h às 21h", descricao: "Oração pela igreja" },
            { dia: "Quarta", horario: "19h30 às 21h", descricao: "Intercessão pela cidade" },
            { dia: "Sexta", horario: "19h às 21h", descricao: "Oração pelos enfermos" }
        ],
        atividades: [
            { titulo: "Oração", descricao: "Momentos dedicados à oração e intercessão", icone: "fas fa-pray" },
            { titulo: "Vigílias", descricao: "Vigílias de oração mensais", icone: "fas fa-moon" },
            { titulo: "Intercessão", descricao: "Intercessão por necessidades específicas", icone: "fas fa-hands" }
        ],
        lider: "Maria Silva",
        contato: "intercessao@admac.com"
    },
    homens: {
        titulo: "Ministério de Homens",
        subtitulo: "Homens de fé, líderes em suas casas e na sociedade",
        descricao: "O Ministério de Homens busca formar líderes cristãos, fortalecer os laços familiares e desenvolver o caráter masculino baseado nos princípios bíblicos.",
        imagem: "assets/img/homens.jpg",
        horarios: [
            { dia: "Sábado", horario: "17h às 19h", descricao: "Encontro dos homens" }
        ],
        atividades: [
            { titulo: "Estudos Bíblicos", descricao: "Estudos específicos para homens", icone: "fas fa-book" },
            { titulo: "Confra", descricao: "Momentos de confraternização", icone: "fas fa-users" },
            { titulo: "Liderança", descricao: "Desenvolvimento de liderança", icone: "fas fa-crown" }
        ],
        lider: "João Santos",
        contato: "homens@admac.com"
    },
    mulheres: {
        titulo: "Ministério de Mulheres",
        subtitulo: "Mulheres virtuosas, transformando vidas com amor",
        descricao: "O Ministério de Mulheres visa fortalecer e empoderar as mulheres através da palavra de Deus, criando laços de amizade e apoio mútuo.",
        imagem: "assets/img/mulheres.jpg",
        horarios: [
            { dia: "Sábado", horario: "14h às 16h", descricao: "Encontro das mulheres" }
        ],
        atividades: [
            { titulo: "Oração", descricao: "Círculo de oração feminino", icone: "fas fa-pray" },
            { titulo: "Estudos", descricao: "Estudos bíblicos para mulheres", icone: "fas fa-book-open" },
            { titulo: "Confra", descricao: "Momentos de confraternização", icone: "fas fa-heart" }
        ],
        lider: "Ana Costa",
        contato: "mulheres@admac.com"
    },
    jovens: {
        titulo: "Ministério de Jovens",
        subtitulo: "Juventude apaixonada por Deus",
        descricao: "O Ministério de Jovens busca despertar a juventude para uma vida de propósito, através de eventos dinâmicos e relevantes para a nova geração.",
        imagem: "assets/img/jovens.jpg",
        horarios: [
            { dia: "Sábado", horario: "19h às 21h", descricao: "Encontro da juventude" }
        ],
        atividades: [
            { titulo: "Louvor", descricao: "Momentos de adoração jovem", icone: "fas fa-music" },
            { titulo: "Palestras", descricao: "Palestras motivacionais", icone: "fas fa-microphone" },
            { titulo: "Eventos", descricao: "Eventos especiais para jovens", icone: "fas fa-calendar" }
        ],
        lider: "Pedro Lima",
        contato: "jovens@admac.com"
    },
    kids: {
        titulo: "Ministério Kids",
        subtitulo: "Crianças felizes, aprendendo sobre o amor de Deus",
        descricao: "O Ministério Kids é dedicado ao ensino bíblico de forma lúdica e divertida, desenvolvendo o caráter cristão desde a infância.",
        imagem: "assets/img/kids.jpg",
        horarios: [
            { dia: "Domingo", horario: "09h às 11h", descricao: "Escola Bíblica Infantil" },
            { dia: "Sábado", horario: "14h às 16h", descricao: "Atividades Kids" }
        ],
        atividades: [
            { titulo: "Histórias Bíblicas", descricao: "Contação de histórias bíblicas", icone: "fas fa-book" },
            { titulo: "Brincadeiras", descricao: "Atividades lúdicas e educativas", icone: "fas fa-gamepad" },
            { titulo: "Artes", descricao: "Atividades artísticas e manuais", icone: "fas fa-palette" }
        ],
        lider: "Carla Oliveira",
        contato: "kids@admac.com"
    },
    louvor: {
        titulo: "Ministério de Louvor",
        subtitulo: "Adorando a Deus com excelência e dedicação",
        descricao: "O Ministério de Louvor é responsável por conduzir a igreja em adoração, criando um ambiente de entrega e comunhão com Deus através da música.",
        imagem: "assets/img/louvor.jpg",
        horarios: [
            { dia: "Quarta", horario: "19h30 às 21h", descricao: "Ensaio geral" },
            { dia: "Sábado", horario: "17h às 19h", descricao: "Ensaio específico" },
            { dia: "Domingo", horario: "18h às 20h", descricao: "Ministração" }
        ],
        atividades: [
            { titulo: "Ensaios", descricao: "Encontros semanais para ensaio", icone: "fas fa-music" },
            { titulo: "Comunhão", descricao: "Momentos de integração", icone: "fas fa-users" },
            { titulo: "Ministrações", descricao: "Participação em cultos e eventos", icone: "fas fa-microphone" }
        ],
        lider: "Roberto Silva",
        contato: "louvor@admac.com"
    },
    social: {
        titulo: "Área Social",
        subtitulo: "Servindo ao próximo com amor e compaixão",
        descricao: "A Área Social da Igreja Admac é responsável por desenvolver e coordenar ações sociais que visam ajudar pessoas em situação de vulnerabilidade.",
        imagem: "assets/img/social.jpg",
        objetivos: [
            "Ajuda humanitária",
            "Inclusão social", 
            "Desenvolvimento comunitário",
            "Transformação social"
        ],
        projetos: [
            { titulo: "Cesta Básica", descricao: "Distribuição mensal de alimentos", frequencia: "Todo último sábado do mês" },
            { titulo: "Apoio Escolar", descricao: "Material escolar e uniformes", frequencia: "Início do ano letivo" },
            { titulo: "Campanha do Agasalho", descricao: "Arrecadação de roupas de inverno", frequencia: "Durante o inverno" }
        ],
        acoes: [
            { titulo: "Voluntariado", descricao: "Envolvimento da comunidade em ações sociais", icone: "fas fa-hands-helping" },
            { titulo: "Doações", descricao: "Arrecadação e distribuição de donativos", icone: "fas fa-heart" },
            { titulo: "Apoio", descricao: "Acompanhamento e suporte às famílias", icone: "fas fa-hands" }
        ],
        lider: "Lucia Ferreira",
        contato: "social@admac.com"
    },
    lares: {
        titulo: "Ministério de Lares",
        subtitulo: "Famílias unidas em Cristo",
        descricao: "O Ministério de Lares promove a união familiar através de encontros em casas, fortalecendo os laços e a fé das famílias.",
        imagem: "assets/img/lares.jpg",
        horarios: [
            { dia: "Domingo", horario: "19h às 21h", descricao: "Culto nos lares" }
        ],
        atividades: [
            { titulo: "Cultos", descricao: "Cultos realizados em casas", icone: "fas fa-home" },
            { titulo: "Comunhão", descricao: "Momentos de comunhão familiar", icone: "fas fa-users" },
            { titulo: "Oração", descricao: "Oração pelas famílias", icone: "fas fa-pray" }
        ],
        lider: "Carlos Mendes",
        contato: "lares@admac.com"
    },
    retiro: {
        titulo: "Ministério de Retiro",
        subtitulo: "Momentos especiais de renovação espiritual",
        descricao: "O Ministério de Retiro organiza retiros espirituais para renovação, comunhão e fortalecimento da fé.",
        imagem: "assets/img/retiro.jpg",
        proximoRetiro: {
            titulo: "Retiro de Renovação 2024",
            data: "15-17 de Março",
            local: "Chácara Recanto da Paz",
            descricao: "Um fim de semana especial para renovação espiritual"
        },
        atividades: [
            { titulo: "Palestras", descricao: "Palestras edificantes", icone: "fas fa-microphone" },
            { titulo: "Louvor", descricao: "Momentos de adoração", icone: "fas fa-music" },
            { titulo: "Comunhão", descricao: "Tempo de comunhão e amizade", icone: "fas fa-users" }
        ],
        lider: "Fernanda Santos",
        contato: "retiro@admac.com"
    },
    edb: {
        titulo: "Escola Dominical Bíblica",
        subtitulo: "Aprendendo a palavra de Deus",
        descricao: "A EDB oferece estudos bíblicos sistemáticos para todas as idades, promovendo o conhecimento da palavra de Deus.",
        imagem: "assets/img/EDB.jpg",
        horarios: [
            { dia: "Domingo", horario: "09h às 11h", descricao: "Escola Dominical" }
        ],
        classes: [
            { nome: "Berçário", faixaEtaria: "0-3 anos", professor: "Maria Silva" },
            { nome: "Primários", faixaEtaria: "4-7 anos", professor: "João Santos" },
            { nome: "Juniors", faixaEtaria: "8-11 anos", professor: "Ana Costa" },
            { nome: "Adolescentes", faixaEtaria: "12-17 anos", professor: "Pedro Lima" },
            { nome: "Adultos", faixaEtaria: "18+ anos", professor: "Pastor Roberto" }
        ],
        lider: "Pastor Roberto",
        contato: "edb@admac.com"
    }
};

// Dados das galerias por categoria
const galerias = {
    intercessao: [
        { id: 1, titulo: "Momento de Oração", descricao: "Momento de oração e intercessão", imagem: "assets/img/hoje.jpg", data: "2024-01-15", categoria: "intercessao" },
        { id: 2, titulo: "Vigília de Oração", descricao: "Vigília mensal de oração", imagem: "assets/img/hoje (2).jpg", data: "2024-01-10", categoria: "intercessao" },
        { id: 3, titulo: "Círculo de Oração", descricao: "Círculo de oração das mulheres", imagem: "assets/img/hoje (3).jpg", data: "2024-01-08", categoria: "intercessao" }
    ],
    homens: [
        { id: 4, titulo: "Encontro dos Homens", descricao: "Encontro dos homens da igreja", imagem: "assets/img/hoje (4).jpg", data: "2024-01-12", categoria: "homens" },
        { id: 5, titulo: "Estudo Bíblico Masculino", descricao: "Estudo bíblico específico para homens", imagem: "assets/img/hoje (5).jpg", data: "2024-01-05", categoria: "homens" }
    ],
    mulheres: [
        { id: 6, titulo: "Encontro das Mulheres", descricao: "Encontro das mulheres da igreja", imagem: "assets/img/mulheres.jpg", data: "2024-01-14", categoria: "mulheres" },
        { id: 7, titulo: "Café das Mulheres", descricao: "Momento de confraternização", imagem: "assets/img/hoje (6).jpg", data: "2024-01-07", categoria: "mulheres" }
    ],
    jovens: [
        { id: 8, titulo: "Encontro da Juventude", descricao: "Encontro da juventude", imagem: "assets/img/jovens.jpg", data: "2024-01-13", categoria: "jovens" },
        { id: 9, titulo: "Acampamento Jovem", descricao: "Acampamento da juventude", imagem: "assets/img/hoje (7).jpg", data: "2024-01-06", categoria: "jovens" }
    ],
    kids: [
        { id: 10, titulo: "Atividades Kids", descricao: "Atividades do ministério kids", imagem: "assets/img/kids.jpg", data: "2024-01-11", categoria: "kids" },
        { id: 11, titulo: "Escola Bíblica Infantil", descricao: "Aulas da escola bíblica", imagem: "assets/img/hoje (8).jpg", data: "2024-01-04", categoria: "kids" }
    ],
    louvor: [
        { id: 12, titulo: "Ensaio de Louvor", descricao: "Ensaio do ministério de louvor", imagem: "assets/img/louvor.jpg", data: "2024-01-09", categoria: "louvor" },
        { id: 13, titulo: "Ministração", descricao: "Momento de ministração", imagem: "assets/img/hoje (9).jpg", data: "2024-01-03", categoria: "louvor" }
    ],
    social: [
        { id: 14, titulo: "Ação Social", descricao: "Evento de apoio à comunidade", imagem: "assets/img/aviso1.jpg", data: "2024-01-16", categoria: "social" },
        { id: 15, titulo: "Visita Social", descricao: "Visitas a famílias", imagem: "assets/img/hoje (10).jpg", data: "2024-01-02", categoria: "social" },
        { id: 16, titulo: "Campanha Solidária", descricao: "Campanhas de arrecadação", imagem: "assets/img/bem vindo.jpg", data: "2024-01-01", categoria: "social" }
    ],
    lares: [
        { id: 17, titulo: "Culto nos Lares", descricao: "Culto realizado em casa", imagem: "assets/img/lares.jpg", data: "2024-01-17", categoria: "lares" },
        { id: 18, titulo: "Comunhão Familiar", descricao: "Momento de comunhão", imagem: "assets/img/hoje (11).jpg", data: "2024-01-18", categoria: "lares" }
    ],
    retiro: [
        { id: 19, titulo: "Retiro Espiritual", descricao: "Retiro de renovação", imagem: "assets/img/retiro.jpg", data: "2024-01-19", categoria: "retiro" },
        { id: 20, titulo: "Momento de Oração", descricao: "Oração durante o retiro", imagem: "assets/img/hoje (12).jpg", data: "2024-01-20", categoria: "retiro" }
    ],
    edb: [
        { id: 21, titulo: "Escola Dominical", descricao: "Aulas da escola dominical", imagem: "assets/img/EDB.jpg", data: "2024-01-21", categoria: "edb" },
        { id: 22, titulo: "Estudo Bíblico", descricao: "Momento de estudo", imagem: "assets/img/estudo biblico.jpg", data: "2024-01-22", categoria: "edb" }
    ]
};

// Dados de contato e informações gerais
const contato = {
    endereco: "QN 516 - Samambaia, Brasília - DF",
    telefone: "(061) 993241084",
    email: "admacdf@gmail.com",
    horarios: {
        cultos: "Domingo às 19h",
        estudos: "Quarta às 19h30",
        oracao: "Segunda às 19h",
        escola: "Domingo às 09h"
    },
    coordenadas: {
        latitude: -15.7942,
        longitude: -48.0887
    }
};

// Dados de eventos e programações
const eventos = [
    {
        id: 1,
        titulo: "Culto de Celebração",
        data: "2024-01-28",
        horario: "19h",
        local: "Igreja Admac",
        descricao: "Culto especial de celebração",
        categoria: "culto",
        ativo: true
    },
    {
        id: 2,
        titulo: "Estudo Bíblico",
        data: "2024-01-24",
        horario: "19h30",
        local: "Igreja Admac",
        descricao: "Estudo bíblico semanal",
        categoria: "estudo",
        ativo: true
    },
    {
        id: 3,
        titulo: "Encontro de Jovens",
        data: "2024-01-27",
        horario: "19h",
        local: "Igreja Admac",
        descricao: "Encontro da juventude",
        categoria: "jovens",
        ativo: true
    }
];

// Dados de testemunhos
const testemunhos = [
    {
        id: 1,
        nome: "Maria Silva",
        idade: 35,
        testemunho: "Através do ministério de intercessão, encontrei paz e propósito em minha vida.",
        categoria: "intercessao",
        data: "2024-01-15"
    },
    {
        id: 2,
        nome: "João Santos",
        idade: 28,
        testemunho: "O ministério de homens me ajudou a ser um melhor líder em minha família.",
        categoria: "homens",
        data: "2024-01-10"
    },
    {
        id: 3,
        nome: "Ana Costa",
        idade: 42,
        testemunho: "Encontrei amizades verdadeiras no ministério de mulheres.",
        categoria: "mulheres",
        data: "2024-01-08"
    }
];

// Funções utilitárias
function getMinisterio(nome) {
    return ministerios[nome] || null;
}

function getGaleria(categoria) {
    return galerias[categoria] || [];
}

function getEventosAtivos() {
    return eventos.filter(evento => evento.ativo);
}

function getTestemunhos(categoria = null) {
    if (categoria) {
        return testemunhos.filter(testemunho => testemunho.categoria === categoria);
    }
    return testemunhos;
}

function getContato() {
    return contato;
}

// Exportar dados e funções para uso global
window.pagesData = {
    ministerios,
    galerias,
    contato,
    eventos,
    testemunhos,
    getMinisterio,
    getGaleria,
    getEventosAtivos,
    getTestemunhos,
    getContato
}; 