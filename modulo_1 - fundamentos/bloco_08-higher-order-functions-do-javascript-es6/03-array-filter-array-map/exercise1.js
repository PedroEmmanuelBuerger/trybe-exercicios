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

const formatedBookNames = (antigoArray) => {
  const resultado = antigoArray.map((element) => {
    return `nome:${element.name} genêro:${element.genre} nome do livro:${element.author.name}`;
  });
  return resultado;
};

// console.log(formatedBookNames(books))

const nameAndAge = (livros) => {
  const objeto = livros.map((element) => {
    const conta = element.releaseYear - element.author.birthYear;
    return { age: conta, author: element.author.name };
  });
  return objeto.sort((a, b) => {
    const idadeA = a.age;
    const idadeB = b.age;
    return idadeA - idadeB;
  });
};
// console.log(nameAndAge(books));

const fantasyOrScienceFinction = (livros) => {
  const resultado = livros.filter((element) => {
    return (
      element.genre === "Ficção Científica" || element.genre === "Fantasia"
    );
  });
  return resultado;
};
// console.log(fantasyOrScienceFinction(books))

const oldBooksOrdered = (livros) => {
  const resultado = livros.filter((element) => 2022 - element.releaseYear >= 60);
  return resultado.sort((a, b) => {
    const idadeA = a.releaseYear;
    const idadeB = b.releaseYear;
    return idadeA - idadeB;
  });
};
// console.log(oldBooksOrdered(books));

const fantasyOrScienceFinctionAuthors = (livros) => {
const arrayResultado = []
const resultado = livros.map((livros) => {
if (livros.genre === "Ficção Científica" || livros.genre === "Fantasia"){
return arrayResultado.push(livros.author.name)
}
})
return arrayResultado.sort()
}

// console.log(fantasyOrScienceFinctionAuthors(books));

const oldBooks = (livros) => {
const resultado = livros.filter((element) => 2022 - element.releaseYear >= 60);
return resultado.map((element) => element.name)
}
// console.log(oldBooks(books))


 
// const autorwith3dots = (livros) => {
// const resultado = livros.find((element) => {
// const nome = element.author.name
// return nome[1] === '.' && nome[4] === '.' && nome[7] === '.'
// })
// return resultado.name
// }
// console.log(autorwith3dots(books));

const autorwith3dots = (livros) => {
const resultado = livros.find((element) => {
const valor = element.author.name.split(' ')
return valor.filter((element) => {
return element.endsWith('.')
}).length === 3


})
return resultado.name
}

console.log(autorwith3dots(books))

