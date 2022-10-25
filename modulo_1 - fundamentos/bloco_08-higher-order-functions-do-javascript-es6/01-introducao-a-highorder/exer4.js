const respostas = (par1,par2,par3) => {
const respostasCorretas = par1;
const respostasAluno = par2;
return par3(par1,par2);
}


const check = (par1,par2) => {
let contador = 0;
for (let index = 0; index < par1.length; index += 1){
if ( par1[index] === par2[index]){
contador += 1
}
else if (par2[index] == 'N.A'){
contador = contador
}
else contador -= 0.5
}
return contador
}
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(respostas(RIGHT_ANSWERS,STUDENT_ANSWERS,check))