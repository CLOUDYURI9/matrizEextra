/*
Fazer um programa que lê 10 valores, armazene
em um array, e imprime o maior
e o menor valores lidos.
Nome: Yuri Dinato da Silva
*/
var teclado = require("prompt-sync")();
var array = new Array(9);
var maior = 0;
for (var x = 0; x <= 9; x++) {
    array[x] = parseInt(teclado("Digite o n\u00FAmero do \u00EDndice ".concat(x, ": ")));
}
var menor = array[0];
for (var y = 0; y <= 9; y++) {
    if (array[y] > maior) {
        maior = array[y];
    }
    if (array[y] < menor) {
        menor = array[y];
    }
    else { }
}
console.log("o maior n\u00FAmero \u00E9 ".concat(maior, ", e o menor n\u00FAmero \u00E9: ").concat(menor));
