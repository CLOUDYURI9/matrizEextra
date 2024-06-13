/*
9- Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.
Nome: Yuri Dinato da Silva
*/
var teclado = require("prompt-sync")();
var resultado = 0;
var matrizDois = new Array(6);
for (var i = 0; i < 6; i++) {
    matrizDois[i] = new Array(6);
    for (var j = 0; j < 6; j++) {
        var numero = parseInt(teclado("Digite o n\u00FAmero que vai estar no endere\u00E7o[".concat(i, ", ").concat(j, "]da matriz: ")));
        matrizDois[i][j] = numero;
        if (j == 0 || j == 2 || j == 4 || j == 6) {
            resultado += matrizDois[i][j];
        }
    }
}
console.log(matrizDois);
console.log("A soma das colunas pares \u00E9 ".concat(resultado));
