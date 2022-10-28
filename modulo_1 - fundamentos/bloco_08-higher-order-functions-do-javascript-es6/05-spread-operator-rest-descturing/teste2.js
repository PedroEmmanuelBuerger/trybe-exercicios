
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const pedro = {...user, ...jobInfos}

//   const {name,age,nationality,profession,squad,squadInitials } = pedro;
//   console.log(`Hi, my name is ${name}, i'm ${age} years old and i'm ${nationality}. I work as a ${profession} and my squad is ${squad}`)
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [saudacao,funcao] = saudacoes
// funcao(saudacao)

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
const [comidas,bebidas,animals] = [bebida,animal,comida]

console.log(bebidas,comidas,animals)

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
const [um,tres,cinco,seis,oito,dez,doze] = numerosPares
// console.log(seis,oito,dez,doze); 

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
// const person = {
//     name: 'João',
//     lastName: 'Jr',
//     age: 34,
//   };
  
  const { nationality = 'Brazilian' } = person;
//   console.log(nationality); // Brazilian
  
  const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

