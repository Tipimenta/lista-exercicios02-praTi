// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano) {
    if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
        if (mes === 2 && dia <= 29) {
            return true;
        }
    }
    if (mes === 2 && dia <= 28) {
        return true;
    }
    if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12 && dia <= 31) {
        return true;
    }
    if (mes === 4 || mes === 6 || mes === 9 || mes === 11 && dia <= 30) {
        return true;
    }
    return false;
}

console.log(ehDataValida(29, 2, 2020));