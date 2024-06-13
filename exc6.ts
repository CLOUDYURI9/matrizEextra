/*
6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela.
Nome: Yuri Dinato da Silva
*/
const teclado = require(`prompt-sync`)();
let matrizDois: number[][] = new Array(3);

for (let i = 0; i < 3; i++) {
   
    matrizDois[i] = new Array(3);
    for (let j = 0; j < 3; j++) {
        let numero : number = parseInt(teclado(`Digite o número que vai estar no endereço[${ i }, ${ j }]da matriz: `));
        if( numero >= 0 && numero < 10){
            matrizDois[i][j] = numero 
        }
       else{
            console.log(`Insira números somente de 0 a 9`);
            j--
       }   
    }
}    

    console.log(matrizDois);
