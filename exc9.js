/*
9- Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.
Nome: Yuri Dinato da Silva
*/
var teclado = require("prompt-sync")();
var sumArray = [];
var matrizDois = new Array(6);
var resultado = 0;
for (var i = 0; i < 6; i++) {
    matrizDois[i] = new Array(2);
    for (var j = 0; j < 6; j++) {
        var numero = parseInt(teclado("Digite o n\u00FAmero que vai estar no endere\u00E7o[".concat(i, ", ").concat(j, "]da matriz: ")));
        matrizDois[i][j] = numero;
        resultado += numero;
    }
}
console.log("A soma de todos os n\u00FAmeros \u00E9 ".concat(resultado));
