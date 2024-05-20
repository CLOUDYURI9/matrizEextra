/*
8- Crie uma matriz 4x4 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra.
Nome: Yuri Dinato da Silva
*/


const teclado = require(`prompt-sync`)();
let matrizDois: number[][] = new Array(4);
let maior = 0;

for (let i = 0; i < 4; i++) {

    matrizDois[i] = new Array(4);
    for (let j = 0; j < 4; j++) {
        matrizDois[i][j] = (Math.floor(Math.random() * 20))
        if (matrizDois[i][j] > maior) {
            maior = matrizDois[i][j];

        }
    }
}
console.log(matrizDois)

function encontrarPosicao(matrizDois: number[][], elemento: number): [number, number] | null {
    for (let i = 0; i < matrizDois.length; i++) {
        for (let j = 0; j < matrizDois[i].length; j++) {
            if (matrizDois[i][j] === elemento) {
                return [i, j];
            }
        }
    }
    return null;
}

const elemento: number = maior;
const posicao = encontrarPosicao(matrizDois, elemento);
if (posicao) {
    console.log(`o maior número é ${maior} e está encontrado na posição: [${posicao[0]}, ${posicao[1]}]`);
} else {
    console.log('Elemento não encontrado');
}

