# Lightbox para Galerias - Igreja Admac

## Descrição
Sistema de lightbox/modal para exibir imagens das galerias em tela grande. Implementado em JavaScript puro, sem dependências externas.

## Funcionalidades

### ✅ Implementadas
- **Modal responsivo**: Exibe imagens em tela grande
- **Navegação**: Botões para navegar entre imagens (anterior/próximo)
- **Teclas de atalho**: 
  - `ESC` - Fechar modal
  - `←` (seta esquerda) - Imagem anterior
  - `→` (seta direita) - Próxima imagem
- **Informações da imagem**: Exibe título e descrição
- **Contador**: Mostra posição atual (ex: "2 de 5")
- **Efeitos visuais**: Hover nos cards, transições suaves
- **Responsivo**: Funciona em dispositivos móveis

### 🎨 Características Visuais
- Cards com efeito hover (elevação e zoom)
- Modal com fundo escuro semi-transparente
- Botões de navegação circulares
- Design moderno e limpo
- Animações suaves

## Como Usar

### 1. Incluir o Script
Adicione o script em qualquer página de galeria:

```html
<script src="../assets/js/lightbox.js"></script>
```

### 2. Estrutura HTML
O lightbox funciona automaticamente com cards que contêm imagens:

```html
<div class="card h-100">
    <img src="caminho/para/imagem.jpg" class="card-img-top" alt="Descrição">
    <div class="card-body">
        <h5 class="card-title">Título da Imagem</h5>
        <p class="card-text">Descrição da imagem</p>
    </div>
</div>
```

### 3. Funcionamento Automático
- O lightbox detecta automaticamente todas as imagens em cards
- Ao clicar em qualquer card, abre o modal
- Navegação automática entre todas as imagens da página

## Páginas Atualizadas

As seguintes páginas já incluem o lightbox:

- ✅ `pages/galeria.html` - Galeria principal
- ✅ `pages/galeria-louvor.html` - Galeria de louvor
- ✅ `pages/galeria-midia.html` - Galeria de mídia
- ✅ `pages/galeria-social.html` - Galeria social
- ✅ `pages/galeria-mulheres.html` - Galeria de mulheres
- ✅ `pages/galeria-retiro.html` - Galeria de retiro
- ✅ `pages/galeria-kids.html` - Galeria kids
- ✅ `pages/galeria-lares.html` - Galeria de lares
- ✅ `pages/galeria-intercessao.html` - Galeria de intercessão
- ✅ `pages/galeria-jovens.html` - Galeria de jovens
- ✅ `pages/galeria-edb.html` - Galeria EDB
- ✅ `pages/galeria-homens.html` - Galeria de homens

## Personalização

### CSS Customizado
O CSS é injetado dinamicamente, mas você pode sobrescrever estilos:

```css
/* Personalizar cor do modal */
.lightbox-modal {
    background: rgba(0, 0, 0, 0.95);
}

/* Personalizar botões de navegação */
.lightbox-nav {
    background: #007bff;
    color: white;
}
```

### JavaScript Customizado
Para funcionalidades avançadas, você pode acessar a classe Lightbox:

```javascript
// Criar instância manual
const lightbox = new Lightbox();

// Abrir modal programaticamente
lightbox.open(0); // Abre a primeira imagem
```

## Compatibilidade

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móveis (iOS/Android)

## Dependências

- **Bootstrap 5**: Para estrutura de cards
- **Font Awesome**: Para ícones
- **JavaScript ES6+**: Para funcionalidades modernas

## Estrutura do Código

### Classe Lightbox
```javascript
class Lightbox {
    constructor() // Inicialização
    init() // Configuração inicial
    createModal() // Cria o modal HTML
    addImageListeners() // Adiciona listeners nas imagens
    open(index) // Abre o modal
    close() // Fecha o modal
    prev() // Imagem anterior
    next() // Próxima imagem
    updateModal() // Atualiza conteúdo do modal
}
```

### Eventos Suportados
- Clique nos cards
- Clique no botão fechar
- Clique fora do modal
- Teclas de atalho
- Botões de navegação

## Exemplo de Uso

1. Acesse qualquer página de galeria
2. Clique em qualquer card de imagem
3. Use as setas ou botões para navegar
4. Pressione ESC ou clique fora para fechar

## Manutenção

### Adicionar Nova Página
Para adicionar o lightbox em uma nova página:

1. Inclua o script:
```html
<script src="../assets/js/lightbox.js"></script>
```

2. Certifique-se de que as imagens estão em cards:
```html
<div class="card">
    <img src="..." class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Descrição</p>
    </div>
</div>
```

### Solução de Problemas

**Problema**: Lightbox não funciona
**Solução**: Verifique se o script está incluído e se há cards com imagens

**Problema**: Navegação não funciona
**Solução**: Verifique se há mais de uma imagem na página

**Problema**: Modal não fecha
**Solução**: Verifique se não há conflitos de CSS z-index

## Versão
- **Versão**: 1.0.0
- **Data**: 2024
- **Autor**: Sistema Igreja Admac 