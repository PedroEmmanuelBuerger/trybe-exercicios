let body = document.body
let um1 = document.createElement('h1')
body.appendChild(um1)
um1.innerText = 'Exercício - JavaScript DOM'
let main = document.createElement('main')
main.className = 'main-content'
body.appendChild(main)
let secao = document.createElement('section')
main.appendChild(secao)
secao.className = 'center-content'
let paragrafo = document.createElement('p')
secao.appendChild(paragrafo)
paragrafo.innerText = 'pedro é foda'
let secaoesquerda = document.createElement('section')
main.appendChild(secaoesquerda)
secaoesquerda.className = 'left-content'
let secaodireita = document.createElement('section')
main.appendChild(secaodireita)
secaodireita.className = 'right-content'
let imagem = document.createElement('img')
imagem.setAttribute('src', 'https://picsum.photos/200')
imagem.className = 'small-image'
secaoesquerda.appendChild(imagem)
let numeros = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
let lista = document.createElement('ol')
lista.setAttribute('id', 'orderned-list')
secaodireita.appendChild(lista)
for (let index = 0; index <= numeros.length - 1; index = index + 1) {
    let li = document.createElement('li')
    li.innerHTML = numeros[index]
    document.getElementById('orderned-list').appendChild(li)
}
let h31 = document.createElement('h3')
let h32 = document.createElement('h3')
let h33 = document.createElement('h3')
main.appendChild(h31)
main.appendChild(h32)
main.appendChild(h33)
um1.className = 'title'
h31.className = 'description'
h32.className = 'description'
h33.className = 'description'
let valor = document.querySelector('.main-content')
console.log(valor)
valor.removeChild(secaoesquerda)
let valor2 = document.querySelector('.right-content')
valor2.style.margin = 'auto'
let valor3 = document.querySelector('.center-content')
valor.style.backgroundColor = 'green'
lista.removeChild(lista.lastChild)
lista.removeChild(lista.lastChild)