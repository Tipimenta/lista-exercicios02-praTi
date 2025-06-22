// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, …], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort

const array = [{ nome: "lapis", preco: 2 }, { nome: "caneta", preco: 1 }, { nome: "borracha", preco: 0.5 }, { nome: "apontador", preco: 0.4 }]

function mapeamentoOrdenacao(array) {
    const nomes = array.map(produto => produto.nome);
    const precos = array.map(produto => produto.preco);
    precos.sort((a, b) => a - b);
    const nomesOrdenados = [];
    for (let i = 0; i < precos.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (precos[i] === array[j].preco) {
                nomesOrdenados.push(array[j].nome);
            }
        }
    }
    return nomesOrdenados;
}

console.log(mapeamentoOrdenacao(array)); 