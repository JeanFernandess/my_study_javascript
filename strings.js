const escola = "Cod3r"

console.log(escola.charAt(4))//A função charAt imprime o caracter o quarto caracter, no caso "r".
console.log(escola.charAt(5))// Irá imprimir o caracter vazio ou espaço.
console.log(escola.charCodeAt(3))// Retorna o código da tabela Unicode.
console.log(escola.indexOf('3'))// Retorna o indice do caracter 3.

console.log(escola.substring(0, 3))//Irá imprimir os caracteres dos indices 0 e 3.Menos o 3 caracter do terceiro indice.
console.log(escola.substring(1))//Vai imprimir os caracteres a partir do indice 1.

console.log("Escola".concat(escola).concat("!"));//Cocatena strings literais com variaveis.
console.log(escola.replace(3, "e"));//O que estive no indice 3 será substituido por "e".

console.log("Ana, Maria, Pedro".split(",")) //A função split converte uma cadeia de caracteres pra array.
