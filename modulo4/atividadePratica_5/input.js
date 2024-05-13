const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solicitarNumeroPrimo(retorno) {
    rl.question("Digite um número para verificar se é primo: ", (numero) => {
        rl.close();
        const num = parseInt(numero);
        if (!isNaN(num) && num > 1) {
            retorno(num);
        } else {
            console.log('Número inválido. Por favor, digite um número inteiro maior que 1.');
            solicitarNumeroPrimo(retorno);
        }
    });
}

function verificarPrimo(numero) {
    let primo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            primo = false;
            break;
        }
    }
    console.log(primo ? `${numero} é um número primo.` : `${numero} não é um número primo.`);
}

module.exports = { solicitarNumeroPrimo };

solicitarNumeroPrimo(verificarPrimo);
