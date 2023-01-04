for(let i = 0;i < 10;i++){
    console.log(i)
}
//Apenas dentro do bloco que variavel i será visivel.

console.log('i =', i)//Declarando a variavel i com LET, i não ficara "visivel" fora do bloco for.
                     //Aqui vai dar erro de variavel não declarada.
