/*
9- Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.
Nome: Yuri Dinato da Silva
*/


const teclado = require(`prompt-sync`)();
let resultado: number = 0;
let matrizDois: number[][] = new Array(6);

for (let i = 0; i < 6; i++) {

    matrizDois[i] = new Array(6);
    for (let j = 0; j < 6; j++) {
        let numero: number = parseInt(teclado(`Digite o número que vai estar no endereço[${i}, ${j}]da matriz: `));
        matrizDois[i][j] = numero;

        if (j == 0 || j == 2 || j == 4 || j == 6) {
            resultado += matrizDois[i][j];
        }
    }
}

console.log(`A soma das colunas pares é ${resultado}`);