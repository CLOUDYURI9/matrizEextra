/*
5- Crie uma matriz 3x3 com entrada manual de
números. Em seguida, exiba a matriz na tela.
Nome: Yuri Dinato da Silva
*/
var teclado = require("prompt-sync")();

var matrizDois = new Array(3);
for (var i = 0; i < 3; i++) {
  
    matrizDois[i] = new Array(3);
    for (var j = 0; j < 3; j++) {
        var numero = parseInt(teclado("Digite o n\u00FAmero que vai estar no endere\u00E7o[".concat(i, ", ").concat(j, "]da matriz: ")));
        matrizDois[i][j] = numero;
    }
}

console.log(matrizDois);
