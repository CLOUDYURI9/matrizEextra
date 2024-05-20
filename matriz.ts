//Nome: Yuri Dinato da Silva
console.clear();
const teclado = require(`Prompt-sync`)();

let minhaMatriz: string[][] = []; // declarando matriz
let caixa = 2
let espaco =3

for ( let z = 0; z < caixa; z++) {
    minhaMatriz[z]= [];

    for ( let x = 0; x < espaco; x++){
        let nome: string = teclado(`Digite o nome que vai estar no enderço [${z}, ${x}] da matriz: `)

        minhaMatriz[z][x] = nome;
    }
}
console.log(minhaMatriz)
