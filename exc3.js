/*
3- Altere o código um(1) desse conteúdo para funcionar
com números e ter duas colunas.
Nome: Yuri Dinato da Silva
*/
console.clear();
var teclado = require("prompt-sync")();
var minhaMatriz = [];
var caixa = 2;
var espaco = 2;
for (var z = 0; z < caixa; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x < espaco; x++) {
        var n = teclado("Digite o n\u00FAmero que vai estar no ender\u00E7o [".concat(z, ", ").concat(x, "] da matriz: "));
        minhaMatriz[z][x] = n;
    }
}
console.log(minhaMatriz);
