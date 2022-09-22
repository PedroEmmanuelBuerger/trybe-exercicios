let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
let maiorNumero = 0
let valorImpar = 0
let array = []
let MenorNumero = numbers[0]
for (numeros of numbers) {
    console.log(numeros)
}
for (numeros2 of numbers) {
    soma = soma + numeros2
    if (maiorNumero < numeros2) {
        maiorNumero = numeros2
    }
    if (numeros2 % 2 !== 0) {
        valorImpar = valorImpar + 1
    }
    if (MenorNumero > numeros2) {
        MenorNumero = numeros2
    }
}
console.log(soma)
media = soma / numbers.length
console.log(media)
if (media > 20) {
    console.log('valor maior que 20')
}
console.log('maior valor ' + maiorNumero)
if (valorImpar != 0) {
    console.log('existem ' + valorImpar + ' numeros impares!')
}
else console.log('não existe valor impar')
console.log('menor numero ' + MenorNumero)

for (let index = 1; index <= 25; index++) {
    array.push(index)
    console.log(index / 2)
}
console.log(array)
