function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([60, 50])) //Exemplo com 2 argumentos
console.log(rand([900]))//Exemplo com 1 argumento
console.log(rand([, 900]))//Exemplo com o 2 argumento
console.log(rand())//Sem argumento gera um erro por tentar acessar argumentos não definidos.
