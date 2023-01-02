{
    {
        {
            {
                var sera = 'Será????'//Atributos dentro de blocos
            }
        }
    }
}

console.log(sera)//Vai imprimir o que esta atribuido independente dos blocos entre o atributo.

function teste() {
    var local = 123 // Essa variavel só e visivel no escopo de função
    console.log(local)
}

teste()
console.log(local)
