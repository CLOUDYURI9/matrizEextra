console.clear();
var teclado = require("Prompt-sync")();
var minhaMatriz = []; // declarando matriz
var caixa = 2;
var espaco = 3;
for (var z = 0; z < caixa; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x < espaco; x++) {
        var nome = teclado("Digite o nome que vai estar no ender\u00E7o [".concat(z, ", ").concat(x, "] da matriz: "));
        minhaMatriz[z][x] = nome;
    }
}
console.log(minhaMatriz);
