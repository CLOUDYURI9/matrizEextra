/*
Fazer um programa que lê 10 valores, armazene 
em um array, e imprime o maior 
e o menor valores lidos.
Nome: Yuri Dinato da Silva
*/

const teclado = require(`prompt-sync`)();
let array: number[] = new Array(9);
let maior: number = 0;


for (let x = 0; x <= 9; x++) {
    array[x] = parseInt(teclado(`Digite o número do índice ${x}: `));

}

let menor: number = array[0];

for (let y = 0; y <= 9; y++) {
    if (array[y] > maior) {
        maior = array[y]
    }
    if (array[y] < menor) {
        menor = array[y]
    }
    else { }
}
console.log(`o maior número é ${maior}, e o menor número é: ${menor}`);