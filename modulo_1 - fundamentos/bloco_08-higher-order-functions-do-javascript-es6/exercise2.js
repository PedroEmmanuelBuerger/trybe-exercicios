const people = [
  {
    name: "Nicole",
    bornIn: 1992,
    nationality: "Australian",
  },
  {
    name: "Harry",
    bornIn: 2008,
    nationality: "Australian",
  },
  {
    name: "Toby",
    bornIn: 1901,
    nationality: "Australian",
  },
  {
    name: "Frida",
    bornIn: 1960,
    nationality: "Dannish",
  },
  {
    name: "Fernando",
    bornIn: 2001,
    nationality: "Brazilian",
  },
  // bornIn: nascido em
];

// escreva filterPeople abaixo
const filterPeople = (people) => {
  const filtro = people.map((Element) => {
    const { name, bornIn, nationality } = Element;
    if (bornIn < 2000 && bornIn > 1991 && nationality === "Australian"){return Element}
  }).filter((Element) => Element !== undefined)
  return filtro
};
// console.log(filterPeople(people));

const myList = [5, 2, 3];
const [cinco,dois,tres] = myList;
// console.log(tres,dois,cinco)

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const newCar = ([nome,marca,ano]) => {
return {
nome,
marca,
ano,
}
}
console.log(newCar(palio))