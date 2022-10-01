function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

//dia do calendario
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const lista = document.querySelector('#days')
for (let index = 0; index <= decemberDaysList.length - 1; index++) {
    li = document.createElement('li')
    li.innerHTML = decemberDaysList[index]
    li.className = 'day'
    lista.appendChild(li)
    if (decemberDaysList[index] == 24 || decemberDaysList[index] == 25 || decemberDaysList[index] == 31) {
        li.className += ' holiday'
    }
    if (decemberDaysList[index] == 4 || decemberDaysList[index] == 11 || decemberDaysList[index] == 18 || decemberDaysList[index] == 25) {
        li.className += ' friday'
    }
}
//
const botaoPai = document.querySelector('.buttons-container')
function feriados(botao) {
    let criarBotao = document.createElement('button')
    criarBotao.setAttribute('id', 'btn-holiday')
    criarBotao.innerHTML = botao
    botaoPai.appendChild(criarBotao)
}
feriados('feriados')

const holiday = document.getElementsByClassName('holiday')
function mudarCor() {
    for (i = 0; i <= holiday.length - 1; i = i + 1) {
        if (holiday[i].style.backgroundColor != 'yellow') {
            holiday[i].style.backgroundColor = 'yellow'
        }
        else {
            holiday[i].style.backgroundColor = 'rgb(238,238,238)'
        }
    }
}

document.querySelector('#btn-holiday').addEventListener('click', mudarCor)

feriados('sexta feira')
botaoPai.querySelectorAll('#btn-holiday')[1].setAttribute('id', 'btn-friday')

let sexta2 = 4
const sextas = document.getElementsByClassName('friday')
function mudarsexta() {
    for (index = 0; index <= sextas.length - 1; index = index + 1) {
        if (sextas[index].innerText != 'sextou!') {
            sextas[index].innerText = 'sextou!'
        }
        else {
            sextas[index].innerText = sexta2
        }
        sexta2 = sexta2 + 7
    }
    sexta2 = 4
}

document.querySelector('#btn-friday').addEventListener('click', mudarsexta)



let teste = document.querySelector('#days')
teste.addEventListener('mouseover', aumentar)
teste.addEventListener('mouseout', diminuir)
function aumentar(evento) {
    evento.target.style.fontSize = '50px'

}

function diminuir(evento2) {
    evento2.target.style.fontSize = '20px'
}

let mytask = document.querySelector('.my-tasks')
function tarefa(parametro) {
    let texto = document.createElement('span')
    texto.innerHTML = parametro
    mytask.appendChild(texto)
}
tarefa('pedro')

function mudarcortarefa(cor) {
    let corsinha = document.createElement('div')
    corsinha.className = ('task')
    corsinha.style.backgroundColor = cor
    mytask.appendChild(corsinha)
    a = cor
}

mudarcortarefa('rgb(180,100,20)')


let Task = document.querySelector('.my-tasks')
Task.addEventListener('click',function(event){
    if(event.target.className == 'task'){
        event.target.className = 'task selected'
    }else event.target.className = 'task'
})


let coratual = 'rgb(119, 119, 119)'
let tentativa = document.querySelector('.task')
tentativa.addEventListener('click', function(cortoda){
coratual = cortoda.target.style.backgroundColor
})
teste.addEventListener('click', function(testando){
 testando.target.style.color = coratual
})