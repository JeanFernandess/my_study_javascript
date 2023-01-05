const nome = 'Rebeca';
const concatenacao = 'Ola ' + nome + '!';
//Abaixo esta a definição de um template que é geralmente usado com variáveis.
const template = `          
Ola
${nome}!`

console.log(concatenacao, template);

//Interpolando expressões usando a tecnica do template

console.log(`1 + 1 = ${1 + 1}`);

//Usando templates em conjunto com funções arrow

const up = texto => texto.toUpperCase();
console.log(`Ei...  ${up('cuidado')}!`)
