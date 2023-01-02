//EXEMPLO DE DESTRUCTURING USANDO OBJ

function rand({ min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

//const obj = {max: 50, min: 40} Pode passar o argumento da função para uma variavel OBJ e a partir daí OBJ se torna argumento. 
console.log(rand({min: 40, max: 50}))
console.log(rand({min: 1002}))// Dessa forma será imprimido 1000 ou 1001 pois no valor maximo ja esta definido por 1000.
