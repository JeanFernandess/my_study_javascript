const prod1 = {};//Ao usar só as chaves estamos declarando um objeto vazio.
prod1.nome = 'Celular ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; //Evitar atributos com espaços.

console.log(prod1);

//Abaixo mostra uma outra forma de declara/usar objetos.
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2);
