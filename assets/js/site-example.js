// Exemplo de uso do banco de dados temporário - Site Principal
// Igreja Admac

// Aguardar o carregamento do banco de dados
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se o banco de dados está disponível
    if (typeof siteData === 'undefined') {
        console.error('Banco de dados não encontrado!');
        return;
    }

    // Carregar banners no carrossel
    loadBanners();
    
    // Carregar avisos
    loadAvisos();
    
    // Carregar vídeos em destaque
    loadVideos();
    
    // Carregar dados da revista
    loadRevista();
    
    // Carregar redes sociais
    loadRedesSociais();
    
    // Carregar destaques
    loadDestaques();
    
    // Carregar estatísticas
    loadEstatisticas();
});

// Função para carregar banners no carrossel
function loadBanners() {
    const banners = siteData.getBannersAtivos();
    const carousel = document.getElementById('mainCarousel');
    
    if (!carousel) return;
    
    const carouselInner = carousel.querySelector('.carousel-inner');
    if (!carouselInner) return;
    
    carouselInner.innerHTML = '';
    
    banners.forEach((banner, index) => {
        const isActive = index === 0 ? 'active' : '';
        const html = `
            <div class="carousel-item ${isActive}">
                <img src="${banner.imagem}" class="d-block w-100" alt="${banner.titulo}">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${banner.titulo}</h5>
                    <p>${banner.descricao}</p>
                    ${banner.link && banner.link !== '#' ? `<a href="${banner.link}" class="btn btn-primary">Saiba Mais</a>` : ''}
                </div>
            </div>
        `;
        carouselInner.innerHTML += html;
    });
}

// Função para carregar avisos
function loadAvisos() {
    const avisos = siteData.getAvisosAtivos();
    const avisosContainer = document.getElementById('avisosContainer');
    
    if (!avisosContainer) return;
    
    avisosContainer.innerHTML = '';
    
    avisos.forEach(aviso => {
        const priorityClass = aviso.prioridade === 'alta' ? 'alert-danger' : 
                            aviso.prioridade === 'media' ? 'alert-warning' : 'alert-info';
        
        const html = `
            <div class="alert ${priorityClass} alert-dismissible fade show" role="alert">
                <div class="d-flex align-items-center">
                    <img src="${aviso.imagem}" alt="Aviso" class="me-3" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
                    <div>
                        <h6 class="alert-heading mb-1">${aviso.titulo}</h6>
                        <p class="mb-0">${aviso.mensagem}</p>
                        <small class="text-muted">${formatDate(aviso.data)}</small>
                    </div>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
        avisosContainer.innerHTML += html;
    });
}

// Função para carregar vídeos em destaque
function loadVideos() {
    const videos = siteData.getVideosDestaque();
    const videosContainer = document.getElementById('videosContainer');
    
    if (!videosContainer) return;
    
    videosContainer.innerHTML = '';
    
    videos.forEach(video => {
        const html = `
            <div class="col-md-6 mb-4">
                <div class="card h-100">
                    <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/${video.embedId}" 
                                title="${video.titulo}" allowfullscreen></iframe>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${video.titulo}</h5>
                        <p class="card-text">${video.descricao}</p>
                        <small class="text-muted">${formatDate(video.data)}</small>
                    </div>
                </div>
            </div>
        `;
        videosContainer.innerHTML += html;
    });
}

// Função para carregar dados da revista
function loadRevista() {
    const revista = siteData.revista;
    const revistaContainer = document.getElementById('revistaContainer');
    
    if (!revistaContainer || !revista) return;
    
    const html = `
        <div class="card">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${revista.imagem}" class="img-fluid rounded-start h-100" style="object-fit: cover;" alt="${revista.titulo}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${revista.titulo}</h5>
                        <p class="card-text">${revista.descricao}</p>
                        <a href="${revista.link}" target="_blank" class="btn btn-primary">
                            <i class="fas fa-download me-2"></i>Baixar Revista
                        </a>
                        <small class="text-muted d-block mt-2">Atualizado em ${formatDate(revista.dataAtualizacao)}</small>
                    </div>
                </div>
            </div>
        </div>
    `;
    revistaContainer.innerHTML = html;
}

// Função para carregar redes sociais
function loadRedesSociais() {
    const redes = siteData.getRedesSociaisAtivas();
    const redesContainer = document.getElementById('redesSociaisContainer');
    
    if (!redesContainer) return;
    
    redesContainer.innerHTML = '';
    
    redes.forEach(rede => {
        const html = `
            <a href="${rede.url}" target="_blank" class="btn btn-outline-primary me-2 mb-2">
                <i class="${rede.icone} me-2"></i>${rede.nome}
            </a>
        `;
        redesContainer.innerHTML += html;
    });
}

// Função para carregar destaques
function loadDestaques() {
    const destaques = siteData.destaques;
    const destaquesContainer = document.getElementById('destaquesContainer');
    
    if (!destaquesContainer) return;
    
    destaquesContainer.innerHTML = '';
    
    destaques.forEach(destaque => {
        const html = `
            <div class="col-md-6 col-lg-3 mb-4">
                <div class="card text-center h-100">
                    <div class="card-body">
                        <i class="${destaque.icone} fa-3x text-${destaque.cor} mb-3"></i>
                        <h6 class="card-title">${destaque.titulo}</h6>
                        <p class="card-text small">${destaque.descricao}</p>
                        <a href="${destaque.link}" class="btn btn-${destaque.cor} btn-sm">Saiba Mais</a>
                    </div>
                </div>
            </div>
        `;
        destaquesContainer.innerHTML += html;
    });
}

// Função para carregar estatísticas
function loadEstatisticas() {
    const estatisticas = siteData.estatisticas;
    const statsContainer = document.getElementById('statsContainer');
    
    if (!statsContainer) return;
    
    const html = `
        <div class="row text-center">
            <div class="col-md-3 mb-3">
                <div class="card bg-primary text-white">
                    <div class="card-body">
                        <h3 class="mb-0">${estatisticas.membros}</h3>
                        <small>Membros</small>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-3">
                <div class="card bg-success text-white">
                    <div class="card-body">
                        <h3 class="mb-0">${estatisticas.ministérios}</h3>
                        <small>Ministérios</small>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-3">
                <div class="card bg-info text-white">
                    <div class="card-body">
                        <h3 class="mb-0">${estatisticas.eventos}</h3>
                        <small>Eventos</small>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-3">
                <div class="card bg-warning text-white">
                    <div class="card-body">
                        <h3 class="mb-0">${estatisticas.anos}</h3>
                        <small>Anos</small>
                    </div>
                </div>
            </div>
        </div>
    `;
    statsContainer.innerHTML = html;
}

// Função para formatar data
function formatDate(dateString) {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

// Função para carregar dados de contato
function loadContato() {
    const contato = siteData.contato;
    const contatoContainer = document.getElementById('contatoContainer');
    
    if (!contatoContainer) return;
    
    const html = `
        <div class="row">
            <div class="col-md-6">
                <h5><i class="fas fa-map-marker-alt me-2"></i>Endereço</h5>
                <p>${contato.endereco}</p>
                
                <h5><i class="fas fa-phone me-2"></i>Telefone</h5>
                <p><a href="tel:${contato.telefone}">${contato.telefone}</a></p>
                
                <h5><i class="fas fa-envelope me-2"></i>Email</h5>
                <p><a href="mailto:${contato.email}">${contato.email}</a></p>
            </div>
            <div class="col-md-6">
                <h5><i class="fas fa-clock me-2"></i>Horários</h5>
                <ul class="list-unstyled">
                    <li><strong>Cultos:</strong> ${contato.horarios.cultos}</li>
                    <li><strong>Estudos:</strong> ${contato.horarios.estudos}</li>
                    <li><strong>Oração:</strong> ${contato.horarios.oracao}</li>
                </ul>
            </div>
        </div>
    `;
    contatoContainer.innerHTML = html;
}

// Exportar funções para uso global
window.siteExample = {
    loadBanners,
    loadAvisos,
    loadVideos,
    loadRevista,
    loadRedesSociais,
    loadDestaques,
    loadEstatisticas,
    loadContato
}; 