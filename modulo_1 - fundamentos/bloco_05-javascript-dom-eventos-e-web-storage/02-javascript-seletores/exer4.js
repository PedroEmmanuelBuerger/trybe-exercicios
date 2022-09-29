let body = document.body
let um1 = document.createElement('h1')
body.appendChild(um1)
um1.innerText = 'Exercício - JavaScript DOM'
let main = document.createElement('main')
main.className = 'main-content'
body.appendChild(main)
let secao = document.createElement('section')
main.appendChild (secao)
secao.className = 'center-content'
let paragrafo = document.createElement('p')
secao.appendChild(paragrafo)
paragrafo.innerText = 'pedro é foda'
let secaoesquerda = document.createElement('section')
main.appendChild(secaoesquerda)
secaoesquerda.className= 'left-content'
let secaodireita = document.createElement('section')
main.appendChild(secaodireita)
secaodireita.className='right-content'
let imagem = document.createElement('img')

