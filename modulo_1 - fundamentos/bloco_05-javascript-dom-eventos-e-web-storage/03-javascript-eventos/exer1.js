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
for (let index = 0; index <= decemberDaysList.length -1; index++) {
    li = document.createElement('li')
    li.innerHTML = decemberDaysList[index]
    li.className = 'day'
    lista.appendChild(li)
    if (decemberDaysList[index] == 24 || decemberDaysList[index] == 25 || decemberDaysList[index] == 31 ){
    li.className += ' holiday'
    }
    if (decemberDaysList[index] == 4 || decemberDaysList[index] == 11 ||  decemberDaysList[index] ==18 || decemberDaysList[index] == 25){
    li.className += ' friday'
    }
}
//
