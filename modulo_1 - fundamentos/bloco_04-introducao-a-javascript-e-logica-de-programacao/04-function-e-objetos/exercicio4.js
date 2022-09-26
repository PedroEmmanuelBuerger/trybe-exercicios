let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};
for (key of leitor.livrosFavoritos) {
    chave = key
}
console.log('o livro favorito de ' + leitor.nome + ' se chama ' + chave.titulo)
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' Se chama  ' + leitor.livrosFavoritos[0].titulo)

leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
    }
)
let contador = 0;
for (chaves in leitor.livrosFavoritos){
contador = contador +1
}
console.log(leitor.nome + ' tem ' + contador + ' livros favoritos')