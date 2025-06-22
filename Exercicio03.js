// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.


function palavrasUnicas(frase) {
    const palavras = frase.split(" ");
    const palavrasUnicas = [];
    for (let i = 0; i < palavras.length; i++) {
        if (!palavrasUnicas.includes(palavras[i])) {
            palavrasUnicas.push(palavras[i]);
        }
    }
    return palavrasUnicas;
}

console.log(palavrasUnicas("olá olá tiago terra uol mundo mundo"));