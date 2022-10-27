const arrays = [["1", "2", "3"], [true], [4, 5, 6]];
const resultado = (par1) => par1.reduce((a, b) => a.concat(b));
// console.log(resultado(arrays));

const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const autores = (par1) => {
  const nomes = par1.map((Element) => Element.author.name);
  return nomes.reduce((a, b) => `${a} ${b}`);
};
// console.log(autores(books));

const idadeAutores = (par1) => {
  const idades = par1.map(
    (Element) => Element.releaseYear - Element.author.birthYear
  );
  return idades.reduce((a, b) => a + b) / idades.length;
};
// console.log(idadeAutores(books))

const livroMaiorNome = (par1) => {
  return par1
    .map((Element) => Element)
    .reduce((a, b) => (a.name.length > b.name.length ? a : b));
};
// console.log(livroMaiorNome(books))

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

const namesContainA = (par1, par2) => {
  let resultado = 0;
  const nomes = par1
    .map((Element) => Element)
    .reduce((a, b) => `${a} ${b}`)
    .toLowerCase()
    .split("");
  nomes.map((Element) =>
    Element === par2 ? (resultado += 1) : (resultado = resultado)
  );
  return resultado;
};
// console.log(namesContainA(names, "a"));

const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage(students, grades) {
  const media = grades.map((Element) => Element.reduce((a, b) => a + b) / Element.length);
  const criarAluno = students.map((Element, index) => {
    return {
      name: Element,
      media: media[index],
    };
  });
  return criarAluno
}
console.log(studentAverage(students, grades));
