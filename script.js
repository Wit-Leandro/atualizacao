var preco = [];
var dic = [];
var vlr_final = [];
var x = [];
var regiao_escolhida = []
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
var passar_limite = document.getElementById("limite");
var btn_comprar_mais = document.getElementById("btncomprarmais");
var mais_um = document.getElementById("maisum");
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
var btn_regiao = document.getElementById('btn_regiao')
var escolha_regiao = document.getElementById('escolha_regiao')
var regiao_mensagem = document.getElementById('regiao_mensagem')
var res_regiao = document.getElementById('resregiao')
var taxa = document.getElementById('taxa')
var resads = document.getElementById('resads')

const adiciona = { vlr: 0, obs: "Sem adicionais" };
sessionStorage.setItem("adiciona", JSON.stringify(adiciona));

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

  if (n && endereco && ncasa && fone) {
    if (/\(\d{2}\)\d{5}-\d{4}/.test(fone)) {
      const person = {
        name: n,
        endereco: endereco,
        ncasa: ncasa,
        telefone: fone,
      };
      localStorage.setItem("person", JSON.stringify(person));
      checkUser();
      location.reload();
    } else {
      alert("numero de telefone invalido, tente exemplo (xx)12345-1234");
      checkUser();
      location.reload();
    }
  } else {
    alert("Existe campos sem preencher");
    location.reload();
  }
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

  if (username) {
    var nome_cliente = document.getElementById("nome_cliente");
    msgcadastro.style.display = "none";
    formulario.style.display = "none";
    escolha_regiao.style.display='block'
    welcome.style.display = "block";
    nome_cliente.innerHTML = username + " \u{1F609}";
    clearr.style.display = "block";
    escolha.style.display = "none";
  } else {
    msgcadastro.style.display = "block";
    formulario.style.display = "block";
    welcome.style.display = "none";
  }
}
/*
function checkRegiao() {
  const getPerson = localStorage.getItem("person");
  const objecPerson = JSON.parse(getPerson);
  const userRegiao = objecPerson.regiao;
  dic.push(userRegiao);

  if (userRegiao) {
    escolha_regiao.style.display='none'
  } else {
    escolha_regiao.style.display='block'
  }
}*/

var limpar = document.getElementById("limpar");
limpar.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
  checkUser();
});

checkUser();

/*checkRegiao()*/




/*--------- Escolha do copo -----*/

var btn_copo = document.getElementById("btn_copo");
btn_copo.addEventListener("click", function (e) {
  e.preventDefault();
  var meu_select_copo = document.getElementById("meu_select_copo").value;
  if (meu_select_copo === "300ml") {
    const pedido = { acai: "Copo de 300ml", limit: 4, valor: 13 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    passar_limite.innerHTML = "Seu limite de adicionais é de 4";
  } else if (meu_select_copo === "400ml") {
    const pedido = { acai: "Copo de 400ml", limit: 5, valor: 16 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    passar_limite.innerHTML = "Seu limite de adicionais é de 5";
  } else if (meu_select_copo === "500ml") {
    const pedido = { acai: "Copo de 500ml", limit: 5, valor: 18 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    passar_limite.innerHTML = "Seu limite de adicionais é de 5";
  } else if (meu_select_copo === "700ml") {
    const pedido = { acai: "Copo de 700ml", limit: 5, valor: 28 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    passar_limite.innerHTML = "Seu limite de adicionais é de 5";
  }
  escolha.style.display = "none";
  adicionais.style.display = "block";
  const getPedido = sessionStorage.getItem("pedido");
  const objectPedido = JSON.parse(getPedido);
  const userPedido = objectPedido.limit;
  limite = userPedido;
  resadicao.innerHTML = " Voce tem " + limite + " adiconais para seu açai";
});

/*--------- escolha marmita -----*/

var btn_marmita = document.getElementById("btn_marmita");
btn_marmita.addEventListener("click", function (e) {
  e.preventDefault();
  var meu_marmita = document.querySelector(".select_marmita").value;
  if (meu_marmita === "500ml") {
    const pedido = { acai: "Marmita de 500ml", limit: 5, valor: 20 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    passar_limite.innerHTML = "Seu limite de adicionais é de 5";
  } else if (meu_marmita === "750ml") {
    const pedido = { acai: "Marmita de 750ml", limit: 5, valor: 30 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    passar_limite.innerHTML = "Seu limite de adicionais é de 5";
  } else if (meu_marmita === "1200ml") {
    const pedido = { acai: "Marmita de 1200ml", limit: 6, valor: 40 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    passar_limite.innerHTML = "Seu limite de adicionais é de 6";
  }
  escolha.style.display = "none";
  adicionais.style.display = "block";
  const getPedido = sessionStorage.getItem("pedido");
  const objectPedido = JSON.parse(getPedido);
  const userPedido = objectPedido.limit;
  limite = userPedido;
  resadicao.innerHTML = " Voce tem " + limite + " adiconais para seu açai";
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
/* Compra de adicionais por unidade */
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
  const adiciona = { vlr: 3, obs: msg };
  sessionStorage.setItem("adiciona", JSON.stringify(adiciona));

  alert("Sucesso!! foram adicionados + 1 \u{1F60A}");
  resadicao.innerHTML = " Voce tem " + limite + " adiconais para seu açai";
  adicao.style.display = "none";
  adicionais.style.display = "block";
});
/*------------Adiçao de adicionais--------*/
/*
btn_compra_add.addEventListener("click", function () {
  var selecao_adicao = select_adicao.value;
  if (selecao_adicao == "1") {
    const getPedido = sessionStorage.getItem("pedido")
    const objectPedido = JSON.parse(getPedido)
    const userPedido = objectPedido.limit
    limite = limite + 1;
    const adiciona = {vlr: 3, obs:" Com mais 1 adicional no valor de R$3,00 Reais" }
    sessionStorage.setItem("adiciona",JSON.stringify(adiciona))
  } 
  else if (selecao_adicao == "2") {
    const getPedido = sessionStorage.getItem("pedido")
    const objectPedido = JSON.parse(getPedido)
    const userPedido = objectPedido.limit
    limite = limite + 2;
    const adiciona = {vlr: 6, obs:" Com mais 2 adicional no valor de R$6,00 Reais" }
    sessionStorage.setItem("adiciona",JSON.stringify(adiciona))
  } 
  else if (selecao_adicao == "3") {
    const getPedido = sessionStorage.getItem("pedido")
    const objectPedido = JSON.parse(getPedido)
    const userPedido = objectPedido.limit
    limite = limite + 3;
    const adiciona = {vlr: 9, obs:" Com mais 3 adicional no valor de R$9,00 Reais"}
    sessionStorage.setItem("adiciona",JSON.stringify(adiciona))
  } 
  else {
    const getPedido = sessionStorage.getItem("pedido")
    const objectPedido = JSON.parse(getPedido)
    const userPedido = objectPedido.limit
    limite = limite + 4;
    const adiciona = {vlr: 12, obs:" Com mais 4 adicional no valor de R $12,00 Reais"}
    sessionStorage.setItem("adiciona",JSON.stringify(adiciona))
  }
  alert("Sucesso!! foram adicionados + " + selecao_adicao + " \u{1F60A}");
  resadicao.innerHTML = " Voce tem " + limite + " adiconais para seu açai";
  adicao.style.display = "none";
  adicionais.style.display = "block";
});*/
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

function verificarRegiao(){
  var taruma = document.getElementById('taruma')
  var america = document.getElementById('america')
  var bonita = document.getElementById('bonita')
  var pioneiro = document.getElementById('pioneiro')
  var chico = document.getElementById('chico')

  if (!taruma && !america && !bonita && !pioneiro && !chico){
    regiao_mensagem.style.display='block'
    
  }
  else{    
    regiao.forEach(function (checkbox){
      if (checkbox.checked){
        var personRegiao = JSON.parse(localStorage.getItem('person'))
        personRegiao.regiao = checkbox.value
        localStorage.setItem("person", JSON.stringify(personRegiao))
        dic.push(checkbox.value)
        if (dic[4] === 'Tarumã'){
          dic.push(2)
          escolha_regiao.style.display='none'
          escolha.style.display = "block";
        }
        else if (dic[4] === 'Usina Nova America'){
        dic.push(10)
        escolha_regiao.style.display='none'
        escolha.style.display = "block";
        }
        else if (dic[4] === 'Usina Agua Bonita'){
          dic.push(5)
          escolha_regiao.style.display='none'
          escolha.style.display = "block";
        }
        else if (dic[4] === 'Posto Pioneiro'){
          dic.push(5)
          escolha_regiao.style.display='none'
          escolha.style.display = "block";
        }
        else if (dic[4] === 'Retirar no Tio-Chico'){
          dic.push(0)
          escolha_regiao.style.display='none'
          escolha.style.display = "block";
        }
      }    
    })
  }
  console.log(dic[5])
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


  if(totalCompra < 20 && dic[4] === 'Tarumã') {
    taxa.innerHTML = 'Taxa de entrega R$'+ dic[5] +',00'
    totalCompra = totalCompra + dic[5]
  }
  else if(totalCompra < 150 && dic[4] === 'Usina Nova America') {
    taxa.innerHTML = 'Taxa de entrega R$'+ dic[5] +',00'
    totalCompra = totalCompra + dic[5]
  }
  else if(totalCompra < 50 && dic[4] === 'Usina Agua Bonita') {
    taxa.innerHTML = 'Taxa de entrega R$'+ dic[5] +',00'
    totalCompra = totalCompra + dic[5]
  }
  else if(totalCompra < 50 && dic[4] === 'Posto Pioneiro') {
    taxa.innerHTML = 'Taxa de entrega R$'+ dic[5] +',00'
    totalCompra = totalCompra + dic[5]
  }
  else{
    taxa.innerHTML = 'Taxa de entrega isento' 
  }

  
  console.log(totalCompra);
  resnome.innerHTML = "Cliente: " + dic[0];
  resendereco.innerHTML = "Endereço: " + dic[1] + "," + dic[2];
  resfone.innerHTML = "Telefone: " + dic[3];
  respd.innerHTML = "Seu pedido foi: " + userAcai
  resads.innerHTML = userObs
  respreco.innerHTML = "Valor total R$" + totalCompra + ",00 Reais";
  res_regiao.innerHTML = "Região de entrega: " + dic[4]
  var listacontainer = document.getElementById("listaitem");
  var lista = document.createElement("ul");
  valores.forEach(function (item) {
    var listitem = document.createElement("li");
    listitem.textContent = item;
    lista.appendChild(listitem);
  });
  listacontainer.appendChild(lista);
});

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
    reshora2.innerHTML = "Abriremos amanhã as 14hs.";
  } else {
    if (hora < 14) {
      reshora.style.color = "red";
      reshora.innerHTML = "Fechado";
      reshora2.innerHTML = "Abriremos em " + faltahoras + ":" + faltaminutos;
    } else if (hora > 23) {
      reshora.style.color = "red";
      reshora.innerHTML = "Fechado:";
      reshora2.innerHTML = "Antendimento de ter a dom das 14hs as 23hs";
    } else {
      reshora.innerHTML = "Aberto:";
      reshora2.innerHTML = "Deus Abençoe";
    }
    hdia.innerHTML = hora + ":" + minutos;
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
  var digitou = { textoDigitado: clienteDigitou };
  sessionStorage.setItem("digitou", JSON.stringify(digitou));

  const getDigitou = sessionStorage.getItem("digitou");
  const objectDigitou = JSON.parse(getDigitou);
  const userDigitou = objectDigitou.textoDigitado;

  montar.innerHTML = userDigitou;

  mensagem.style.display = "none";
  final.style.display = "block";
});
/*------------------------------------------------------------------------- */
