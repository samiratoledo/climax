# 🌤️ ClimaX

<p>
  <strong>Uma aplicação web moderna para consulta de previsões climáticas em tempo real.</strong>
</p>

<p>
  Interface elegante com efeito <strong>Glassmorphism</strong>, temas dinâmicos e dados meteorológicos completos utilizando a API do OpenWeather.
</p>

---

## ✨ Funcionalidades

- 🔍 **Busca Inteligente**
  - Campo de pesquisa centralizado no carregamento inicial.
  - Transição suave para o topo após a consulta.

- 🔮 **Glassmorphism**
  - Interface moderna com transparência e efeito de vidro fosco.

- 🌡️ **Informações Climáticas**
  - Temperatura atual
  - Temperatura mínima e máxima
  - Sensação térmica
  - Umidade do ar

- 🌅 **Nascer e Pôr do Sol**
  - Conversão automática para o horário local da cidade pesquisada.

- 🧠 **Conselhos Inteligentes**
  - Recomendações baseadas nas condições climáticas.
  - Sugestões como levar casaco ou guarda-chuva.

- 🎨 **Temas Dinâmicos**
  - O plano de fundo muda automaticamente conforme o clima:
    - ☀️ Ensolarado
    - 🌧️ Chuvoso
    - ❄️ Frio

- 🚨 **Alertas Personalizados**
  - Mensagens amigáveis utilizando **SweetAlert2**.

---

## 🚀 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Fetch API**
- **Async/Await**
- **Bulma CSS**
- **SweetAlert2**
- **OpenWeather API**

---

## 📦 Bibliotecas

| Biblioteca | Descrição |
|------------|-----------|
| **Bulma CSS** | Framework CSS baseado em Flexbox para layouts responsivos. |
| **SweetAlert2** | Alertas modernos e personalizados. |
| **OpenWeather API** | API responsável pelos dados meteorológicos. |

---

## 🔐 Configuração da API

Por questões de segurança, **a chave da API do OpenWeather não está incluída neste repositório**.

Caso deseje executar o projeto localmente, siga os passos abaixo.

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
```

Entre na pasta do projeto:

```bash
cd NOME-DO-REPOSITORIO
```

---

### 2️⃣ Crie uma conta no OpenWeather

Acesse:

> https://openweathermap.org/

Crie uma conta gratuita e gere sua **API Key**.

---

### 3️⃣ Crie o arquivo `config.js`

Na raiz do projeto, crie um arquivo chamado:

```text
config.js
```

---

### 4️⃣ Adicione sua chave

Dentro do arquivo, coloque:

```javascript
const apiKey = "SUA_API_KEY_AQUI";
```

---

### 5️⃣ Execute o projeto

Abra o arquivo:

```text
index.html
```

no navegador.

Pronto! 🎉

---

## 🛡️ Segurança

O arquivo `config.js` está listado no `.gitignore`.

Isso significa que sua chave da API **não será enviada para o GitHub**, mantendo seus dados protegidos.

---

## 📂 Estrutura do Projeto

```text
ClimaX/
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── config.js        # Não enviado ao GitHub
├── index.html
├── .gitignore
└── README.md
```

---

## 💡 Destaques

- Interface moderna
- Glassmorphism
- Responsivo
- Temas automáticos
- Consumo de API REST
- Código simples e organizado
- Fácil de personalizar

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo e aprendizado.

Sinta-se à vontade para utilizar como base para seus próprios projetos.
