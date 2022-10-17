const longestWord = (par1) => {
const array = par1.split(' ');
let frase = array[0]
for (frases of array){
if (frase.length < frases.length){
frase = frases
}
}
console.log(frase)
}
longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu ')