/*
9- Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.
Nome: Yuri Dinato da Silva
*/

const teclado = require(`prompt-sync`)();


let sumArray: number[][] = [];
let matrizDois: number[][] = new Array(6);
let resultado: number = 0;
for (let i = 0; i < 6; i++) {
    
    matrizDois[i] = new Array(2);
    for (let j = 0; j < 6; j++) {
        let numero : number = parseInt(teclado(`Digite o número que vai estar no endereço[${ i }, ${ j }]da matriz: `));
        matrizDois[i][j] =  numero
        resultado += numero
        
        
    }

}
console.log(`A soma de todos os números é ${resultado}`)


