const numbers = [18,19,23,53,4,5,76,23,54];

// const oddNumbers = numbers.filter((Element) => Element % 2 === 0)
// const resultado = oddNumbers.reduce((acc,curr) => acc + curr)
// console.log(resultado)

const reduzir = (carr, curr) => ((curr % 2 === 0) ? carr + curr : carr
)

const soma = (Array) => Array.reduce(reduzir,0)
console.log(soma(numbers))