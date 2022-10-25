const expectedResult = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: { name: "George R. R. Martin", birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: { name: "Stephen King", birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: { name: "Frank Herbert", birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: { name: "J. R. R. Tolkien", birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: { name: "Isaac Asimov", birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: { name: "H. P. Lovecraft", birthYear: 1890 },
    releaseYear: 1928,
  },
];

function everyoneWasBornOnSecXX(people) {
  const resultado = people.every(
    (par1) => par1.author.birthYear > 1901 && par1.author.birthYear < 2000
  );
  return resultado;
}
// console.log(everyoneWasBornOnSecXX(expectedResult))

function someBookWasReleaseOnThe80s(people) {
  let resultado = false;
  const livros = Object.values(people);
  livros.forEach((par1) => {
    if (par1.releaseYear > 1980 && par1.releaseYear < 2000) {
      resultado = true;
    }
  });
  return resultado;
}
//   console.log(someBookWasReleaseOnThe80s(expectedResult))

function authorUnique(autor) {
let resultado = false
  const autores = Object.values(autor);
  const data = [];
  autores.forEach((par1) => {
    data.push(par1.author.birthYear);
  });
const descrecente = data.sort((a, b) => a - b)
for (let index = 0; index <data.length; index += 1){
if (data[index] === data[index + 1]){
resultado = true
}
}
return resultado
}

console.log(authorUnique(expectedResult));
