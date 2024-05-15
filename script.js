var preco = [];
var dic = [];
var vlr_final = [];
var x = [];
var total = {};
var regiao_escolhida = [];
var res = document.getElementById("res");
var escolha = document.getElementById("ocutar");
var dados_cliente = document.getElementById("login");
var welcome = document.getElementById("welcome");
var select_marmita = document.getElementById("meu_select_marmita").value;
var select_adicao = document.getElementById("meu_select_adicao");
var adicionais = document.getElementById("adicionais");
var limite = 0;
var checkboxes = document.querySelectorAll(".checkbox");
var regiao = document.querySelectorAll(".regiao");
var btn_valores = document.getElementById("btn_valores");
var btn_final = document.getElementById("btn_valores");
var final = document.getElementById("final");
var valores = [];
var compra = [];
var resnome = document.getElementById("resnome");
var resendereco = document.getElementById("resendereco");
var resncasa = document.getElementById("resncasa");
var resfone = document.getElementById("resfone");
var respreco = document.getElementById("respreco");
var btn_comprar_mais = document.getElementById("btncomprarmais");
var esconde_comprar_mais = document.getElementById("esconde_comprar_mais");
var imprimir = document.getElementById("imprimir");
var btn_compra_add = document.getElementById("btn_compra_add");
var btn_negar_compra_add = document.getElementById("btn_negar_compra_add");
var adicao = document.getElementById("adicao");
var resadicao = document.getElementById("resadicao");
var respd = document.getElementById("respd");
var dataAtual = new Date();
var msgcadastro = document.getElementById("msgcadastro");
var cabecalho = document.querySelector(".cabecalho");
var clearr = document.getElementById("limpar");
var montar = document.getElementById("montar");
var btn_regiao = document.getElementById("btn_regiao");
var escolha_regiao = document.getElementById("escolha_regiao");
var regiao_mensagem = document.getElementById("regiao_mensagem");
var res_regiao = document.getElementById("resregiao");
var taxa = document.getElementById("taxa");
var resads = document.getElementById("resads");
var carrinhoCompras = document.getElementById("carrinho");
const listaCarrinho = document.getElementById("lista_carrinho");
const adicionais_carrinho = document.getElementById("adicionais_carrinho");
var esconde_carrinho = document.getElementById("esconde_carrinho");
var esconde_finalizar_carrinho = document.getElementById(
  "esconde_finalizar_carrinho"
);
const adiciona = { vlr: 0, obs: "Sem adicionais" };
sessionStorage.setItem("adiciona", JSON.stringify(adiciona));
var total_Compra = 0;
var numeroDoPedido = ''
var whats_colher = ''


/*--------- inicio das funçoes -----*/

/*--------- Atualizar a hora -----*/
horadia();
setInterval(horadia, 1000);
dataDia();

/*----------pegar dados do cliente---------*/
var btn_enviar_dados = document.getElementById("enviar_dados");
btn_enviar_dados.addEventListener("click", function (e) {
  e.preventDefault();
  var nome = document.getElementById("nome").value;
  var n = nome.toUpperCase();
  var endereco = document.getElementById("endereco").value;
  var ncasa = document.getElementById("ncasa").value;
  var fone = document.getElementById("fone").value;
  const person = {
    name: n,
    endereco: endereco,
    ncasa: ncasa,
    telefone: fone,
  };
  localStorage.setItem("person", JSON.stringify(person));
  escolha_regiao.style.display = "block";
  checkUser();
  location.reload();
});
/*
function formatarTelefone(){
  var telefone = document.getElementById("fone")
  var numero = telefone.value.replace(/\D/g,'')
  var formatoTelefone = ''
  if (numero.length >=2){
    formatoTelefone = '(' + numero.substring(0, 2) + ')'
  }
  if (numero.length > 2 && numero.length < 7){
    formatoTelefone += ' ' + numero.substring(2, 7)
  }
  else if (numero.length > 7){
    formatoTelefone += ' ' +numero.substring(2, 7) + '-' + numero.substring(7,11)
  }
  telefone.value = formatoTelefone
}*/

function checkUser() {
  const getPerson = localStorage.getItem("person");
  const objecPerson = JSON.parse(getPerson);
  const username = objecPerson.name;
  dic.push(username);
  const userendereco = objecPerson.endereco;
  dic.push(userendereco);
  const userncasa = objecPerson.ncasa;
  dic.push(userncasa);
  const usertelefone = objecPerson.telefone;
  dic.push(usertelefone);
  const userRegiao = objecPerson.regiao;
  dic.push(userRegiao);

  if (username) {
    var nome_cliente = document.getElementById("nome_cliente");
    msgcadastro.style.display = "none";
    formulario.style.display = "none";
    welcome.style.display = "block";
    nome_cliente.innerHTML = username + " \u{1F609}";
    clearr.style.display = "block";
  } else {
    msgcadastro.style.display = "block";
    formulario.style.display = "block";
    welcome.style.display = "none";
  }
}

function checkRegiao() {
  const getPerson = localStorage.getItem("person");
  const objecPerson = JSON.parse(getPerson);
  const userRegiao = objecPerson.regiao;
  if (userRegiao) {
    escolha_regiao.style.display = "none";
    escolha.style.display = "block";
  } else {
    escolha_regiao.style.display = "block";
  }
  calcTaxa();
}

var limpar = document.getElementById("limpar");
limpar.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
  checkUser();
});

checkUser();
checkRegiao();

/*--------- Escolha do copo -----*/

var btn_copo = document.getElementById("btn_copo");
btn_copo.addEventListener("click", function (e) {
  e.preventDefault();
  var meu_select_copo = document.getElementById("meu_select_copo").value;
  if (meu_select_copo === "300ml") {
    const pedido = { acai: "Copo de 300ml", limit: 4, valor: 13 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    
  } else if (meu_select_copo === "400ml") {
    const pedido = { acai: "Copo de 400ml", limit: 5, valor: 16 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    
  } else if (meu_select_copo === "500ml") {
    const pedido = { acai: "Copo de 500ml", limit: 5, valor: 18 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    
  } else if (meu_select_copo === "700ml") {
    const pedido = { acai: "Copo de 700ml", limit: 5, valor: 28 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    
  }
  escolha.style.display = "none";
  adicionais.style.display = "block";
  const getPedido = sessionStorage.getItem("pedido");
  const objectPedido = JSON.parse(getPedido);
  const userPedido = objectPedido.limit;
  limite = userPedido;
  resadicao.innerHTML = dic[0]+" Escolha " + limite + " adiconais para seu açai";
});

/*--------- escolha marmita -----*/

var btn_marmita = document.getElementById("btn_marmita");
btn_marmita.addEventListener("click", function (e) {
  e.preventDefault();
  var meu_marmita = document.querySelector(".select_marmita").value;
  if (meu_marmita === "500ml") {
    const pedido = { acai: "Marmita de 500ml", limit: 5, valor: 20 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    
  } else if (meu_marmita === "750ml") {
    const pedido = { acai: "Marmita de 750ml", limit: 5, valor: 30 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    
  } else if (meu_marmita === "1200ml") {
    const pedido = { acai: "Marmita de 1200ml", limit: 6, valor: 40 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    
  }
  escolha.style.display = "none";
  adicionais.style.display = "block";
  const getPedido = sessionStorage.getItem("pedido");
  const objectPedido = JSON.parse(getPedido);
  const userPedido = objectPedido.limit;
  limite = userPedido;
  resadicao.innerHTML = dic[0]+", Escolha " + limite + " adiconais para seu açai";
});

/* -----função para exibir os copos por abas------ */

function exibirCopos() {
  var imagem_copo = document.getElementById("imagem_copo");
  var meu_copo = document.querySelector(".select_copo").value;
  imagem_copo.innerHTML = "";
  if (meu_copo === "300ml") {
    var imagem_copo_300ml = document.createElement("img");
    imagem_copo_300ml.src = "imagens/copo300ml.jpg";
    imagem_copo.appendChild(imagem_copo_300ml);
  } else if (meu_copo === "400ml") {
    var imagem_copo_400ml = document.createElement("img");
    imagem_copo_400ml.src = "imagens/copo400ml.jpg";
    imagem_copo.appendChild(imagem_copo_400ml);
  } else if (meu_copo === "500ml") {
    var imagem_copo_500ml = document.createElement("img");
    imagem_copo_500ml.src = "imagens/copo500ml.jpg";
    imagem_copo.appendChild(imagem_copo_500ml);
  } else if (meu_copo === "700ml") {
    var imagem_copo_700ml = document.createElement("img");
    imagem_copo_700ml.src = "imagens/copo700ml.jpg";
    imagem_copo.appendChild(imagem_copo_700ml);
  }
}

/* -----função para exibir as marmitas por abas------ */

function exibirMarmitas() {
  var imagem_marmita = document.getElementById("imagem_marmita");
  var meu_marmita = document.querySelector(".select_marmita").value;
  imagem_marmita.innerHTML = "";
  if (meu_marmita === "500ml") {
    var imagem_marmita_500ml = document.createElement("img");
    imagem_marmita_500ml.src = "imagens/marmita500ml.jpg";
    imagem_marmita.appendChild(imagem_marmita_500ml);
  } else if (meu_marmita === "750ml") {
    var imagem_marmita_750ml = document.createElement("img");
    imagem_marmita_750ml.src = "imagens/marmita750ml.jpg";
    imagem_marmita.appendChild(imagem_marmita_750ml);
  } else if (meu_marmita === "1200ml") {
    var imagem_marmita_1200ml = document.createElement("img");
    imagem_marmita_1200ml.src = "imagens/marmita1200ml.jpg";
    imagem_marmita.appendChild(imagem_marmita_1200ml);
  }
}
/*-----------compra de adicionais----------------- */
var tadd = 0;
var ad = 0;
var custo = 3;
msg = "";

btn_compra_add.addEventListener("click", function () {
  ad = ad + 1;
  tadd = custo * ad;
  const getPedido = sessionStorage.getItem("pedido");
  const objectPedido = JSON.parse(getPedido);
  const userPedido = objectPedido.limit;
  limite = limite + 1;
  msg = " Com mais " + ad + " adicional no valor de R$" + tadd + " Reais";
  const adiciona = { vlr: 0, obs: msg };
  sessionStorage.setItem("adiciona", JSON.stringify(adiciona));
  valorCompra.push(3);

  alert("Sucesso!! foram adicionados + 1 \u{1F60A}");
  resadicao.innerHTML = dic[0]+", Escolha " + limite + " adiconais para seu açai";
  adicao.style.display = "none";
  adicionais.style.display = "block";
});

btn_negar_compra_add.addEventListener("click", function () {
  const getPedido = sessionStorage.getItem("pedido");
  const objectPedido = JSON.parse(getPedido);
  const userPedido = objectPedido.limit;
  limite = userPedido;

  const getAdciona = sessionStorage.getItem("adiciona");
  const objectAdciona = JSON.parse(getAdciona);
  const userVlr = objectAdciona.vlr;
  const userObs = objectAdciona.obs;
  const adiciona = { vlr: userVlr, obs: userObs };
  sessionStorage.setItem("adiciona", JSON.stringify(adiciona));
  resadicao.innerHTML =
    dic[0] + " Voce tem " + limite + " adiconais para seu açai";
  adicao.style.display = "none";
  adicionais.style.display = "block";
});
/*--------- Escolha dos adicionais -----*/
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    var selecionados = document.querySelectorAll(".checkbox:checked");
    if (selecionados.length > limite) {
      this.checked = false;
      alert("Desculpe Ja foram escolhidos " + limite + " adiconais");
      adicao.style.display = "block";
    }
  });
});
/*-------REMOVER SELEÇÃO DOS CHECKBOXES----- */
function removeTicks() {
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
}
/*-----limpar area da sujestão------- */
function limpaSujestao(){
  var campo = document.getElementById('campo').value = '';
}



/*------escolha das regioes------------- */
regiao.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    var regiao_selecionados = document.querySelectorAll(".regiao:checked");
    if (regiao_selecionados.length > 1) {
      this.checked = false;
      alert("Ops, So pode escolher uma Região!!");
    }
  });
});

btn_regiao.addEventListener("click", function () {
  var taruma = document.getElementById("taruma");
  var america = document.getElementById("america");
  var bonita = document.getElementById("bonita");
  var pioneiro = document.getElementById("pioneiro");
  var chico = document.getElementById("chico");

  if (!taruma && !america && !bonita && !pioneiro && !chico) {
    regiao_mensagem.style.display = "block";
  } else {
    regiao.forEach(function (checkbox) {
      if (checkbox.checked) {
        var personRegiao = JSON.parse(localStorage.getItem("person"));
        personRegiao.regiao = checkbox.value;
        localStorage.setItem("person", JSON.stringify(personRegiao));
        dic.push(checkbox.value);
        if (dic[4] === "Tarumã") {
          escolha_regiao.style.display = "none";
          escolha.style.display = "block";
        } else if (dic[4] === "Usina Nova America") {
          escolha_regiao.style.display = "none";
          escolha.style.display = "block";
        } else if (dic[4] === "Usina Agua Bonita") {
          escolha_regiao.style.display = "none";
          escolha.style.display = "block";
        } else if (dic[4] === "Posto Pioneiro") {
          escolha_regiao.style.display = "none";
          escolha.style.display = "block";
        } else if (dic[4] === "Retirar no Tio-Chico") {
          escolha_regiao.style.display = "none";
          escolha.style.display = "block";
        }
      }
    });
  }
  location.reload();
});
function calcTaxa() {
  if (dic[4] === "Tarumã") {
    dic.push(2);
  } else if (dic[4] === "Usina Nova America") {
    dic.push(10);
  } else if (dic[4] === "Usina Agua Bonita") {
    dic.push(5);
  } else if (dic[4] === "Posto Pioneiro") {
    dic.push(5);
  } else if (dic[4] === "Retirar no Tio-Chico") {
    dic.push(0);
  }
}

/*--------- finalizaçao e exibiçao do pedido -----*/

btn_valores.addEventListener("click", function () {
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      valores.push(checkbox.value);
    }
    mensagem.style.display = "block";
    adicionais.style.display = "none";
    adicao.style.display = "none";
  });
});

function mostrarDados() {
  /* const getTotal = sessionStorage.getItem("total");
  const objectTotal = JSON.parse(getTotal);
  const userTotal = objectTotal.total;*/

  const getPedido = sessionStorage.getItem("pedido");
  const objectPedido = JSON.parse(getPedido);
  const userPedido = objectPedido.limit;
  const userAcai = objectPedido.acai;
  const userValor = objectPedido.valor;

  const getAdciona = sessionStorage.getItem("adiciona");
  const objectAdciona = JSON.parse(getAdciona);
  const userVlr = objectAdciona.vlr;
  const userObs = objectAdciona.obs;

  var t = somarArray(valorCompra);

  if (t < 20 && dic[4] === "Tarumã") {
    taxa.innerHTML = "Taxa de entrega R$" + dic[5] + ",00";
    t = t + dic[5];
  } else if (t < 150 && dic[4] === "Usina Nova America") {
    taxa.innerHTML = "Taxa de entrega R$" + dic[5] + ",00";
    t = t + dic[5];
  } else if (t < 50 && dic[4] === "Usina Agua Bonita") {
    taxa.innerHTML = "Taxa de entrega R$" + dic[5] + ",00";
    t = t + dic[5];
  } else if (t < 50 && dic[4] === "Posto Pioneiro") {
    taxa.innerHTML = "Taxa de entrega R$" + dic[5] + ",00";
    t = t + dic[5];
  } else {
    taxa.innerHTML = "Taxa de entrega isento";
  }
  resnome.innerHTML = "Cliente: " + dic[0];
  resendereco.innerHTML = "Endereço: " + dic[1] + "," + dic[2];
  resfone.innerHTML = "Telefone: " + dic[3];
  respreco.innerHTML = "Valor total R$" + t + ",00 Reais";
  valor_pagamento.innerHTML = 'VALOR DO PEDIDO - R$'+t+',00'
  res_regiao.innerHTML = "Região de entrega: " + dic[4];
}

imprimir.addEventListener("click", function () {
  window.print();
});

/* -------------- Funções das abas para mostrar as imagens -------*/
function openCategory(evt, categoryName) {
  const category = document.querySelectorAll(".category");
  category.forEach((category) => {
    category.style.display = "none";
  });
  const tabs = document.querySelectorAll("tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  document.getElementById(categoryName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

/*-----------pegar hora--------------*/
function horadia() {
  var hora = dataAtual.getHours();
  var minutos = dataAtual.getMinutes();
  var segundos = dataAtual.getSeconds();
  var hdia = document.getElementById("hdia");
  var diaSemana = dataAtual.getDay();
  var reshora = document.getElementById("reshora");
  var reshora2 = document.getElementById("reshora2");

  if (hora < 10) hora = "0" + hora;
  if (minutos < 10) minutos = "0" + minutos;
  if (segundos < 10) segundos = "0" + segundos;
  var faltahoras = 14 - hora;
  if (faltahoras < 10) faltahoras = "0" + faltahoras;
  var faltaminutos = 60 - minutos;
  if (faltaminutos < 10) faltaminutos = "0" + faltaminutos;

  if (diaSemana == 1) {
    reshora.style.color = "red";
    reshora.innerHTML = "Fechado";
    reshora2.innerHTML = "Abriremos amanhã as 14hs. - ";
   /* ocutar.style.display = 'none' */
  } else {
    if (hora < 14) {
      reshora.style.color = "red";
      reshora.innerHTML = "Fechado";
     /* ocutar.style.display = 'none'   */ 
    } else if (hora > 23) {
      reshora.style.color = "red";
      reshora.innerHTML = "Fechado:";
     /* ocutar.style.display = 'none' */
    } else {
      reshora.innerHTML = "Aberto:";
      reshora2.innerHTML = "Deus Abençoe";
      /*ocutar.style.display = 'block' */
    }
    hdia.innerHTML = hora + ":" + minutos + ' - ';
  }
}

/* funcão para informar data */

function dataDia() {
  var resdia = document.getElementById("resdia");
  var resdia2 = document.getElementById("resdia2");
  var dia = dataAtual.getDate();
  var mes = dataAtual.getMonth() + 1;
  var ano = dataAtual.getFullYear();
  var diaSemana = dataAtual.getDay();
  const diaDaSemana = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sabado",
  ];
  var hoje = dia + "/" + mes + "/" + ano;

  resdia.innerHTML = diaDaSemana[diaSemana];
  resdia2.innerHTML = hoje;
}

/*----Sujestão do cliente*/
function atualizarContagem() {
  var campo = document.getElementById("campo");

  var contador = document.getElementById("contador");
  var comprimento = campo.value.length;
  var letras = 31;

  contador.textContent = comprimento + "/" + letras + "caracteres";

  if (comprimento > letras) {
    contador.style.color = "red";
  } else {
    contador.style.color = "";
  }
}
document.getElementById("campo").addEventListener("input", atualizarContagem);

var mensagem = document.getElementById("mensagem");
var btn_sujestao = document.getElementById("btn_sujestao");

btn_sujestao.addEventListener("click", function (e) {
  e.preventDefault();
  var clienteDigitou = document.getElementById("campo").value;
  if (clienteDigitou == "") {
    var digitou = { textoDigitado: "Sem Sujestão de montagem" };
    sessionStorage.setItem("digitou", JSON.stringify(digitou));
  } else {
    var digitou = { textoDigitado: clienteDigitou };
    sessionStorage.setItem("digitou", JSON.stringify(digitou));
  }
  esconde_carrinho.style.display = "block";
  mensagem.style.display = "none";
});
/*-------------------------Adicionar ao carrinho--------------------------------------------- */
/* nome  - regiao - obs - pedido - adicionais - valor total */
let carrinho = [];
let valorCompra = [];

function adicionarCarrinho() {
  const getPedido = sessionStorage.getItem("pedido");
  const objectPedido = JSON.parse(getPedido);
  const userPedido = objectPedido.limit;
  const userAcai = objectPedido.acai;
  const userValor = objectPedido.valor;

  const getAdciona = sessionStorage.getItem("adiciona");
  const objectAdciona = JSON.parse(getAdciona);
  const userVlr = objectAdciona.vlr;
  const userObs = objectAdciona.obs;
  var totalCompra = userVlr + userValor;

  const getDigitou = sessionStorage.getItem("digitou");
  const objectDigitou = JSON.parse(getDigitou);
  const userDigitou = objectDigitou.textoDigitado;

  const adCarrinho = [userAcai, userDigitou, valores];
  valorCompra.push(totalCompra);
  carrinho.push(adCarrinho);

  atualizarCarrinho();
  mostrarValorNaTela();
  
}
function atualizarCarrinho() {
  valores = [];
  esconde_comprar_mais.style.display = "block";
  esconde_finalizar_carrinho.style.display = "block";
  esconde_carrinho.style.display = "none";
  contarCarrinho();
}
var btn_finalizar_carrinho = document.getElementById("finalizar_carrinho");
btn_finalizar_carrinho.addEventListener("click", function () {
  mostrarDados();
  criarListaArrays(carrinho);
  var numeroDoPedido = gerarNumeroPedido()
  npedido.innerHTML = 'Numero do Pedido: '+ numeroDoPedido


  info.style.display = 'block'
  esconde_comprar_mais.style.display = "none";
  esconde_finalizar_carrinho.style.display = "none";
  carrinhoCompras.style.display = "block";
  escolha.style.display = "none";
  console.log(carrinho.length);
});

btn_comprar_mais.addEventListener("click", function () {
  removeTicks();
  limpaSujestao()
  escolha.style.display = "block";
  esconde_comprar_mais.style.display = "none";
  esconde_finalizar_carrinho.style.display = "none";
});

function criarListaArrays(arrays) {
  const ul = document.createElement("ul");

  arrays.forEach((subArray) => {
    const li = document.createElement("li");
    const subul = document.createElement("ul");

    subArray.forEach((elemento) => {
      const subli = document.createElement("li");

      if (Array.isArray(elemento)) {
        const subsubul = document.createElement("ul");
        elemento.forEach((subElemento) => {
          const subsubli = document.createElement("li");
          subsubli.textContent = subElemento;
          subsubul.appendChild(subsubli);
        });
        subli.appendChild(subsubul);
      } else {
        subli.textContent = elemento;
      }
      subul.appendChild(subli);
    });
    li.appendChild(subul);
    ul.appendChild(li);
  });
  carrinhoCompras.appendChild(ul);
}
function somarArray(array) {
  let soma = 0;
  array.forEach((e) => {
    soma += e;
  });
  return soma;
}

function contarCarrinho() {
  var contCarrinho = document.getElementById("contCarrinho");
  contCarrinho.innerHTML = carrinho.length;
}
document.addEventListener("DOMContentLoaded", function () {
  contarCarrinho();
});

/*---BOTAO HOME-PAGE---*/
var btn_home = document.getElementById("home_page");
btn_home.addEventListener("click", function () {
  location.reload();
});

/*-----COPIAR CNPJ------ */
var btn_copiar_cnpj = document.getElementById("copiar_chave");
btn_copiar_cnpj.addEventListener("click", function () {
  const cnpj = document.getElementById("cnpj").innerText;
  navigator.clipboard.writeText(cnpj).then(
    function () {
      alert("Pix copiado para a area de transferencia");
    },
    function (err) {
      alert("Erro ao copiar texto para a area de transferencia");
    }
  );
});
/*----funcionalidades dos botoes de pagamentos---- */
var pagamentos = document.getElementById('pagamento')
var btn_pix = document.getElementById('btn_pix')
var btn_cartao = document.getElementById('btn_cartao')
var btn_dinheiro = document.getElementById('btn_dinheiro')
var res_pix = document.getElementById('res_pix')
var res_cartao = document.getElementById('res_cartao')
var res_dinheiro = document.getElementById('res_dinheiro')
var env_pix = document.getElementById('env_pix')
var env_cartao = document.getElementById('env_cartao')
var env_dinheiro = document.getElementById('env_dinheiro')
var res_pagamento = document.getElementById('res_pagamento')
var obs_pagamento = document.getElementById('obs_pagamento')
var valor_pagamento = document.getElementById('valor_pagamentos')

btn_pix.addEventListener('click', function(){
  res_pix.style.display='block'
  res_cartao.style.display='none'
  res_dinheiro.style.display='none'
})
btn_cartao.addEventListener('click', function(){
  res_pix.style.display='none'
  res_cartao.style.display='block'
  res_dinheiro.style.display='none'
})
btn_dinheiro.addEventListener('click', function(){
  res_pix.style.display='none'
  res_cartao.style.display='none'
  res_dinheiro.style.display='block'
})






/* ---informativo da colherzinha---- */
var info = document.getElementById('informativo')
var btn_colher_sim = document.getElementById('colher_sim')
var btn_colher_nao = document.getElementById('colher_nao')
var res_colher = document.getElementById('res_colher')


btn_colher_sim.addEventListener('click', function(){
  res_colher.innerHTML='SIM'
  pagamentos.style.display='block'
  info.style.display='none'
  whats_colher = 'SIM'
})
btn_colher_nao.addEventListener('click', function(){
  res_colher.innerHTML='NÃO'
  pagamentos.style.display='block'
  info.style.display='none'
  whats_colher = 'NÃO'
})

/*-----mostrar valor tela-------- */
function mostrarValorNaTela(){
var valor_tela = document.getElementById('valor_tela')
var res_valor_tela = document.getElementById('res_valor_tela')

var t = somarArray(valorCompra)
var falta = 0

if (t < 20 && dic[4] === "Tarumã") {
  falta = 20 - t
  alert('Total pedido R$'+ t + ',00')
  alert('faltam apenas R$'+ falta + ',00 para ficar isento da taxa de entrega R$'+dic[5]+',00')
} else if (t < 150 && dic[4] === "Usina Nova America") {
  falta = 150 - t
  alert('Total pedido R$'+ t + ',00')
  alert('faltam apenas R$'+ falta + ',00 para ficar isento da taxa de entrega R$'+dic[5]+',00')
} else if (t < 50 && dic[4] === "Usina Agua Bonita") {
  falta = 50 - t
  alert('Total pedido R$'+ t + ',00')
  alert('faltam apenas R$'+ falta + ',00 para ficar isento da taxa de entrega R$'+dic[5]+',00')
} else if (t < 50 && dic[4] === "Posto Pioneiro") {
  falta = 50 - t
  alert('Total pedido R$'+ t + ',00')
  alert('falta apenas R$'+ falta + ',00 para ficar isento da taxa de entrega R$'+dic[5]+',00')
} else {
  alert('Total pedido R$'+ t + ',00')
  alert(dic[0]+' está isento da taxa de entrega R$'+dic[5]+',00')
}

}
/*
function ajustarTelefone(numeroFone){
  numeroFone = numeroFone.replace(/\D/g, '');
  const cCode = numeroFone.substring(0,2)
  const aCode = numeroFone.substring(2,3)
  const pParte = numeroFone.substring(3,7)
  const sParte = numeroFone.substring(7)
  return '('+cCode+')'+aCode+''+ pParte +'-'+sParte

}*/

/*----numero do pedido----- */
var npedido = document.getElementById('npedido')

function gerarNumeroPedido(){
  var datahoraatual = new Date()
  var anoatual = datahoraatual.getFullYear()
  var diaDoAno = obterDiaDoAno(datahoraatual)
  var horaAtual = pad(datahoraatual.getHours(), 2) + pad(datahoraatual.getMinutes(), 2) + pad(datahoraatual.getSeconds(), 2)
  var numeroPedido = anoatual.toString() + diaDoAno.toString() + horaAtual
  return numeroPedido
}
function obterDiaDoAno(data){
  var inicioAno = new Date(data.getFullYear(), 0, 0)
  var diff = data - inicioAno
  var umDia = 1000 * 60 * 60 * 24
  var diaDoAno = Math.floor(diff / umDia)
  return diaDoAno
}
function pad(numero, tamanho){
  var numeroString = numero.toString()
  while (numeroString.length < tamanho){
    numeroString = '0' + numeroString
  }
  return numeroString
}

/*---Envair pedido para o whatsApp--- */

env_pix.addEventListener('click', function(){
  res_pagamento.innerHTML = 'Pagamento via - PIX'
  obs_pagamento.innerHTML = 'Pix'
  pagamentos.style.display='none'
  final.style.display = "block";

  
  var mensagemCarrinho = ''
  var contped = 0
  
  carrinho.forEach(function(element){
    if (Array.isArray(element)){
      contped += 1
      mensagemCarrinho += 'Pedido:' + contped + '\n'
      element.forEach(function(item){
        mensagemCarrinho += formatarArrayWhats(element)
      })
      }else{
        mensagemCarrinho += '- '+ element + '\n'
      }   
  })
  

  var tw = somarArray(valorCompra);
  var te = ''


  if (tw < 20 && dic[4] === "Tarumã") {
    te = "Taxa de entrega R$" + dic[5] + ",00";
    tw = tw + dic[5];
  } else if (tw < 150 && dic[4] === "Usina Nova America") {
    te = "Taxa de entrega R$" + dic[5] + ",00";
    tw = tw + dic[5];
  } else if (tw < 50 && dic[4] === "Usina Agua Bonita") {
    te = "Taxa de entrega R$" + dic[5] + ",00";
    tw = tw + dic[5];
  } else if (tw < 50 && dic[4] === "Posto Pioneiro") {
    te= "Taxa de entrega R$" + dic[5] + ",00";
    tw = tw + dic[5];
  } else {
    te = "Taxa de entrega isento";
  }
  var vlr_total_whats = 'R$' + tw + ',00'

  var detalhesPedido = 'Pedido: '+ numeroDoPedido +'\nCliente: '+ dic[0] + '\nEndereço: ' + dic[1] +','+ dic[2]+'\nTelefone: '+dic[3] + '\nRegião de entrega: ' + dic[4] + '\nValor total: '+ vlr_total_whats + '\nTaxa entrega: '+ te + '\nPagamento via Pix' + '\nColherzinha? ' + whats_colher + '\n' + mensagemCarrinho
  var numeroWhatsApp = '5518996772619'
  var mensagemWhatsApp = encodeURIComponent('Ola, esse é meu pedido \n' + detalhesPedido)
  var linkWhatsApp = 'https://wa.me/' + numeroWhatsApp + '?text='+ mensagemWhatsApp

  window.open(linkWhatsApp)


})



env_cartao.addEventListener('click', function(){
  res_pagamento.innerHTML = 'Pagamento via - CARTÃO'
  obs_pagamento.innerHTML = 'Levar a maquininha!!'
  pagamentos.style.display='none'
  final.style.display = "block";
})
env_dinheiro.addEventListener('click', function(e){
  e.preventDefault()
  var troco = document.getElementById('troco').value
  res_pagamento.innerHTML = 'Pagamento no DINHEIRO'
  obs_pagamento.innerHTML = troco
  pagamentos.style.display='none'
  final.style.display = "block";
})

function formatarArrayWhats(array){
  var mensagem = ''
  array.forEach(function(element){
    if (Array.isArray(element)){
      mensagem += 'Pedido:\n'
      mensagem += formatarArrayWhats(element).replace(/\n$/,'')
    }else{
      mensagem += ' - ' + element + '\n'
    }
  })
  return mensagem
}