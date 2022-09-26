let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log('Bem vinda(o),' + '' + info.personagem)

info.recorrente = 'sim'
console.log(info)

for (chaves in info) {
  console.log(chaves)
  console.log(info[chaves])
}

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'sim'
}
console.log(info.personagem + ' e ' + info2.personagem)
console.log(info.origem + ' e ' + info2.origem)
console.log(info.nota + ' e ' + info2.nota)
if (info.recorrente == info2.recorrente) {
  console.log('ambos recorrentes')
}
else console.log(info.nota + ' e ' + info2.nota)
