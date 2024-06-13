/*
4- Altere o código dois(2) desse conteúdo para funcionar
com números, faça o teste se o laço de repetição
referente a linha da matriz chega criar a quarta linha, salve
dessa forma e anexe a atividade o arquivo .ts e um print
da tela do cmd(prompt command) com o resultado do
teste.
Nome: Yuri Dinato da Silva
*/

const teclado = require(`prompt-sync`)();

// declarando matriz usando o construtor Array limitando a 3 linhas

let matrizDois: number[][] = new Array(3);

for (let i = 0; i < 3; i++) {
    /* Cria um array vazio para preencher a linha correspondente ao i limitando a três linhas */
    matrizDois[i] = new Array(4);
    for (let j = 0; j < 4; j++) {
        // Atribuição via entrada de dados manual na variavel nome
        let numero : number = parseInt(teclado(`Digite o número que vai estar no endereço[${ i }, ${ j }]da matriz: `));
    // Atribui nome na minhaMatriz do endereço dado por iej matrizDois[i][j] = nome;
        matrizDois[i][j] = numero 
    }
}    
    // Imprime a matriz
    console.log(matrizDois);
