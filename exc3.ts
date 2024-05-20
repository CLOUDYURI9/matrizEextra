/*
3- Altere o código um(1) desse conteúdo para funcionar
com números e ter duas colunas.
Nome: Yuri Dinato da Silva
*/

console.clear();
const teclado = require(`Prompt-sync`)();

let minhaMatriz: number[][] = [];
let caixa = 2
let espaco = 2

for ( let z = 0; z < caixa; z++) {
    minhaMatriz[z]= [];

    for ( let x = 0; x < espaco; x++){
        let n: number = teclado(`Digite o número que vai estar no enderço [${z}, ${x}] da matriz: `)

        minhaMatriz[z][x] = n;
    }
}
console.log(minhaMatriz)