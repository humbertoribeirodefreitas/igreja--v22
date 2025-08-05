// Banco de Dados Temporário - Sistema Administrativo Igreja Admac

// Dados de usuários administradores
const adminUsers = [
    {
        id: 1,
        username: 'admacdf@gmail.com',
        password: 'admac2024',
        name: 'Administrador ADMAC',
        email: 'admacdf@gmail.com',
        role: 'admin',
        createdAt: new Date('2024-01-01'),
        lastLogin: null,
        passwordResetToken: null,
        passwordResetExpires: null
    }
];

// Dados de tokens de recuperação de senha
const passwordResetTokens = [];

// Função para autenticar usuário
function authenticateUser(username, password) {
    const user = adminUsers.find(u => u.username === username);
    
    if (user && user.password === password) {
        // Atualizar último login
        user.lastLogin = new Date();
        return {
            success: true,
            user: {
                id: user.id,
                username: user.username,
                name: user.name,
                email: user.email,
                role: user.role
            }
        };
    }
    
    return {
        success: false,
        message: 'Usuário ou senha incorretos!'
    };
}

// Função para gerar token de recuperação de senha
function generatePasswordResetToken(email) {
    const user = adminUsers.find(u => u.email === email);
    
    if (!user) {
        return {
            success: false,
            message: 'Email não encontrado no sistema!'
        };
    }
    
    // Gerar token único
    const token = Math.random().toString(36).substring(2, 15) + 
                  Math.random().toString(36).substring(2, 15);
    
    // Definir expiração (1 hora)
    const expires = new Date(Date.now() + 60 * 60 * 1000);
    
    // Salvar token
    const resetToken = {
        id: Date.now(),
        userId: user.id,
        token: token,
        expires: expires,
        used: false
    };
    
    passwordResetTokens.push(resetToken);
    
    // Atualizar usuário
    user.passwordResetToken = token;
    user.passwordResetExpires = expires;
    
    return {
        success: true,
        token: token,
        message: 'Token de recuperação gerado com sucesso!'
    };
}

// Função para validar token de recuperação
function validatePasswordResetToken(token) {
    const resetToken = passwordResetTokens.find(t => t.token === token && !t.used);
    
    if (!resetToken) {
        return {
            success: false,
            message: 'Token inválido ou expirado!'
        };
    }
    
    // Verificar se não expirou
    if (new Date() > resetToken.expires) {
        return {
            success: false,
            message: 'Token expirado!'
        };
    }
    
    return {
        success: true,
        userId: resetToken.userId
    };
}

// Função para redefinir senha
function resetPassword(token, newPassword) {
    const validation = validatePasswordResetToken(token);
    
    if (!validation.success) {
        return validation;
    }
    
    const user = adminUsers.find(u => u.id === validation.userId);
    const resetToken = passwordResetTokens.find(t => t.token === token);
    
    if (user && resetToken) {
        // Atualizar senha
        user.password = newPassword;
        user.passwordResetToken = null;
        user.passwordResetExpires = null;
        
        // Marcar token como usado
        resetToken.used = true;
        
        return {
            success: true,
            message: 'Senha redefinida com sucesso!'
        };
    }
    
    return {
        success: false,
        message: 'Erro ao redefinir senha!'
    };
}

// Função para limpar tokens expirados
function cleanupExpiredTokens() {
    const now = new Date();
    
    // Remover tokens expirados
    const expiredTokens = passwordResetTokens.filter(t => now > t.expires);
    expiredTokens.forEach(token => {
        const index = passwordResetTokens.indexOf(token);
        if (index > -1) {
            passwordResetTokens.splice(index, 1);
        }
    });
    
    // Limpar tokens expirados dos usuários
    adminUsers.forEach(user => {
        if (user.passwordResetExpires && now > user.passwordResetExpires) {
            user.passwordResetToken = null;
            user.passwordResetExpires = null;
        }
    });
}

// Executar limpeza de tokens expirados a cada hora
setInterval(cleanupExpiredTokens, 60 * 60 * 1000);

// Exportar funções para uso global
window.databaseFunctions = {
    authenticateUser,
    generatePasswordResetToken,
    validatePasswordResetToken,
    resetPassword,
    cleanupExpiredTokens
}; 