# ZeroConta - Micro-SaaS de Gestão Comercial

![ZeroConta Logo](https://via.placeholder.com/150x50?text=ZeroConta)

Solução completa para gestão de cobranças, cadastro de clientes e controle comercial com integração a múltiplas plataformas.

## ✨ Funcionalidades Principais

- **Cadastro Inteligente** de usuários (5 perfis diferentes)
- **Sistema de Cobrança** automatizado
- **Controle de Estoque** integrado
- **Notificações** via WhatsApp, SMS, E-mail
- **Leitura** de QR Code e código de barras
- **Reconhecimento Facial** para cadastro rápido
- **Integração** com Make, Google Sheets, GitHub e Vercel

## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Make (Webhooks)
- **Armazenamento**: Google Planilhas
- **Automação**: Make (Integromat)
- **Hospedagem**: Vercel
- **Controle de Versão**: GitHub

## 🔗 Fluxo de Integração

1. **Formulário HTML** coleta dados do usuário
2. **JavaScript** valida e envia via POST para Webhook
3. **Make** recebe os dados e processa
4. **Google Sheets** armazena as informações
5. **Notificações** são disparadas conforme configuração

## 📌 Campos por Tipo de Usuário

| Campo               | Autônomo | Peq. Porte | Médio Porte | Grande Porte | Cliente |
|---------------------|----------|------------|-------------|--------------|---------|
| Nome               | ✅       | ✅         | ✅          | ✅           | ✅      |
| CPF                | ✅       | ✅         | ✅          | ✅           | ✅      |
| WhatsApp           | ✅       |            | ✅          | ✅           | ✅      |
| Endereço           | ✅       | ✅         | ✅          |              | ✅      |
| MEI                |          | ✅         |             |              |         |
| CNPJ               |          |            | ✅          | ✅           |         |
| E-mail             |          |            | ✅          | ✅           |         |
| CNH                |          |            |             | ✅           |         |
| End. Comercial     |          |            |             | ✅           |         |
| End. Residencial   |          |            |             | ✅           |         |
| Nome do Pai        |          |            |             |              | ✅      |
| Nome da Mãe        |          |            |             |              | ✅      |
| WhatsApp Secundário|          |            |             |              | ✅      |

## 🚀 Como Implementar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/zeroconta.git
