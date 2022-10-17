const factorial = (valor) =>{
let resultado = valor
for (let index = valor; index > 1 ; index = index - 1){
resultado = resultado * (index - 1)
}
console.log(resultado)
}
factorial(6);