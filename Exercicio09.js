// 9 Conversão Entre Formatos
// Escreva duas funções:
// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], … ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

const pares = [["chave1", 1], ["chave2", 2], ["chave3", 3]]

function paresParaObjeto(pares) {
    return pares.reduce((acc, par) => {
        acc[par[0]] = par[1];
        return acc;
    }, {});
}

function objetoParaPares(obj) {
    return Object.entries(obj);
}


console.log(paresParaObjeto(pares));
console.log(objetoParaPares(paresParaObjeto(pares)));
