# 🚂 Guia de Deploy no Railway

Este guia mostra como fazer o deploy automático do AI Tool Finder Quiz no Railway.

## Pré-requisitos

- Conta no [Railway.app](https://railway.app) (gratuita)
- Repositório GitHub conectado: `mediaymonetize-ctrl/ia-quiz`

## Método 1: Deploy Automático via Dashboard (Recomendado)

### Passo 1: Acessar Railway

1. Acesse [railway.app](https://railway.app)
2. Faça login com sua conta GitHub
3. Clique em **"New Project"**

### Passo 2: Conectar Repositório

1. Selecione **"Deploy from GitHub repo"**
2. Procure por `mediaymonetize-ctrl/ia-quiz`
3. Clique em **"Deploy Now"**

### Passo 3: Configuração Automática

O Railway detectará automaticamente:
- ✅ `nixpacks.toml` - Configuração de build
- ✅ `nginx.conf` - Configuração do servidor
- ✅ PHP 8.2 como runtime

**Nenhuma configuração adicional é necessária!**

### Passo 4: Deploy

1. Railway iniciará o build automaticamente
2. Aguarde 2-3 minutos para conclusão
3. Clique em **"Settings"** → **"Generate Domain"**
4. Seu app estará disponível em: `https://ia-quiz-production.up.railway.app`

## Método 2: Deploy via Railway CLI

### Instalação do Railway CLI

```bash
# Via npm
npm install -g @railway/cli

# Via Homebrew (macOS)
brew install railway
```

### Deploy

```bash
# 1. Clonar repositório
git clone https://github.com/mediaymonetize-ctrl/ia-quiz.git
cd ia-quiz

# 2. Login no Railway
railway login

# 3. Inicializar projeto
railway init

# 4. Deploy
railway up

# 5. Abrir no navegador
railway open
```

## Configurações Adicionais

### Variáveis de Ambiente (Opcional)

Se você quiser adicionar variáveis de ambiente:

1. No dashboard do Railway, vá em **"Variables"**
2. Adicione as variáveis necessárias:

```env
# Exemplo para Google Analytics
GA_TRACKING_ID=G-XXXXXXXXXX

# Exemplo para Google ADX
ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXX
```

### Domínio Customizado

1. No dashboard, vá em **"Settings"**
2. Clique em **"Custom Domain"**
3. Adicione seu domínio (ex: `quiz.seusite.com`)
4. Configure o DNS conforme instruções

**Configuração DNS:**
```
Type: CNAME
Name: quiz (ou @)
Value: seu-app.up.railway.app
```

## Monitoramento

### Logs em Tempo Real

```bash
# Via CLI
railway logs

# Via Dashboard
Clique em "View Logs" no projeto
```

### Métricas

No dashboard você pode ver:
- 📊 CPU Usage
- 💾 Memory Usage
- 🌐 Network Traffic
- ⏱️ Response Time

## Troubleshooting

### Build Falhou

**Problema**: Erro durante o build

**Solução**:
1. Verifique se `nixpacks.toml` está correto
2. Confirme que todos os arquivos foram commitados
3. Veja os logs de build para detalhes

### App não carrega

**Problema**: Página em branco ou erro 502

**Solução**:
1. Verifique se a porta está configurada corretamente
2. O nginx deve escutar em `$PORT` (variável do Railway)
3. Veja os logs de runtime

### Arquivos estáticos não carregam

**Problema**: CSS/JS não aparecem

**Solução**:
1. Verifique os caminhos relativos no `index.php`
2. Confirme que `nginx.conf` está servindo arquivos estáticos
3. Limpe o cache do navegador

## Atualizações

### Deploy Automático

Toda vez que você fizer push para a branch `main`, o Railway fará deploy automaticamente:

```bash
git add .
git commit -m "Atualização do quiz"
git push origin main
```

### Deploy Manual

```bash
railway up
```

## Custos

### Plano Gratuito (Hobby)

- ✅ $5 de crédito mensal
- ✅ 500 horas de execução
- ✅ 100GB de tráfego
- ✅ 1GB RAM
- ✅ 1GB Storage

**Suficiente para:**
- ~15.000 visitas/mês
- Projetos pessoais
- Protótipos

### Plano Pago (Developer)

- 💰 $20/mês
- ✅ Recursos ilimitados
- ✅ Domínios customizados ilimitados
- ✅ Suporte prioritário

## Otimizações para Produção

### 1. Habilitar Cache

Adicione no `nginx.conf`:
```nginx
location ~* \.(css|js|jpg|png|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 2. Comprimir Assets

```bash
# Minificar CSS
npx clean-css-cli assets/css/style.css -o assets/css/style.min.css

# Minificar JS
npx terser assets/js/app.js -o assets/js/app.min.js
```

### 3. CDN (Opcional)

Para melhor performance global:
1. Use Cloudflare como proxy
2. Configure cache rules
3. Habilite Auto Minify

## Backup

### Backup Automático

O Railway faz backup automático do código via GitHub.

### Backup Manual

```bash
# Clonar repositório
git clone https://github.com/mediaymonetize-ctrl/ia-quiz.git

# Ou baixar ZIP
wget https://github.com/mediaymonetize-ctrl/ia-quiz/archive/refs/heads/main.zip
```

## Suporte

- 📚 [Documentação Railway](https://docs.railway.app)
- 💬 [Discord Railway](https://discord.gg/railway)
- 🐛 [Issues GitHub](https://github.com/mediaymonetize-ctrl/ia-quiz/issues)

---

## Checklist de Deploy ✅

- [ ] Repositório GitHub conectado
- [ ] Projeto criado no Railway
- [ ] Build concluído com sucesso
- [ ] Domínio gerado/configurado
- [ ] Site acessível e funcionando
- [ ] Testes em mobile/desktop
- [ ] Google ADX configurado (opcional)
- [ ] Analytics configurado (opcional)
- [ ] Monitoramento ativo

**Pronto! Seu quiz está no ar! 🎉**
