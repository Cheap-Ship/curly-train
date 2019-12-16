document.getElementById("description").setAttribute("required", "");
document.getElementById("quantity").setAttribute("required", "");
let q;

function Add()
{
    let tabela = document.createElement("tr");
    let descricao = document.createElement("td");
    let quantidade = document.createElement("td");
    let botao = document.createElement("button");
    botao.innerHTML = "Remover";
    botao.onclick = function() {Remove()}
    document.getElementById("products").appendChild(tabela);
    tabela.appendChild(descricao);
    tabela.appendChild(quantidade);
    tabela.appendChild(botao);
    descricao.appendChild(document.createTextNode(document.getElementById("description").value));
    q = document.getElementById("quantity").value;
    let caixa = document.createElement("input");
    quantidade.appendChild(caixa);
    caixa.value = q;
    caixa.onfocus = function() {Quant()};
    caixa.onchange = function() {Mudar()};
    document.getElementById("total").innerHTML = parseInt(document.getElementById("total").innerHTML) + parseInt(q);
    document.getElementById("description").value = "";
    document.getElementById("quantity").value = "";
}

function Remove()
{
    let parent = document.getElementById("products");
    let linha = document.activeElement.parentElement;
    q = linha.children[1].firstChild.value;
    parent.removeChild(linha);
    document.getElementById("total").innerHTML = parseInt(document.getElementById("total").innerHTML) - parseInt(q);
}

function Quant()
{
    q = document.activeElement.value;
}

function Mudar()
{
    document.getElementById("total").innerHTML = parseInt(document.getElementById("total").innerHTML) - parseInt(q);
    q = document.activeElement.value;
    document.getElementById("total").innerHTML = parseInt(document.getElementById("total").innerHTML) + parseInt(q);
}