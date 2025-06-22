// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total

const vendas = [{ cliente: "João", total: 100 }, { cliente: "Maria", total: 200 }, { cliente: "João", total: 300 }]

function agrupamentoPorPropriedade(vendas) {
    return vendas.reduce((acc, venda) => {
        if (acc[venda.cliente]) {
            acc[venda.cliente] += venda.total;
        } else {
            acc[venda.cliente] = venda.total;
        }
        return acc;
    }, {});
}

console.log(agrupamentoPorPropriedade(vendas));