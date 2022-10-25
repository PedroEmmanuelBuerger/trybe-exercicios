const newEmployees = (nome,nome2,nome3) => {
    const employees = {
      id1: NovaPessoa(nome), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: NovaPessoa(nome2), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: NovaPessoa(nome3), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  const NovaPessoa = (nome) =>{
return {
nome: nome,
email: `${nome}@trybe.com`
}
  }
// console.log(newEmployees('PedroEmmanuel', 'luizInacioDaSilva', 'EullerArron'))
const numero = 4
const sorteio = (numero, check) => {
const numeroGerado = Math.floor((Math.random() * 5) + 1);
return check(numero,numeroGerado)
}

const check = (numero,numeroGerado) => {
if (numero === numeroGerado){
return console.log('Parabens você venceu!')
}
return console.log('tente novamente')
}

sorteio(numero,check);

