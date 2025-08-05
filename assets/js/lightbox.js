// Lightbox/Modal para Galerias de Fotos - Igreja Admac
// Funcionalidade para exibir imagens em tela grande

class Lightbox {
    constructor() {
        this.currentIndex = 0;
        this.images = [];
        this.modal = null;
        this.init();
    }

    init() {
        // Criar modal dinamicamente
        this.createModal();
        
        // Adicionar listeners para todas as imagens da galeria
        this.addImageListeners();
    }

    createModal() {
        const modalHtml = `
            <div class="lightbox-modal" id="lightboxModal" style="display: none;">
                <div class="lightbox-overlay">
                    <div class="lightbox-container">
                        <div class="lightbox-header">
                            <button class="lightbox-close" id="lightboxClose">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <div class="lightbox-content">
                            <button class="lightbox-nav lightbox-prev" id="lightboxPrev">
                                <i class="fas fa-chevron-left"></i>
                            </button>
                            <div class="lightbox-image-container">
                                <img id="lightboxImage" src="" alt="">
                                <div class="lightbox-info">
                                    <h4 id="lightboxTitle"></h4>
                                    <p id="lightboxDescription"></p>
                                </div>
                            </div>
                            <button class="lightbox-nav lightbox-next" id="lightboxNext">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </div>
                        <div class="lightbox-footer">
                            <span id="lightboxCounter"></span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Adicionar CSS dinamicamente
        const style = document.createElement('style');
        style.textContent = `
            .lightbox-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9999;
                background: rgba(0, 0, 0, 0.9);
            }

            .lightbox-overlay {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }

            .lightbox-container {
                max-width: 90%;
                max-height: 90%;
                background: #fff;
                border-radius: 10px;
                overflow: hidden;
                position: relative;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            }

            .lightbox-header {
                padding: 15px 20px;
                background: #f8f9fa;
                border-bottom: 1px solid #dee2e6;
                display: flex;
                justify-content: flex-end;
            }

            .lightbox-close {
                background: none;
                border: none;
                font-size: 24px;
                color: #6c757d;
                cursor: pointer;
                padding: 5px;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
            }

            .lightbox-close:hover {
                background: #e9ecef;
                color: #495057;
            }

            .lightbox-content {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                min-height: 400px;
                position: relative;
            }

            .lightbox-image-container {
                text-align: center;
                max-width: 100%;
            }

            #lightboxImage {
                max-width: 100%;
                max-height: 70vh;
                object-fit: contain;
                border-radius: 8px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            }

            .lightbox-info {
                margin-top: 15px;
                text-align: center;
            }

            .lightbox-info h4 {
                color: #333;
                margin-bottom: 8px;
                font-size: 1.2rem;
            }

            .lightbox-info p {
                color: #666;
                margin: 0;
                font-size: 0.9rem;
            }

            .lightbox-nav {
                background: rgba(255, 255, 255, 0.9);
                border: none;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                color: #333;
                cursor: pointer;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                transition: all 0.3s ease;
                z-index: 10;
            }

            .lightbox-nav:hover {
                background: rgba(255, 255, 255, 1);
                transform: translateY(-50%) scale(1.1);
            }

            .lightbox-prev {
                left: 20px;
            }

            .lightbox-next {
                right: 20px;
            }

            .lightbox-footer {
                padding: 15px 20px;
                background: #f8f9fa;
                border-top: 1px solid #dee2e6;
                text-align: center;
                color: #6c757d;
                font-size: 0.9rem;
            }

            .gallery-card {
                cursor: pointer;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .gallery-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            }

            .gallery-card img {
                transition: transform 0.3s ease;
            }

            .gallery-card:hover img {
                transform: scale(1.05);
            }

            @media (max-width: 768px) {
                .lightbox-container {
                    max-width: 95%;
                    max-height: 95%;
                }

                .lightbox-nav {
                    width: 40px;
                    height: 40px;
                    font-size: 16px;
                }

                .lightbox-prev {
                    left: 10px;
                }

                .lightbox-next {
                    right: 10px;
                }
            }
        `;

        document.head.appendChild(style);
        document.body.insertAdjacentHTML('beforeend', modalHtml);

        // Adicionar event listeners
        this.addModalListeners();
    }

    addModalListeners() {
        const modal = document.getElementById('lightboxModal');
        const closeBtn = document.getElementById('lightboxClose');
        const prevBtn = document.getElementById('lightboxPrev');
        const nextBtn = document.getElementById('lightboxNext');

        // Fechar modal
        closeBtn.addEventListener('click', () => this.close());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.close();
        });

        // Navegação
        prevBtn.addEventListener('click', () => this.prev());
        nextBtn.addEventListener('click', () => this.next());

        // Teclas de atalho
        document.addEventListener('keydown', (e) => {
            if (modal.style.display === 'block') {
                switch(e.key) {
                    case 'Escape':
                        this.close();
                        break;
                    case 'ArrowLeft':
                        this.prev();
                        break;
                    case 'ArrowRight':
                        this.next();
                        break;
                }
            }
        });
    }

    addImageListeners() {
        // Encontrar todas as imagens em cards da galeria
        const galleryCards = document.querySelectorAll('.card img');
        
        galleryCards.forEach((img, index) => {
            const card = img.closest('.card');
            const title = card.querySelector('.card-title')?.textContent || '';
            const description = card.querySelector('.card-text')?.textContent || '';

            // Adicionar dados da imagem
            this.images.push({
                src: img.src,
                alt: img.alt,
                title: title,
                description: description
            });

            // Adicionar listener de clique
            card.addEventListener('click', () => {
                this.open(index);
            });

            // Adicionar classe para hover
            card.classList.add('gallery-card');
        });
    }

    open(index = 0) {
        if (this.images.length === 0) return;

        this.currentIndex = index;
        this.updateModal();
        document.getElementById('lightboxModal').style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    }

    close() {
        document.getElementById('lightboxModal').style.display = 'none';
        document.body.style.overflow = ''; // Restaurar scroll
    }

    prev() {
        if (this.images.length === 0) return;
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateModal();
    }

    next() {
        if (this.images.length === 0) return;
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateModal();
    }

    updateModal() {
        const image = this.images[this.currentIndex];
        const modalImage = document.getElementById('lightboxImage');
        const modalTitle = document.getElementById('lightboxTitle');
        const modalDescription = document.getElementById('lightboxDescription');
        const modalCounter = document.getElementById('lightboxCounter');
        const prevBtn = document.getElementById('lightboxPrev');
        const nextBtn = document.getElementById('lightboxNext');

        modalImage.src = image.src;
        modalImage.alt = image.alt;
        modalTitle.textContent = image.title;
        modalDescription.textContent = image.description;
        modalCounter.textContent = `${this.currentIndex + 1} de ${this.images.length}`;

        // Mostrar/ocultar botões de navegação
        prevBtn.style.display = this.images.length > 1 ? 'flex' : 'none';
        nextBtn.style.display = this.images.length > 1 ? 'flex' : 'none';
    }
}

// Inicializar lightbox quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se estamos em uma página de galeria
    const galleryContainer = document.getElementById('gallery');
    if (galleryContainer) {
        new Lightbox();
    }
});

// Exportar para uso global
window.Lightbox = Lightbox; 