// Banco de Dados Temporário - Site Principal (index.html)
// Igreja Admac

// Dados dos banners/carrossel
const banners = [
    {
        id: 1,
        imagem: "assets/img/bem vindo.jpg",
        titulo: "Mensagens Inspiradoras",
        descricao: "Ouça as mensagens que transformam vidas",
        link: "#",
        ativo: true,
        ordem: 1
    },
    {
        id: 2,
        imagem: "assets/img/estudo biblico.jpg",
        titulo: "Estudos Bíblicos",
        descricao: "Aprofunde seu conhecimento na palavra de Deus",
        link: "pages/edb.html",
        ativo: true,
        ordem: 2
    },
    {
        id: 3,
        imagem: "assets/img/culto de louvor.jpg",
        titulo: "Culto de Louvor",
        descricao: "Venha adorar conosco",
        link: "#",
        ativo: true,
        ordem: 3
    },
    {
        id: 4,
        imagem: "assets/img/Intercessão.jpg",
        titulo: "Ministério de Intercessão",
        descricao: "Unidos em oração, transformando vidas",
        link: "pages/intercessao.html",
        ativo: true,
        ordem: 4
    },
    {
        id: 5,
        imagem: "assets/img/homens.jpg",
        titulo: "Ministério de Homens",
        descricao: "Homens de fé, líderes em suas casas",
        link: "pages/homens.html",
        ativo: true,
        ordem: 5
    },
    {
        id: 6,
        imagem: "assets/img/mulheres.jpg",
        titulo: "Ministério de Mulheres",
        descricao: "Mulheres virtuosas, transformando vidas",
        link: "pages/mulheres.html",
        ativo: true,
        ordem: 6
    },
    {
        id: 7,
        imagem: "assets/img/jovens.jpg",
        titulo: "Ministério de Jovens",
        descricao: "Juventude apaixonada por Deus",
        link: "pages/jovens.html",
        ativo: true,
        ordem: 7
    },
    {
        id: 8,
        imagem: "assets/img/kids.jpg",
        titulo: "Ministério Kids",
        descricao: "Crianças felizes, aprendendo sobre o amor de Deus",
        link: "pages/kids.html",
        ativo: true,
        ordem: 8
    }
];

// Dados dos avisos
const avisos = [
    {
        id: 1,
        titulo: "AVISO IMPORTANTE",
        mensagem: "(AJUDE O MAIS VELHO NAS FERRAMENTA DA IGREJA)",
        imagem: "assets/img/aviso1.jpg",
        ativo: true,
        data: "2024-01-15",
        prioridade: "alta"
    },
    {
        id: 2,
        titulo: "Culto Especial",
        mensagem: "Domingo às 19h - Culto de Celebração",
        imagem: "assets/img/hoje.jpg",
        ativo: true,
        data: "2024-01-20",
        prioridade: "media"
    },
    {
        id: 3,
        titulo: "Estudo Bíblico",
        mensagem: "Quarta-feira às 19h30 - Estudo Bíblico",
        imagem: "assets/img/estudo biblico.jpg",
        ativo: true,
        data: "2024-01-17",
        prioridade: "baixa"
    }
];

// Dados dos vídeos em destaque
const videos = [
    {
        id: 1,
        titulo: "Culto Recente",
        url: "https://www.youtube.com/live/jt9ZbdhlA1k?si=Y2VZdrOGFDTIReDk",
        embedId: "jt9ZbdhlA1k",
        descricao: "Assista ao culto mais recente transmitido ao vivo.",
        ativo: true,
        destaque: true,
        data: "2024-01-15"
    },
    {
        id: 2,
        titulo: "Último Culto de Libertação",
        url: "https://www.youtube.com/live/zVsHVmOZlBI?si=moupLT8oHlRqPbTS",
        embedId: "zVsHVmOZlBI",
        descricao: "Assista ao último culto de libertação transmitido ao vivo.",
        ativo: true,
        destaque: true,
        data: "2024-01-10"
    }
];

// Dados da revista
const revista = {
    titulo: "Revista Admac",
    descricao: "A revista Admac traz mensagens inspiradoras, testemunhos, programações e muito mais para edificar sua vida espiritual.",
    link: "https://drive.google.com/file/d/1ISlkhSaVjWEwmEexybSQNZBt-ZQghGa5/view?pli=1",
    imagem: "assets/img/EDB.jpg",
    ativo: true,
    dataAtualizacao: "2024-01-15"
};

// Dados das redes sociais
const redesSociais = {
    instagram: {
        url: "https://www.instagram.com/admac.sede/?igsh=azEwaWdqZmVxeWJ0#",
        nome: "Instagram",
        icone: "fab fa-instagram",
        ativo: true
    },
    youtube: {
        url: "https://www.youtube.com/live/R3IjLXJTjgI?si=jegsIdEOh3vjbRLx",
        nome: "YouTube",
        icone: "fab fa-youtube",
        ativo: true
    },
    facebook: {
        url: "https://www.facebook.com/roberto.silva.228792/",
        nome: "Facebook",
        icone: "fab fa-facebook",
        ativo: true
    },
    whatsapp: {
        url: "https://wa.me/5561993241084?text=Olá! Gostaria de fazer um pedido de oração.",
        nome: "WhatsApp",
        icone: "fab fa-whatsapp",
        ativo: true
    },
    spotify: {
        url: "https://open.spotify.com/show/2lzm9pXbj4PCoWcxsFzDtf",
        nome: "Spotify",
        icone: "fab fa-spotify",
        ativo: true
    }
};

// Dados de contato
const contato = {
    endereco: "QN 516 - Samambaia, Brasília - DF",
    telefone: "(061) 993241084",
    email: "admacdf@gmail.com",
    horarios: {
        cultos: "Domingo às 19h",
        estudos: "Quarta às 19h30",
        oracao: "Segunda às 19h"
    }
};

// Dados dos destaques/links rápidos
const destaques = [
    {
        id: 1,
        titulo: "Escola Bíblica",
        descricao: "Estudos bíblicos para todas as idades",
        link: "pages/edb.html",
        icone: "fas fa-book",
        cor: "primary"
    },
    {
        id: 2,
        titulo: "Ministérios",
        descricao: "Conheça nossos ministérios",
        link: "pages/intercessao.html",
        icone: "fas fa-church",
        cor: "success"
    },
    {
        id: 3,
        titulo: "Galeria",
        descricao: "Fotos dos nossos eventos",
        link: "pages/galeria.html",
        icone: "fas fa-images",
        cor: "info"
    },
    {
        id: 4,
        titulo: "Contato",
        descricao: "Entre em contato conosco",
        link: "#contato",
        icone: "fas fa-phone",
        cor: "warning"
    }
];

// Dados de estatísticas (para dashboard público)
const estatisticas = {
    membros: 150,
    ministérios: 8,
    eventos: 12,
    anos: 5
};

// Funções utilitárias
function getBannersAtivos() {
    return banners.filter(banner => banner.ativo).sort((a, b) => a.ordem - b.ordem);
}

function getAvisosAtivos() {
    return avisos.filter(aviso => aviso.ativo).sort((a, b) => {
        if (a.prioridade === 'alta') return -1;
        if (b.prioridade === 'alta') return 1;
        return new Date(b.data) - new Date(a.data);
    });
}

function getVideosDestaque() {
    return videos.filter(video => video.ativo && video.destaque);
}

function getRedesSociaisAtivas() {
    return Object.values(redesSociais).filter(rede => rede.ativo);
}

// Exportar dados e funções para uso global
window.siteData = {
    banners,
    avisos,
    videos,
    revista,
    redesSociais,
    contato,
    destaques,
    estatisticas,
    getBannersAtivos,
    getAvisosAtivos,
    getVideosDestaque,
    getRedesSociaisAtivas
}; 