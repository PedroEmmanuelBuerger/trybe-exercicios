const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
const resultado = arr.some((nomes) => nomes == name)
return resultado
};

console.log(hasName(names, 'José'));



const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
const resultado = Object.values(arr).every((pessoas) => pessoas.age >= minimumAge)
return resultado
  };
  
  console.log(verifyAges(people, 18));

  