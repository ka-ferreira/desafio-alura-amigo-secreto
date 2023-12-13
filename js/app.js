let nomesInseridos = [];
let nomesSorteados = [];
let min = 4;
for (let numero = 1; numero <= 100; numero++) {
    let resto = numero % 5;
    if (resto == 0) {
        console.log(numero);
    }
}
function adicionar () {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    if (nomeAmigo == '') {
        alert('Digite um nome.');
    } else if (nomesInseridos.includes(nomeAmigo)) {
        alert('Nome já existente na lista. Digite um nome diferente.');
    }else { 
        nomesInseridos.push(`${nomeAmigo}`);
        console.log(nomesInseridos);
        let listaNomes = document.getElementById('lista-amigos');
        listaNomes.innerHTML = nomesInseridos;
    }
    limparCampo();
    document.getElementById('nome-amigo').focus();
}

function sortear () {
    let tamanho = nomesInseridos.length;
    let i = 0;
    if (tamanho < min) {
        alert(`São necessários pelo menos ${min} pessoas para realizar o sorteio.`);
    } else {
        while (i < tamanho) {
            let indice = parseInt(Math.random() * tamanho);
            if (indice == i) {
                i = i;
            } else if (nomesSorteados.includes(nomesInseridos[indice])) {
                i = i;
            } else {
                nomesSorteados[i] = nomesInseridos[indice];
                i++;
            }
        }
        console.log(`Nomes inseridos: ${nomesInseridos} x Nomes Sorteados: ${nomesSorteados}`);
        exibirSorteio (tamanho);
    }
}

function exibirSorteio (tamanho) {
    let listaSorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < tamanho; i++) {
        listaSorteio.innerHTML = listaSorteio.innerHTML + `${nomesInseridos[i]} --> ${nomesSorteados[i]} <br>`;
        console.log(`${nomesInseridos[i]} --> ${nomesSorteados[i]}`);
    }
}

function reiniciar () {
    nomesInseridos = [];
    nomesSorteados = [];
    document.getElementById('nome-amigo').focus();
    listaNomes = document.getElementById('lista-amigos');
    listaNomes.innerHTML = '';
    listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = '';
}

function limparCampo () {
    nomeAmigo = document.getElementById('nome-amigo');
    nomeAmigo.value = '';
}