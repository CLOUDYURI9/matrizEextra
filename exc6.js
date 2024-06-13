/*
6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela.
Nome: Yuri Dinato da Silva
*/
var teclado = require("prompt-sync")();
var matrizDois = new Array(3);
for (var i = 0; i < 3; i++) {
   
    for (var j = 0; j < 3; j++) {
        var numero = parseInt(teclado("Digite o n\u00FAmero que vai estar no endere\u00E7o[".concat(i, ", ").concat(j, "]da matriz: ")));
        if (numero >= 0 && numero < 10) {
            matrizDois[i][j] = numero;
        }
        else {
            console.log("Insira n\u00FAmeros somente de 0 a 9");
            j--;
        }
    }
}
console.log(matrizDois);
