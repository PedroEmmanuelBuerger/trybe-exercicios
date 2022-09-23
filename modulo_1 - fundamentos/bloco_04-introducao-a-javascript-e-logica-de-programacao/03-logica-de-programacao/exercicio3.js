
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorQuantidade = array[0]
for (let index = 0; index < array.length; index++) {
    if (array[index].length > maiorQuantidade.length) {
        maiorQuantidade = array[index]
    }
}
console.log(maiorQuantidade)