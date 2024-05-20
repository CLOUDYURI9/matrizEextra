/*
8- Crie uma matriz 4x4 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra.
Nome: Yuri Dinato da Silva
*/
var teclado = require("prompt-sync")();
var matrizDois = new Array(4);
var maior = 0;
for (var i = 0; i < 4; i++) {
   
    matrizDois[i] = new Array(4);
    for (var j = 0; j < 4; j++) {
        matrizDois[i][j] = (Math.floor(Math.random() * 20));
        if (matrizDois[i][j] > maior) {
            maior = matrizDois[i][j];
        }
    }
}
console.log(matrizDois);
function encontrarPosicao(matrizDois, elemento) {
    for (var i = 0; i < matrizDois.length; i++) {
        for (var j = 0; j < matrizDois[i].length; j++) {
            if (matrizDois[i][j] === elemento) {
                return [i, j];
            }
        }
    }
    return null;
}
var elemento = maior;
var posicao = encontrarPosicao(matrizDois, elemento);
if (posicao) {
    console.log("o maior n\u00FAmero \u00E9 ".concat(maior, " e est\u00E1 encontrado na posi\u00E7\u00E3o: [").concat(posicao[0], ", ").concat(posicao[1], "]"));
}
else {
    console.log('Elemento não encontrado');
}
