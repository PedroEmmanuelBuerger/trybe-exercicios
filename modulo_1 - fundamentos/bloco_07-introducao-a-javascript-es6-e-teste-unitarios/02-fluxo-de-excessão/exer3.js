const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};




const adicionarTurno = (par1, par2, par3) => {
  const novoObjeto = par1
  novoObjeto[par2] = par3
}
adicionarTurno(lesson2, 'turno', 'noite');



const listarKeys = (par1) => {
  const keys = Object.keys(par1)
}
listarKeys(lesson1)



const tamanhoObjecto = (par1) => {
  const tamanho = Object.keys(par1).length
}
tamanhoObjecto(lesson3)



const listarValores = (par1) => {
  const valor = Object.values(par1)
}
listarValores(lesson3)


let allLessons = Object.assign({}, { lesson1, lesson2, lesson3 })


const numeroEstudades = () => {
  const soma = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes
}
numeroEstudades()



const valorChave = (par1, par2) => {
  if (par1 == lesson1) {
    par1 = 0
  }
  else if (par1 == lesson2) {
    par1 = 1
  }
  else par1 = 2
  let valorIndice = Object.entries(allLessons)
  valorIndice = valorIndice[par1][1]
  valorIndiceFInal = Object.entries(valorIndice)
  let resultado = valorIndiceFInal[par2]
  // return console.log(resultado[1])
}
valorChave(lesson2, 0);



const verficiarentrada = (par1, par2, par3) => {
  const entradas = Object.keys(par1)
  let verdadeiro1 = false
  for (let valores of entradas) {
    if (valores == par2) {
      verdadeiro1 = true
    }
  }
  let verdadeiro2 = false
  const valoresDasChaves = Object.values(par1)
  for (let valores of valoresDasChaves) {
    if (valores == par3) {
      verdadeiro2 = true
    }
  }
  if (verdadeiro1 == true && verdadeiro2 == true) {
    // return console.log('true')
  }
  // return console.log('false')
}
verficiarentrada(lesson1, 'turno', 'manhã')


// const calculo = () =>{
// let numero = 0
// const valoreslicoes = Object.values(allLessons)
// let licao1 = Object.values(valoreslicoes[0])
// for (let valores of licao1){
// if (valores == 'Matemática'){
// numero = numero + licao1[1]
// }
// }
// let licao2 = Object.values(valoreslicoes[1])
// for (let valores of licao2){
// if (valores == 'Matemática'){
// numero = numero + licao2[1]
// }
// }
// let licao3 = Object.values(valoreslicoes[2])
// for (let valores of licao3){
// if (valores == 'Matemática'){
// numero = numero + licao3[1]
// }
// }
// return console.log(numero)
// }
// calculo()

const calculo = () => {
  let numero = 0
  let array = []
  let a = Object.values(allLessons)
  for (let i of a) {
    array.push(i)
  }
  for (let i = 0; i < 3; i = i + 1) {
    if (array[i].hasOwnProperty('materia') && array[i].materia == 'Matemática') {
      numero = numero + array[i].numeroEstudantes
    }
  }
  // return console.log(numero)
}
calculo()



const criarObjeto = (par1) => {
  let array = []
  let a = Object.values(allLessons)
  let aulas = []
  let alunos = 0
  for (let i of a) {
    array.push(i)
  }
  for (let i = 0; i < 3; i = i + 1) {
    if (array[i].hasOwnProperty('professor') && array[i].professor == par1) {
      aulas.push(array[i].materia)
      alunos = alunos + array[i].numeroEstudantes
    }
  }

  const relatorio = {
    professor: par1,
    aulas: aulas,
    estudantes: alunos
  }
  console.log(relatorio)
}
criarObjeto('Maria Clara')