# Sistema Administrativo - Igreja Admac

## Banco de Dados Temporário

Este sistema utiliza um banco de dados temporário implementado em JavaScript para gerenciar autenticação e recuperação de senha.

### Credenciais Padrão

- **Email:** admacdf@gmail.com
- **Senha:** admac2024

### Funcionalidades Implementadas

#### 1. Autenticação
- Login com email e senha
- Validação de credenciais
- Armazenamento de sessão no localStorage
- Redirecionamento automático para dashboard após login

#### 2. Recuperação de Senha
- Link "Esqueceu a senha?" na página de login
- Modal para inserir email
- Geração de token único de recuperação
- Validação de token com expiração (1 hora)
- Redefinição de senha com confirmação

#### 3. Segurança
- Tokens de recuperação com expiração automática
- Limpeza automática de tokens expirados
- Validação de força da senha (mínimo 6 caracteres)
- Confirmação de senha na redefinição

### Estrutura de Arquivos

```
admin/
├── login.html          # Página de login com recuperação de senha
├── dashboard.html      # Painel administrativo
├── js/
│   ├── database.js     # Banco de dados temporário
│   └── admin.js        # Funções do painel administrativo
└── README.md          # Esta documentação
```

### Como Usar

1. **Login:**
   - Acesse `admin/login.html`
   - As credenciais já estão preenchidas automaticamente
   - Clique em "Entrar"

2. **Recuperação de Senha:**
   - Na página de login, clique em "Esqueceu a senha?"
   - Digite o email (admacdf@gmail.com)
   - Clique em "Enviar"
   - Copie o token gerado
   - Digite a nova senha e confirme
   - Clique em "Redefinir Senha"

3. **Dashboard:**
   - Após login, você será redirecionado para o dashboard
   - Use o menu lateral para navegar entre as seções
   - Clique em "Sair" para fazer logout

### Banco de Dados Temporário

O arquivo `js/database.js` contém:

- **adminUsers:** Array com dados dos usuários administradores
- **passwordResetTokens:** Array com tokens de recuperação de senha
- **authenticateUser():** Função para autenticar usuários
- **generatePasswordResetToken():** Função para gerar tokens de recuperação
- **validatePasswordResetToken():** Função para validar tokens
- **resetPassword():** Função para redefinir senhas
- **cleanupExpiredTokens():** Função para limpar tokens expirados

### Observações Importantes

⚠️ **Este é um sistema temporário para desenvolvimento e testes.**

- Os dados são armazenados apenas na memória do navegador
- Não há persistência de dados entre sessões
- Em produção, deve ser implementado um backend real com banco de dados
- As senhas devem ser criptografadas
- Os tokens devem ser enviados por email real

### Próximos Passos

Para implementar em produção:

1. Criar backend com Node.js/Express ou PHP
2. Implementar banco de dados real (MySQL, PostgreSQL, etc.)
3. Adicionar criptografia de senhas (bcrypt)
4. Implementar envio de emails reais
5. Adicionar autenticação JWT
6. Implementar logs de auditoria
7. Adicionar validações mais robustas

### Tecnologias Utilizadas

- HTML5
- CSS3 (Bootstrap 5)
- JavaScript (ES6+)
- Font Awesome (ícones)
- LocalStorage (sessão temporária) 