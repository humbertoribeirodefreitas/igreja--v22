# Bancos de Dados Temporários - Igreja Admac

Este diretório contém os bancos de dados temporários para o site da Igreja Admac, organizados por funcionalidade.

## 📁 Estrutura de Arquivos

```
assets/js/
├── site-database.js      # Banco de dados para index.html
├── pages-database.js     # Banco de dados para páginas internas
└── README.md            # Esta documentação
```

## 🏠 site-database.js

Banco de dados para a página principal (`index.html`).

### Dados Disponíveis

#### Banners/Carrossel
```javascript
siteData.banners          // Array com todos os banners
siteData.getBannersAtivos() // Função para obter banners ativos ordenados
```

#### Avisos
```javascript
siteData.avisos           // Array com todos os avisos
siteData.getAvisosAtivos() // Função para obter avisos ativos ordenados por prioridade
```

#### Vídeos
```javascript
siteData.videos           // Array com todos os vídeos
siteData.getVideosDestaque() // Função para obter vídeos em destaque
```

#### Revista
```javascript
siteData.revista          // Objeto com dados da revista
```

#### Redes Sociais
```javascript
siteData.redesSociais     // Objeto com links das redes sociais
siteData.getRedesSociaisAtivas() // Função para obter redes ativas
```

#### Contato
```javascript
siteData.contato          // Objeto com dados de contato
```

#### Destaques
```javascript
siteData.destaques        // Array com links rápidos
```

#### Estatísticas
```javascript
siteData.estatisticas     // Objeto com estatísticas do site
```

### Como Usar no index.html

```html
<script src="assets/js/site-database.js"></script>
<script>
    // Carregar banners
    const banners = siteData.getBannersAtivos();
    
    // Carregar avisos
    const avisos = siteData.getAvisosAtivos();
    
    // Carregar vídeos em destaque
    const videos = siteData.getVideosDestaque();
    
    // Acessar dados da revista
    const revista = siteData.revista;
    
    // Acessar redes sociais
    const redes = siteData.getRedesSociaisAtivas();
</script>
```

## 📄 pages-database.js

Banco de dados para páginas internas (`pages/`).

### Dados Disponíveis

#### Ministérios
```javascript
pagesData.ministerios     // Objeto com todos os ministérios
pagesData.getMinisterio('intercessao') // Função para obter ministério específico
```

#### Galerias
```javascript
pagesData.galerias        // Objeto com galerias por categoria
pagesData.getGaleria('intercessao') // Função para obter galeria específica
```

#### Contato
```javascript
pagesData.contato         // Objeto com dados de contato
pagesData.getContato()    // Função para obter dados de contato
```

#### Eventos
```javascript
pagesData.eventos         // Array com todos os eventos
pagesData.getEventosAtivos() // Função para obter eventos ativos
```

#### Testemunhos
```javascript
pagesData.testemunhos     // Array com todos os testemunhos
pagesData.getTestemunhos('intercessao') // Função para obter testemunhos por categoria
```

### Como Usar nas Páginas Internas

```html
<script src="../assets/js/pages-database.js"></script>
<script>
    // Carregar dados de um ministério
    const ministerio = pagesData.getMinisterio('intercessao');
    
    // Carregar galeria de um ministério
    const galeria = pagesData.getGaleria('intercessao');
    
    // Carregar eventos ativos
    const eventos = pagesData.getEventosAtivos();
    
    // Carregar testemunhos de um ministério
    const testemunhos = pagesData.getTestemunhos('intercessao');
    
    // Obter dados de contato
    const contato = pagesData.getContato();
</script>
```

## 🎯 Exemplos de Uso

### Carregar Banner no Carrossel
```javascript
const banners = siteData.getBannersAtivos();
banners.forEach(banner => {
    const html = `
        <div class="carousel-item">
            <img src="${banner.imagem}" alt="${banner.titulo}">
            <div class="carousel-caption">
                <h5>${banner.titulo}</h5>
                <p>${banner.descricao}</p>
            </div>
        </div>
    `;
    // Adicionar ao carrossel
});
```

### Carregar Ministério em Página Específica
```javascript
const ministerio = pagesData.getMinisterio('intercessao');
if (ministerio) {
    document.getElementById('titulo').textContent = ministerio.titulo;
    document.getElementById('descricao').textContent = ministerio.descricao;
    
    // Carregar horários
    ministerio.horarios.forEach(horario => {
        const html = `
            <div class="horario-item">
                <strong>${horario.dia}:</strong> ${horario.horario} - ${horario.descricao}
            </div>
        `;
        // Adicionar à lista de horários
    });
}
```

### Carregar Galeria de Fotos
```javascript
const galeria = pagesData.getGaleria('intercessao');
galeria.forEach(foto => {
    const html = `
        <div class="col-md-4 mb-3">
            <div class="card">
                <img src="${foto.imagem}" class="card-img-top" alt="${foto.titulo}">
                <div class="card-body">
                    <h6 class="card-title">${foto.titulo}</h6>
                    <p class="card-text">${foto.descricao}</p>
                    <small class="text-muted">${foto.data}</small>
                </div>
            </div>
        </div>
    `;
    // Adicionar à galeria
});
```

## 🔧 Estrutura dos Dados

### Banner
```javascript
{
    id: 1,
    imagem: "assets/img/banner.jpg",
    titulo: "Título do Banner",
    descricao: "Descrição do banner",
    link: "pages/ministerio.html",
    ativo: true,
    ordem: 1
}
```

### Ministério
```javascript
{
    titulo: "Nome do Ministério",
    subtitulo: "Subtítulo do ministério",
    descricao: "Descrição completa",
    imagem: "assets/img/ministerio.jpg",
    horarios: [
        { dia: "Segunda", horario: "19h", descricao: "Descrição" }
    ],
    atividades: [
        { titulo: "Atividade", descricao: "Descrição", icone: "fas fa-icon" }
    ],
    lider: "Nome do Líder",
    contato: "email@admac.com"
}
```

### Foto da Galeria
```javascript
{
    id: 1,
    titulo: "Título da Foto",
    descricao: "Descrição da foto",
    imagem: "assets/img/foto.jpg",
    data: "2024-01-15",
    categoria: "ministerio"
}
```

## ⚠️ Observações Importantes

1. **Dados Temporários**: Estes são bancos de dados temporários para desenvolvimento
2. **Sem Persistência**: Os dados não são salvos entre sessões
3. **Produção**: Em produção, deve ser implementado backend real
4. **Imagens**: As imagens referenciadas devem existir no diretório `assets/img/`

## 🚀 Próximos Passos

Para implementar em produção:

1. Criar backend com Node.js/Express ou PHP
2. Implementar banco de dados real (MySQL, PostgreSQL)
3. Criar APIs para gerenciar os dados
4. Implementar sistema de upload de imagens
5. Adicionar autenticação para administradores
6. Implementar cache para melhor performance

## 📞 Suporte

Para dúvidas sobre os bancos de dados temporários, consulte a documentação ou entre em contato com o desenvolvedor. 