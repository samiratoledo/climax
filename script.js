const apiKey = SUA_CHAVE_AQUI";

const corpoTela = document.getElementById("tela-toda");
const containerResultado = document.getElementById("container-resultado");
const blocoBusca = document.getElementById("bloco-busca");

const botao = document.getElementById("botao-busca");
const input = document.getElementById("campo-cidade");

// Elementos da interface
const lugar = document.getElementById("lugar");
const temperatura = document.getElementById("temperatura");
const tempMin = document.getElementById("temp-min");
const tempMax = document.getElementById("temp-max");
const sensacao = document.getElementById("sensacao");
const umidade = document.getElementById("umidade");
const nascer = document.getElementById("nascer");
const porSol = document.getElementById("por-sol");

const conselhoChuva = document.getElementById("conselho-chuva");
const conselhoCasaco = document.getElementById("conselho-casaco");

botao.addEventListener("click", async () => {
  const nomeCidade = input.value;

  // 1. VALIDAÇÃO: CAMPO VAZIO
  if (nomeCidade.trim() === "") {
    Swal.fire({
      title: 'Ops!',
      text: 'Por favor, digite o nome de uma cidade.',
      icon: 'warning',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#3085d6',
      background: '#1a1f26',
      color: '#fff'
    });
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${nomeCidade}&units=metric&appid=${apiKey}&lang=pt_br`;
  const resposta = await fetch(url);
  const dados = await resposta.json();

  // 2. VALIDAÇÃO: CIDADE NÃO ENCONTRADA
  if (dados.cod === "404" || dados.cod === 404) {
    Swal.fire({
      title: 'Cidade não encontrada',
      text: 'Por favor, verifique se a grafia está correta.',
      icon: 'error',
      confirmButtonText: 'Tentar novamente',
      confirmButtonColor: '#3085d6',
      background: '#1a1f26',
      color: '#fff'
    });
    return;
  }

  console.log(dados);

  // Conversão de timestamps para horários legíveis (HH:MM)
  const horarioNascer = new Date(dados.sys.sunrise * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  const horarioPorSol = new Date(dados.sys.sunset * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  // Distribuição dos dados climáticos
  temperatura.innerHTML = Math.round(dados.main.temp) + "°C";
  lugar.innerHTML = dados.name + ", " + dados.sys.country;
  
  tempMin.innerHTML = Math.round(dados.main.temp_min) + "°C";
  tempMax.innerHTML = Math.round(dados.main.temp_max) + "°C";
  
  sensacao.innerHTML = Math.round(dados.main.feels_like) + "°C";
  umidade.innerHTML = dados.main.humidity + "%";
  
  nascer.innerHTML = horarioNascer;
  porSol.innerHTML = horarioPorSol;

  const tempAtual = dados.main.temp;

  // Lógica dos conselhos do casaco
  if (tempAtual < 15) {
    conselhoCasaco.innerHTML = "❄️ Está muito frio! Leve um casaco pesado.";
  } else if (tempAtual >= 15 && tempAtual < 22) {
    conselhoCasaco.innerHTML = "🍃 Está fresco. Um casaco leve ou jaqueta deve bastar.";
  } else {
    conselhoCasaco.innerHTML = "☀️ Está calor! Não precisa de casaco.";
  }

  // Lógica dos conselhos do guarda-chuva
  const condicaoTexto = dados.weather[0].description.toLowerCase();

  if (
    condicaoTexto.includes("chuva") ||
    condicaoTexto.includes("chuvisco") ||
    condicaoTexto.includes("temporal")
  ) {
    conselhoChuva.innerHTML = "☔ Está chovendo! Não se esqueça do guarda-chuva.";
  } else {
    conselhoChuva.innerHTML = "☁️ Céu sem chuva por enquanto. Pode deixar o guarda-chuva em casa.";
  }

  // Troca de cor do fundo do app
  corpoTela.className = ""; 

  if (condicaoTexto.includes("chuva") || condicaoTexto.includes("chuvisco") || condicaoTexto.includes("temporal")) {
    corpoTela.classList.add("fundo-chuva");
  } else if (tempAtual < 15) {
    corpoTela.classList.add("fundo-frio");
  } else if (tempAtual >= 25) {
    corpoTela.classList.add("fundo-calor");
  } else {
    corpoTela.classList.add("fundo-padrao");
  }

  // GATILHOS DE ANIMAÇÃO E VISIBILIDADE:
  blocoBusca.classList.add("no-topo"); // Move a busca pro topo
  containerResultado.classList.remove("escondido"); // Faz aparecer as caixas glass
});
