const ships = [
    {
      name: 'Titanic',
      length: 269.1,
      measurementUnit: 'meters',
    },
    {
      name: 'Queen Mary 2',
      length: 1132,
      measurementUnit: 'feet',
    },
    {
      name: 'Yamato',
      length: 256,
      measurementUnit: 'meters',
    },
       // measurementUnit: unidade de medida
  ];
  
  // escreva shipLength abaixo
  const shipLength = ({name,length,measurementUnit}) => {
return `${name} is ${length + ' ' + measurementUnit} long`
  }
  // retorno esperado
//   console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
//   console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
//   console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

  // escreva greet abaixo
const greet = (par1,par2 = 'hi') => {
return (par2 === 'hi') ? `${par2}  ${par1}` : `${par2}  ${par1}`
}
// Retornos esperados:
// console.log(greet('John')); // 'Hi John'
// console.log(greet('John', 'Good morning')); // 'Good morning John'
// console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'


const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };
  // yearSeasons: estações do ano.
  const {spring,summer,autumn,winter} = yearSeasons

const meses = [...spring,...summer,...autumn,...winter]
console.log(meses)