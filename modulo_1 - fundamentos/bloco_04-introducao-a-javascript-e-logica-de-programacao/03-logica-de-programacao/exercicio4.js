let array = []
let maiornumero = 0;
for (let index = 2; index <= 50; index++) {
    array.push(index)
}
for (let index2 = 2; index2 < array.length; index2++) {
    let contador = 0;
    for (let index3 =2; index3 < index2; index3 +=1){
    if (index2 % index3 == 0) {
        contador =1;
    }
    if (index2 >1 && contador == 0 && index2 > maiornumero){
    maiornumero = index2
    }
}
}
console.log(maiornumero)