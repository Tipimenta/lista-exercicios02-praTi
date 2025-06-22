// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

function somaLenta(a, b) {
  for (let i = 0; i < 1000000000; i++) {}
  return a + b;
}

const somaMemoizada = memoize(somaLenta);


console.log('\nPrimeira chamada com (5, 10) ---');
console.time('Primeira chamada');
console.log('Resultado:', somaMemoizada(5, 10));
console.timeEnd('Primeira chamada');

console.log('\nSegunda chamada com os MESMOS argumentos (5, 10) ---');
console.time('Segunda chamada');
console.log('Resultado:', somaMemoizada(5, 10));
console.timeEnd('Segunda chamada');