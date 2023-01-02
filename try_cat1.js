function imprimirNomeGritando(obj){
    try{
    console.log(obj.nome.toUpperCase() + '!!!')

    } catch(e) {
        tratarErroLancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritando(obj)
