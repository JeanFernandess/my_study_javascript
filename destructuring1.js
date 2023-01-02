//Novo recurso do ecmas script 2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa  //Este e um exemplo de destructuring.

console.log(nome, idade)

const {nome: n, idade: i} = pessoa //Retira o que esta nos atributos de nome e idade e coloca nas variavei N e I.
console.log(n, i)

const {sobrenome, bemHumorado = true} = pessoa //Atribuindo valor padrão.Aonde não tem valor padrão o retorno é undefined.

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const {conta: { ag, num} } = pessoa
console.log(ag, num) //Fazer referencia a um objeto null ou undefined retorna erro.
