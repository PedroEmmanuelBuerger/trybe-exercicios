const numbers = [1,2,4,8,10];

const sumNumbers = (acc,curr) => acc + curr;

const resultado = numbers.reduce(sumNumbers);

console.log(resultado);

const reduces = numbers.reduce((acc,curr) => {
console.log(acc,curr)
return acc + curr
})

const a = 'pedro'

console.log(a.split(''))