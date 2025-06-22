// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) {
  let timerId;
  return function(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}


function minhaFuncao() {
  console.log("DEBOUNCE ACABOU! A função foi executada.");
}
const funcaoComDebounce = debounce(minhaFuncao, 5000);

console.log("Vou chamar a função 5 vezes em um piscar de olhos...");

for (let i = 1; i <= 5; i++) {
  console.log(`- Tentativa de chamada número ${i}...`);
  funcaoComDebounce();
}

console.log("...Loop terminado. Agora, espere 5 segundo.");