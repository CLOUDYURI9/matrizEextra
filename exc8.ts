/*
8- Crie uma matriz 4x4 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra.
Nome: Yuri Dinato da Silva
*/


const teclado = require(`prompt-sync`)();
let matrizDois: number[][] = new Array(4);
let maior = 0;
let coluna = 0;
let linha = 0;


for (let i = 0; i < 4; i++) {

    matrizDois[i] = new Array(4);
    for (let j = 0; j < 4; j++) {
        matrizDois[i][j] = (Math.floor(Math.random() * 20))
        if (matrizDois[i][j] > maior) {
            maior = matrizDois[i][j];
            coluna = j;
            linha = i;
        }
    }
}

console.log(`o maior número é ${maior} e está encontrado na posição: [${linha}, ${coluna}]`);
