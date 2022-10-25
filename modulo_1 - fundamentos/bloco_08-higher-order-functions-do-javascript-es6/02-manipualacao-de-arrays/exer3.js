const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
const ordernar = people.sort((a,b) => {
const pessoaA = a.age
const pessoaB = b.age
return pessoaB - pessoaA
})
  
  console.log(people);


