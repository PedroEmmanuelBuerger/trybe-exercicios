let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
numbers.sort(function (a, b) {
    return a - b
})
console.log('ordem drecesente: ' + numbers)
let crecente = []
for (let index = numbers.length - 1; index >= 0; index--) {
    crecente.push(numbers[index])
}
console.log('ordem cresente: ' + crecente)
