// const students = [
//     { name: 'Maria', grade: 70, approved: '' },
//     { name: 'José', grade: 56, approved: '' },
//     { name: 'Roberto', grade: 90, approved: '' },
//     { name: 'Ana', grade: 81, approved: '' },
//   ];
  
//   function verifyGrades() {
//     for (let index = 0; index < students.length; index += 1) {
//       const student = students[index];
//       if (student.grade >= 60) {
//         student.approved = 'Aprovado';
//       } else {
//         student.approved = 'Recuperação';
//       }
//     }
//   }
  
//   verifyGrades();
  
//   console.log(students);

// const students = [
//     { name: 'Maria', grade: 70, approved: '' },
//     { name: 'José', grade: 56, approved: '' },
//     { name: 'Roberto', grade: 90, approved: '' },
//     { name: 'Ana', grade: 81, approved: '' },
//   ];
  
//   function verifyGrades() {
//     students.forEach((student, index) => {
//       if (student.grade >= 60) {
//         students[index].approved = 'Aprovado';
//       } else {
//         students[index].approved = 'Recuperação';
//       }
//     });
//   }
  
//   verifyGrades();
  
//   console.log(students);

//   const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
// const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

// console.log(firstMultipleOf5);
// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
// arrayOfValues.forEach((element) => {
//   console.log('Cada elemento do array:', element);
// });
// arrayOfValues - Nome do array que será percorrido;
// .forEach - A HOF pode ser .find, .some, .every;
// element - Valor do elemento do array;
// (element) => {console.log('Cada elemento do array:', element); - função a ser executada.const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
    console.log('Cada elemento do array:', element);
    console.log('Index, posição do elemento:', indexOfTheArray);
    console.log('Array percorrido:', theEntireArray);
  });const numbers = [19, 21, 30, 3, 45, 22, 15];

  const verifyEven = (number) => number % 2 === 0;
  
  const isEven = numbers.find(verifyEven);
  
  console.log(isEven); // 30
  
  console.log(verifyEven(9)); // False
  console.log(verifyEven(14)); // True
  
  // Outra forma de ser realizada sem a necessidade de criar uma nova função.
  const isEven2 = numbers.find((number) => number % 2 === 0);
  
  console.log(isEven2); // 30

  const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter && console.log(name));

(verifyFirstLetter('J', listNames)); // true
(verifyFirstLetter('x', listNames)); // false

const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).every((grade) => grade === 'Aprovado')
  );
  
  console.log(verifyGrades(grades));

  const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]