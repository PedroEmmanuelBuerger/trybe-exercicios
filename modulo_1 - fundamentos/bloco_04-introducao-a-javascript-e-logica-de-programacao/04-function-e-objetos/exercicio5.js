function palimdromo(par) {
    let certo = par
    let aoContrario = ''
    for (let index = par.length - 1; index >= 0; index--) {
        aoContrario = aoContrario + par[index]
    }
    if (certo == aoContrario) {
        return console.log('isso é um palimdromo');
    }
    else console.log('isso não é um palimdromo')
}
palimdromo('jesue')

function maiorValor(max) {
    let array = max
    let maior = array[0]
    for (chaves of array) {
        if (maior < chaves) {
            maior = chaves
        }
    }
    return console.log(maior)
}
maiorValor([2, 3, 6, 7, 10, 1])

function menorValor(max) {
    let array = max
    let maior = array[0]
    for (chaves of array) {
        if (maior > chaves) {
            maior = chaves
        }
    }
    return console.log(maior)
}
menorValor([2, 3, 6, 7, 10, 1])