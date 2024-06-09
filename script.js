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
var meu_select_salada = document.getElementById("meu_select_salada");
var adicionais = document.getElementById("adicionais");
var limite = [];
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
var numeroDoPedido = "";
var whats_colher = "";
var shake_tradicional = document.getElementById("shake_tradicional");
var shake_especial = document.getElementById("shake_especial");
var adicionais_salada = document.getElementById("adicionais_salada");
var complemento_salada = document.getElementById("complemento_salada");
var sabor_trad = document.getElementById("sabor_trad");
var rodape = document.getElementById('rodape')

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
    nome_cliente.innerHTML = username.split(" ")[0] + " \u{1F609}";
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
/*--------------AÇAI TRADICIONAIS---------- */
var btn_trad_copo = document.getElementById("btn_trad_copo");
btn_trad_copo.addEventListener("click", function (e) {
  e.preventDefault();
  var meu_select_trad_copo = document.getElementById(
    "meu_select_trad_copo"
  ).value;
  if (meu_select_trad_copo === "300ml") {
    const pedido = { acai: "Copo tradicional de 300ml", limit: 10, valor: 9 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
  } else if (meu_select_trad_copo === "400ml") {
    const pedido = { acai: "Copo tradicional de 400ml", limit: 10, valor: 12 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
  } else if (meu_select_trad_copo === "500ml") {
    const pedido = { acai: "Copo tradicional de 500ml", limit: 10, valor: 15 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
  } else if (meu_select_trad_copo === "700ml") {
    const pedido = { acai: "Copo tradicional de 700ml", limit: 10, valor: 24 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
  }
  escolha.style.display = "none";
  mensagem.style.display = "block";
  const getPedido = sessionStorage.getItem("pedido");
  const objectPedido = JSON.parse(getPedido);
  const userPedido = objectPedido.limit;
  limite.push(userPedido)
});

var btn_trad_marmita = document.getElementById("btn_trad_marmita");
btn_trad_marmita.addEventListener("click", function (e) {
  e.preventDefault();
  var meu_select_trad_marmita = document.getElementById(
    "meu_select_trad_marmita"
  ).value;
  if (meu_select_trad_marmita === "500ml") {
    const pedido = {
      acai: "Marmita tradicional de 500ml",
      limit: 10,
      valor: 16,
    };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
  } else if (meu_select_trad_marmita === "750ml") {
    const pedido = {
      acai: "Marmita tradicional de 750ml",
      limit: 10,
      valor: 24,
    };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
  } else if (meu_select_trad_marmita === "1200ml") {
    const pedido = {
      acai: "Marmita tradicional de 1200ml",
      limit: 10,
      valor: 34,
    };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
  }
  escolha.style.display = "none";
  mensagem.style.display = "block";
  const getPedido = sessionStorage.getItem("pedido");
  const objectPedido = JSON.parse(getPedido);
  const userPedido = objectPedido.limit;
  limite.push(userPedido)
});

var btn_trad_pote = document.getElementById("btn_trad_pote");
btn_trad_pote.addEventListener("click", function (e) {
  e.preventDefault();
  var meu_select_trad_pote = document.getElementById(
    "meu_select_trad_pote"
  ).value;
  if (meu_select_trad_pote === "900ml") {
    const pedido = { acai: "Pote tradicional de 900ml", limit: 10, valor: 26 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
  } else if (meu_select_trad_pote === "2 Litros") {
    const pedido = {
      acai: "Pote tradicional de 2 Litros",
      limit: 10,
      valor: 40,
    };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
  } else if (meu_select_trad_pote === "5 Litros") {
    const pedido = {
      acai: "Pote tradicional de 5 Litros",
      limit: 10,
      valor: 90,
    };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
  } else if (meu_select_trad_pote === "10 Litros") {
    const pedido = {
      acai: "Pote tradicional de 10 Litros",
      limit: 10,
      valor: 160,
    };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
  }
  escolha.style.display = "none";
  mensagem.style.display = "block";
  const getPedido = sessionStorage.getItem("pedido");
  const objectPedido = JSON.parse(getPedido);
  const userPedido = objectPedido.limit;
  limite.push(userPedido)
});

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
  adicao.style.display = 'block'
  escolha.style.display = "none";
  adicionais.style.display = "block";
  const getPedido = sessionStorage.getItem("pedido");
  const objectPedido = JSON.parse(getPedido);
  const userPedido = objectPedido.limit;
  limite.push(userPedido)
  resadicao.innerHTML =
    dic[0].split(" ")[0] + " Escolha " + limite + " adiconais para seu açai";
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
  adicao.style.display = 'block'
  escolha.style.display = "none";
  adicionais.style.display = "block";
  const getPedido = sessionStorage.getItem("pedido");
  const objectPedido = JSON.parse(getPedido);
  const userPedido = objectPedido.limit;
  limite.push(userPedido)
  resadicao.innerHTML =
    dic[0].split(" ")[0] + ", Escolha " + limite + " adiconais para seu açai";
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
/*----------------MILK SHAKE------------------- */
var btn_shake = document.getElementById("btn_shake");
var res_comp_shake = document.getElementById('res_complemento_shake')
btn_shake.addEventListener("click", function (e) {
  e.preventDefault();
  var meu_select_shake = document.getElementById("meu_select_shake").value;
  if (meu_select_shake === "T300ml") {
    milk_shake.push('T')
    sabor_trad.style.display = "block";
    const pedido = { acai: "Shake Tradiconal de 300ml", limit: 2, valor: 10 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    res_comp_shake.innerHTML = 'R$ 2,00 Cada'
  } else if (meu_select_shake === "T400ml") {
    milk_shake.push('T')
    sabor_trad.style.display = "block";
    const pedido = { acai: "Shake Tradiconal de 400ml", limit: 2, valor: 12 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    res_comp_shake.innerHTML = 'R$ 2,00 Cada'
  } else if (meu_select_shake === "T500ml") {
    milk_shake.push('T')
    sabor_trad.style.display = "block";
    const pedido = { acai: "Shake Tradiconal de 500ml", limit: 2, valor: 14 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    res_comp_shake.innerHTML = 'R$ 2,00 Cada'
  } else if (meu_select_shake === "T700ml") {
    milk_shake.push('T')
    sabor_trad.style.display = "block";
    const pedido = { acai: "Shake Tradiconal de 700ml", limit: 2, valor: 18 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    res_comp_shake.innerHTML = 'R$ 2,00 Cada'
  } else if (meu_select_shake === "S300ml") {
    milk_shake.push('S')
    sabor_especial.style.display = "block";
    const pedido = { acai: "Shake Especial de 300ml", limit: 2, valor: 12 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    res_comp_shake.innerHTML = 'Você possui 1 sem o acréscimo \nR$ 2,00 Cada'
  } else if (meu_select_shake === "S400ml") {
    milk_shake.push('S')
    sabor_especial.style.display = "block";
    const pedido = { acai: "Shake Especial de 400ml", limit: 2, valor: 14 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    res_comp_shake.innerHTML = 'Você possui 1 sem o acréscimo \nR$ 2,00 Cada'
  } else if (meu_select_shake === "S500ml") {
    milk_shake.push('S')
    sabor_especial.style.display = "block";
    const pedido = { acai: "Shake Especial de 500ml", limit: 2, valor: 16 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    res_comp_shake.innerHTML = 'Você possui 1 sem o acréscimo \nR$ 2,00 Cada'
  } else if (meu_select_shake === "S700ml") {
    milk_shake.push('S')
    sabor_especial.style.display = "block";
    const pedido = { acai: "Shake Especial de 700ml", limit: 2, valor: 20 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
    res_comp_shake.innerHTML = 'Você possui 1 sem o acréscimo R$ 2,00 Cada'
  }
  
  escolha.style.display = "none";
  const getPedido = sessionStorage.getItem("pedido");
  const objectPedido = JSON.parse(getPedido);
  const userPedido = objectPedido.limit;
  limite.push(userPedido)

});
var sabor_especial = document.getElementById("sabor_especial");

var btn_escolha_especial = document.getElementById("btn_escolha_especial");
btn_escolha_especial.addEventListener("click", function () {
  if (contarSelecionados() == 0){
    alert('Nehum Sabor Selecionado')
  }
  else {
  contarCobertura(limite)
  sabor_especial.style.display = "none";
  coberturas.style.display = "block";
  adicao.style.display = 'none'
  }
});

var milk_shake = [];

var coberturas = document.getElementById("coberturas");
var btn_escolha_shake = document.getElementById("btn_escolha_shake");
btn_escolha_shake.addEventListener("click", function () {
  if (contarSelecionados() == 0){
    alert('Nehum Sabor Selecionado')
  }
  else{
  contarCobertura(limite)
  sabor_trad.style.display = "none";
  coberturas.style.display = "block";
  }
});

var complemento_shake = document.getElementById("complemento_shake");
var btn_escolha_cobertura = document.getElementById("btn_escolha_cobertura");
btn_escolha_cobertura.addEventListener("click", function () {
  contarComplemento(limite)
  coberturas.style.display = "none";
  complemento_shake.style.display = "block";
});


var comp_shake = [];
var proc_shake = [
  "Leite_condensado",
  "Cr_Nutella",
  "Cr_Leite_Ninho",
  "Cr_Morango",
  "Cr_Bombom",
  "Cr_Chocobis",
  "Cr_Pacoca",
  "Cr_Ovo_Maltine",
  "Confete",
  "Mini_Chocoball",
  "ChocoBall",
  "Power_Ball",
  "Sucrilhos",
  "Leite_em_Po",
  "Ouro_Branco",
  "Amendoin",
  "Farofa_de_Paçoca",
  "Granola",
  "Bis_Preto",
  "Bis_Branco",
  "Paçoca_com_Chocolate",
  "Paçoca_com_Chocolate_Branco",
  "Ovo_Maltine",
  "Canudos",
  "Mashomallons",
  "Gotas_de_Chocolate",
];
var proc_cobertura = [
  "Cobertura:Caramelo",
  "Cobertura:Goiaba",
  "Cobertura:Chocolate",
  "Cobertura:Maracuja",
  "Cobertura:Frutas Vermelhas",
  "Cobertura:Brigadeiro",
  "Cobertura:Morango",
  "Cobertura:Leite_condensado",
  "Cobertura:Coco",
  "Cobertura:Chiclete",
  "Cobertura:Doce de Leite",
  "Cobertura:Abacaxi",
  "Cobertura:Limão Galego",
  "Cobertura:Amora",
];

var btn_escolha_complemento_shake = document.getElementById(
  "btn_escolha_complemento_shake"
);
btn_escolha_complemento_shake.addEventListener("click", function () {
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      valores.push(checkbox.value);
      comp_shake.push(checkbox.value);
    }
    complemento_shake.style.display = "none";
    mensagem.style.display = "block";
    adicao.style.display = "none";
    console.log(comp_shake);
  });
});
/*----------------FUNÇOES DE CONTAGEN DOS CHECKBOX DO MILK SHAKE----------------- */
function contarCobertura(){
  limite = []
  var n = contarSelecionados()
  if (n == 1){
    limite = [3]
  }
  else {
    limite = [4]
  }
}

function contarComplemento(){
  limite = []
  var n = contarSelecionados()
  if (n == 1){
    limite = [3]
  }
  else if (n == 2){
    limite = [4]
  }
  else if (n == 3){
    limite = [5]
  }
  else{
    limite = [6]
  }
}

/*-----exibir salada de frutas---------- */
function exibirSalada() {
  var imagem_salada = document.getElementById("imagem_salada");
  var meu_salada = document.querySelector(".select_salada").value;
  imagem_salada.innerHTML = "";
  if (meu_salada === "300ml") {
    var imagem_salada_300ml = document.createElement("img");
    imagem_salada_300ml.src = "imagens/salada300ml.png";
    imagem_salada.appendChild(imagem_salada_300ml);
  } else if (meu_salada === "400ml") {
    var imagem_salada_400ml = document.createElement("img");
    imagem_salada_400ml.src = "imagens/salada400ml.png";
    imagem_salada.appendChild(imagem_salada_400ml);
  } else if (meu_salada === "500ml") {
    var imagem_salada_500ml = document.createElement("png");
    imagem_salada_500ml.src = "imagens/salada500ml.jpg";
    imagem_salada.appendChild(imagem_salada_500ml);
  } else if (meu_salada === "700ml") {
    var imagem_salada_700ml = document.createElement("img");
    imagem_salada_700ml.src = "imagens/salada700ml.png";
    imagem_salada.appendChild(imagem_salada_700ml);
  }
}

var btn_salada = document.getElementById("btn_salada");
btn_salada.addEventListener("click", function (e) {
  e.preventDefault();
  var meu_select_salada = document.getElementById("meu_select_salada").value;
  if (meu_select_salada === "300ml") {
    const pedido = { acai: "Salada Frutas de 300ml", limit: 16, valor: 9 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
  } else if (meu_select_salada === "400ml") {
    const pedido = { acai: "Salada Frutas de 400ml", limit: 16, valor: 12 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
  } else if (meu_select_salada === "500ml") {
    const pedido = { acai: "Salada Frutas de 500ml", limit: 16, valor: 14 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
  } else if (meu_select_salada === "700ml") {
    const pedido = { acai: "Salada Frutas de 700ml", limit: 16, valor: 18 };
    sessionStorage.setItem("pedido", JSON.stringify(pedido));
  }
  escolha.style.display = "none";
  adicionais_salada.style.display = "block";
  const getPedido = sessionStorage.getItem("pedido");
  const objectPedido = JSON.parse(getPedido);
  const userPedido = objectPedido.limit;
  limite.push(userPedido);
  resadicao.innerHTML =
    dic[0].split(" ")[0] + " Escolha no minimo 4 frutas para sua salada";
});
var btn_escolha_frutas = document.getElementById("btn_escolha_frutas");
btn_escolha_frutas.addEventListener("click", function () {
  checkboxes.forEach(function (checkbox) {
    complemento_salada.style.display = "block";
    adicionais_salada.style.display = "none";
    adicao.style.display = "none";
    console.log(valores);
  });
});
var result = 0;
var procurar = [
  "Leite_condensado",
  "Calda_Avela",
  "Creme_Nutella",
  "Cr_Leite_Ninho",
  "Granola",
  "Amendoin",
  "Leite_em_Po",
  "Farofa_de_Paçoca",
  "Sucrilhos",
];
var procure_aqui = [];
var btn_escolha_complemento_frutas = document.getElementById(
  "btn_escolha_complemento_frutas"
);
btn_escolha_complemento_frutas.addEventListener("click", function () {
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      valores.push(checkbox.value);
      procure_aqui.push(checkbox.value);
    }
    complemento_salada.style.display = "none";
    mensagem.style.display = "block";
    adicao.style.display = "none";
    console.log(procure_aqui);
  });
});

function procurarCobrar(find, proc) {
  if (milk_shake[0] === "T") {
    find.forEach(function (v) {
      if (proc.includes(v.toString())) {
        valorCompra.push(2);
      }
    });
  } else if (milk_shake[0] === "S") {
    if (find.length > 1) {
      valorCompra.push(-2);
      find.forEach(function (v) {
        if (proc.includes(v.toString())) {
          valorCompra.push(2);
        }
      });
    }
  }
}
/*
function procurarCobrarCobbertura(find, proc) {
  if (find.length > 2) {
    valorCompra.push(-4);
    find.forEach(function (v) {
      if (proc.includes(v.toString())) {
        valorCompra.push(2);
      }
    });
  } else {
    valorCompra.push(0);
  }
}*/

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
  limite.push(1)
  msg = " Com mais " + ad + " adicional no valor de R$" + tadd + " Reais";
  const adiciona = { vlr: 0, obs: msg };
  sessionStorage.setItem("adiciona", JSON.stringify(adiciona));
  valorCompra.push(3);
  alert("Sucesso!! foram adicionados + 1 \u{1F60A}");
  resadicao.innerHTML =
    dic[0].split(" ")[0] + ", Escolha " + somarArray(limite) + " adiconais para seu açai";
  adicionais.style.display = "block";
  btn_volta_esolha.style.display = "none";
});
/*
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
  resadicao.innerHTML = "Sem problema fique a vontade! ";
  adicao.style.display = "none";
  adicionais.style.display = "block";
});*/
/*--------- Escolha dos adicionais -----*/

  checkboxes.forEach(function (checkbox) {
    var c = 0
    checkbox.addEventListener("change", function () {
      var selecionados = document.querySelectorAll(".checkbox:checked");
      if (selecionados.length > somarArray(limite)) {
        this.checked = false;
        alert("Ops! Limite excedido!! ");
      }
    });
  });

  function contarSelecionados() {
    return document.querySelectorAll(".checkbox:checked").length;
  }


/*-------REMOVER SELEÇÃO DOS CHECKBOXES----- */
function removeTicks() {
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
}
/*-----limpar area da sujestão------- */
function limpaSujestao() {
  var campo = (document.getElementById("campo").value = "");
}

/*------escolha das regioes------------- */
regiao.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    var regiao_selecionados = document.querySelectorAll(".regiao:checked");
    if (regiao_selecionados.length > 1) {
      this.checked = false;
      alert("Ops, Escolha apenas uma Região!!");
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
    console.log(valores);
  });
});
/*
var btn_volta_esolha = document.getElementById("btn_voltar_escolha");
btn_volta_esolha.addEventListener("click", function () {
  escolha.style.display = "block";
  adicionais.style.display = "none";
  removeTicks();
  console.log(valores);
});*/

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
  valor_pagamento.innerHTML = "VALOR DO PEDIDO - R$" + t + ",00";
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

function openSubCategory(sub_evt, sub_categoryName) {
  const sub_category = document.querySelectorAll(".sub_category");
  sub_category.forEach((sub_category) => {
    sub_category.style.display = "none";
  });
  const sub_tabs = document.querySelectorAll("sub_tab");
  sub_tabs.forEach((sub_tab) => {
    sub_tab.classList.remove("active");
  });
  document.getElementById(sub_categoryName).style.display = "block";
  sub_evt.currentTarget.classList.add("active");
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
    reshora2.innerHTML = "Voltamos amanhã as 14hs. - ";
  } else {
    if (hora < 14) {
      reshora.style.color = "red";
      reshora.innerHTML = "Fechado";
      reshora2.innerHTML = "Abrirmos as 14hs. - ";
    } else if (hora > 23) {
      reshora.style.color = "red";
      reshora.innerHTML = "Fechado:";
    } else {
      reshora.innerHTML = "Aberto:";
      reshora2.innerHTML = "Deus Abençoe";
    }
    hdia.innerHTML = hora + ":" + minutos + " - ";
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
  procurarCobrar(procure_aqui, procurar);
  procurarCobrar(comp_shake, proc_shake);
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
  numeroDoPedido = gerarNumeroPedido();
  npedido.innerHTML = "Numero do Pedido: " + numeroDoPedido;

  info.style.display = "block";
  esconde_comprar_mais.style.display = "none";
  esconde_finalizar_carrinho.style.display = "none";
  carrinhoCompras.style.display = "block";
  escolha.style.display = "none";
  console.log(carrinho.length);
});

btn_comprar_mais.addEventListener("click", function () {
  removeTicks();
  limpaSujestao();
  procure_aqui = [];
  comp_shake = [];
  limite = []
  milk_shake = []
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
function copiarCnpj(){
  var cop_cnpj = '43227642000130'
  navigator.clipboard.writeText(cop_cnpj).then(
    function () {
      alert("Pix copiado para a area de transferencia");
    },
    function (err) {
      alert("Erro ao copiar texto para a area de transferencia");
    }
  )
}


/*
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
});*/
/*----funcionalidades dos botoes de pagamentos---- */
var pagamentos = document.getElementById("pagamento");
var btn_pix = document.getElementById("btn_pix");
var btn_cartao = document.getElementById("btn_cartao");
var btn_dinheiro = document.getElementById("btn_dinheiro");
var res_pix = document.getElementById("res_pix");
var res_cartao = document.getElementById("res_cartao");
var res_dinheiro = document.getElementById("res_dinheiro");
var env_pix = document.getElementById("env_pix");
var env_cartao = document.getElementById("env_cartao");
var env_dinheiro = document.getElementById("env_dinheiro");
var res_pagamento = document.getElementById("res_pagamento");
var obs_pagamento = document.getElementById("obs_pagamento");
var valor_pagamento = document.getElementById("valor_pagamentos");


btn_pix.addEventListener("click", function () {
  res_pix.style.display = "block";
  res_cartao.style.display = "none";
  res_dinheiro.style.display = "none";
  generateQRCode()
});
btn_cartao.addEventListener("click", function () {
  res_pix.style.display = "none";
  res_cartao.style.display = "block";
  res_dinheiro.style.display = "none";
});
btn_dinheiro.addEventListener("click", function () {
  res_pix.style.display = "none";
  res_cartao.style.display = "none";
  res_dinheiro.style.display = "block";
});

/* ---informativo da colherzinha---- */
var info = document.getElementById("informativo");
var btn_colher_sim = document.getElementById("colher_sim");
var btn_colher_nao = document.getElementById("colher_nao");
var res_colher = document.getElementById("res_colher");

btn_colher_sim.addEventListener("click", function () {
  res_colher.innerHTML = "SIM";
  pagamentos.style.display = "block";
  info.style.display = "none";
  whats_colher = "SIM";
});
btn_colher_nao.addEventListener("click", function () {
  res_colher.innerHTML = "NÃO";
  pagamentos.style.display = "block";
  info.style.display = "none";
  whats_colher = "NÃO";
});

/*-----mostrar valor tela-------- */
function mostrarValorNaTela() {
  var valor_tela = document.getElementById("valor_tela");
  var res_valor_tela = document.getElementById("res_valor_tela");

  var t = somarArray(valorCompra);
  var falta = 0;

  if (t < 20 && dic[4] === "Tarumã") {
    falta = 20 - t;
    alert("Total pedido R$" + t + ",00");
  } else if (t < 150 && dic[4] === "Usina Nova America") {
    falta = 150 - t;
    alert("Total pedido R$" + t + ",00");
  } else if (t < 50 && dic[4] === "Usina Agua Bonita") {
    falta = 50 - t;
    alert("Total pedido R$" + t + ",00");
  } else if (t < 50 && dic[4] === "Posto Pioneiro") {
    falta = 50 - t;
    alert("Total pedido R$" + t + ",00");
  } else {
    alert("Total pedido R$" + t + ",00");
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
var npedido = document.getElementById("npedido");

function gerarNumeroPedido() {
  var datahoraatual = new Date();
  var anoatual = datahoraatual.getFullYear();
  var diaDoAno = obterDiaDoAno(datahoraatual);
  var horaAtual =
    pad(datahoraatual.getHours(), 2) +
    pad(datahoraatual.getMinutes(), 2) +
    pad(datahoraatual.getSeconds(), 2);
  var numeroPedido = anoatual.toString() + diaDoAno.toString() + horaAtual;
  return numeroPedido;
}
function obterDiaDoAno(data) {
  var inicioAno = new Date(data.getFullYear(), 0, 0);
  var diff = data - inicioAno;
  var umDia = 1000 * 60 * 60 * 24;
  var diaDoAno = Math.floor(diff / umDia);
  return diaDoAno;
}
function pad(numero, tamanho) {
  var numeroString = numero.toString();
  while (numeroString.length < tamanho) {
    numeroString = "0" + numeroString;
  }
  return numeroString;
}

/*---Envair pedido para o whatsApp--- */

env_pix.addEventListener("click", function () {
  res_pagamento.innerHTML = "Pagamento via - PIX";
  obs_pagamento.innerHTML = "Pix";
  pagamentos.style.display = "none";
  final.style.display = "block";

  var mensagemCarrinho = "";
  var contped = 0;
  carrinho.forEach(function (element) {
    if (Array.isArray(element)) {
      contped += 1;
      mensagemCarrinho += "\n\nMontagem N° " + contped + "\n";
      mensagemCarrinho += formatarArrayWhats(element);
    } else {
      mensagemCarrinho += "- " + element + "\n";
    }
  });

  var tw = somarArray(valorCompra);
  var te = "";

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
    te = "Taxa de entrega R$" + dic[5] + ",00";
    tw = tw + dic[5];
  } else {
    te = "Taxa de entrega isento";
  }
  var vlr_total_whats = "R$" + tw + ",00";

  var detalhesPedido =
    "N° Pedido: " +
    numeroDoPedido +
    "\nCliente: " +
    dic[0] +
    "\nEndereço: " +
    dic[1] +
    "," +
    dic[2] +
    "\nTelefone: " +
    dic[3] +
    "\nRegião de entrega: " +
    dic[4] +
    "\nValor total: " +
    vlr_total_whats +
    "\nTaxa entrega: " +
    te +
    "\nPagamento via Pix" +
    "\nColherzinha? " +
    whats_colher +
    "" +
    mensagemCarrinho;
  var numeroWhatsApp = "5518996772619";
  var mensagemWhatsApp = encodeURIComponent(
    "Olá!, esse é meu pedido \u{1F609} \n" + detalhesPedido
  );
  var linkWhatsApp =
    "https://wa.me/" + numeroWhatsApp + "?text=" + mensagemWhatsApp;

  window.open(linkWhatsApp);
  alert('"ENVIAR COMPROVANTE DO PIX VIA WHATSAPP"')
});
env_cartao.addEventListener("click", function () {
  res_pagamento.innerHTML = "Pagamento via - CARTÃO";
  obs_pagamento.innerHTML = "Levar a maquininha!!";
  pagamentos.style.display = "none";
  final.style.display = "block";

  var mensagemCarrinho = "";
  var contped = 0;
  carrinho.forEach(function (element) {
    if (Array.isArray(element)) {
      contped += 1;
      mensagemCarrinho += "\n\nMontagem N° " + contped + "\n";
      mensagemCarrinho += formatarArrayWhats(element);
    } else {
      mensagemCarrinho += "- " + element + "\n";
    }
  });

  var tw = somarArray(valorCompra);
  var te = "";

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
    te = "Taxa de entrega R$" + dic[5] + ",00";
    tw = tw + dic[5];
  } else {
    te = "Taxa de entrega isento";
  }
  var vlr_total_whats = "R$" + tw + ",00";

  var detalhesPedido =
    "N° Pedido: " +
    numeroDoPedido +
    "\nCliente: " +
    dic[0] +
    "\nEndereço: " +
    dic[1] +
    "," +
    dic[2] +
    "\nTelefone: " +
    dic[3] +
    "\nRegião de entrega: " +
    dic[4] +
    "\nValor total: " +
    vlr_total_whats +
    "\nTaxa entrega: " +
    te +
    "\nLevar a maquininha" +
    "\nColherzinha? " +
    whats_colher +
    "" +
    mensagemCarrinho;
  var numeroWhatsApp = "5518996772619";
  var mensagemWhatsApp = encodeURIComponent(
    "Olá!, esse é meu pedido \u{1F609} \n" + detalhesPedido
  );
  var linkWhatsApp =
    "https://wa.me/" + numeroWhatsApp + "?text=" + mensagemWhatsApp;

  window.open(linkWhatsApp);
});
env_dinheiro.addEventListener("click", function (e) {
  e.preventDefault();
  var troco = document.getElementById("troco").value;
  res_pagamento.innerHTML = "Pagamento no DINHEIRO";
  obs_pagamento.innerHTML = troco;
  pagamentos.style.display = "none";
  final.style.display = "block";

  var mensagemCarrinho = "";
  var contped = 0;
  carrinho.forEach(function (element) {
    if (Array.isArray(element)) {
      contped += 1;
      mensagemCarrinho += "\n\nMontagem N° " + contped + "\n";
      mensagemCarrinho += formatarArrayWhats(element);
    } else {
      mensagemCarrinho += "- " + element + "\n";
    }
  });

  var tw = somarArray(valorCompra);
  var te = "";

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
    te = "Taxa de entrega R$" + dic[5] + ",00";
    tw = tw + dic[5];
  } else {
    te = "Taxa de entrega isento";
  }
  var vlr_total_whats = "R$" + tw + ",00";

  var detalhesPedido =
    "N° Pedido: " +
    numeroDoPedido +
    "\nCliente: " +
    dic[0] +
    "\nEndereço: " +
    dic[1] +
    "," +
    dic[2] +
    "\nTelefone: " +
    dic[3] +
    "\nRegião de entrega: " +
    dic[4] +
    "\nValor total: " +
    vlr_total_whats +
    "\nTaxa entrega: " +
    te +
    "\nDinheiro: Precisa de troco? " +
    troco +
    "\nColherzinha? " +
    whats_colher +
    "" +
    mensagemCarrinho;
  var numeroWhatsApp = "5518996772619";
  var mensagemWhatsApp = encodeURIComponent(
    "Olá!, esse é meu pedido \u{1F609} \n" + detalhesPedido
  );
  var linkWhatsApp =
    "https://wa.me/" + numeroWhatsApp + "?text=" + mensagemWhatsApp;

  window.open(linkWhatsApp);
});

function formatarArrayWhats(array) {
  var mensagem = "";
  array.forEach(function (element) {
    if (Array.isArray(element)) {
      mensagem += formatarArrayWhats(element).replace(/\n$/, "");
    } else {
      mensagem += " - " + element + "\n";
    }
  });
  return mensagem;
}

/*------Direcionar para o google maps------ */
var local = document.getElementById("local");
local.addEventListener("click", function () {
  window.open(url, "https://maps.app.goo.gl/mHvD2JghLmRjR9A78");
});

/*----varrer checkbox e contar adicionais------ */
function contagemValores() {
  const checkboxes = document.querySelectorAll('input[name"checkbox"]:checked');
  const valores_procurados = ["Leite_condensado", "Calda_Avela"];
  checkboxes.forEach(function (checkbox) {
    if (valores_procurados.includes(checkbox.value)) {
      valorCompra.push(2);
    }
  });
}

/*----GERAR QRCODE-------------- */
const cnpjPixKey = "43227642000130"; // Substitua pelo seu CNPJ fixo

function padStart(str, targetLength, padString) {
  targetLength = targetLength >> 0; // Truncate if number, or convert non-number to 0;
  padString = String(padString || " ");
  if (str.length > targetLength) {
    return String(str);
  } else {
    targetLength = targetLength - str.length;
    if (targetLength > padString.length) {
      padString += padString.repeat(targetLength / padString.length); // Append to original to ensure we are longer than needed
    }
    return padString.slice(0, targetLength) + String(str);
  }
}

function calculateCRC(payload) {
  let polinomio = 0x1021;
  let resultado = 0xffff;

  for (let byte of payload) {
    resultado ^= byte.charCodeAt(0) << 8;
    for (let bit = 0; bit < 8; bit++) {
      if ((resultado <<= 1) & 0x10000) resultado ^= polinomio;
      resultado &= 0xffff;
    }
  }

  return padStart(resultado.toString(16).toUpperCase(), 4, "0");
}

function formatField(id, value) {
  const length = value.length.toString().padStart(2, "0");
  return id + length + value;
}

function generateQRCode() {
  const amount = parseFloat(valorTotalFrete()).toFixed(2);

  const payloadFormatIndicator = formatField("00", "01");
  const pointOfInitiationMethod = formatField("01", "12");
  const merchantAccountInformation = formatField(
    "26",
    formatField("00", "BR.GOV.BCB.PIX") + formatField("01", cnpjPixKey)
  );
  const merchantCategoryCode = formatField("52", "0000");
  const transactionCurrency = formatField("53", "986");
  const transactionAmount = formatField("54", amount);
  const countryCode = formatField("58", "BR");
  const merchantName = formatField("59", "WanderleiJunior");
  const merchantCity = formatField("60", "TARUMA");
  const additionalDataFieldTemplate = formatField(
    "62",
    formatField("05", "***")
  );

  let pixPayload =
    payloadFormatIndicator +
    pointOfInitiationMethod +
    merchantAccountInformation +
    merchantCategoryCode +
    transactionCurrency +
    transactionAmount +
    countryCode +
    merchantName +
    merchantCity +
    additionalDataFieldTemplate +
    "6304";

  const crc = calculateCRC(pixPayload);
  pixPayload += crc;

  // Gerar QR Code
  QRCode.toCanvas(
    document.getElementById("qrcode"),
    pixPayload,
    function (error) {
      if (error) console.error(error);
      console.log("QR code gerado!");
    }
  );

  // Exibir payload para copiar e colar
  document.getElementById("pixCopyPaste").value = pixPayload;
}

function copyToClipboard() {
  const copyText = document.getElementById("pixCopyPaste");
  copyText.select();
  copyText.setSelectionRange(0, 99999); // Para dispositivos móveis
  document.execCommand("copy");

  navigator.clipboard.writeText(copyText.value).then(
    function () {
      alert("Qrcode copiado");
    },
    function (err) {
      alert("Erro ao copiar");
    }
  )
}

function valorTotalFrete(){
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
  return t
}

