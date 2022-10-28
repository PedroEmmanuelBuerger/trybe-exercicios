const person = {
  firstName: "João",
  lastName: "Jr II",
};

const otherPerson = {
  firstName: "Ivan",
  lastName: "Ivanovich",
  nationality: "Russian",
};
const { nationality = "Brazilian" } = person;
person.nationality = nationality;
const getNationality = ({ firstName, nationality }) =>
  `${firstName} is ${nationality}`;
console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));

const greeting = (user = "pessoa usuária") => console.log(`Welcome ${user}!`);
greeting(); // // Welcome pessoa usuária!

const multiply = (number, value = 2) => {
  return number * value;
};

console.log(multiply(8));
const numbers = [3, 12, 1, 21, 23];
const foundElements = numbers.find((element) => element > 10);
console.log(foundElements);

const products = [
    {
      name: 'laptop',
      price: 1000,
      id: 3,
    },
    {
      name: 'desktop',
      price: 1500,
      id: 2,
    },
    {
      name: 'phone',
      price: 500,
      id: 1,
    },
  ];
  
  console.log(products.sort());

  const adultos = [
    {
      peso: 100,
      altura: 1.85,
    },
    {
      peso: 90,
      altura: 1.72,
    },
    {
      peso: 79,
      altura: 1.99,
    },
  ];
  
  // IMC = Índice de Massa Corporal
  
  function IMC(adulto) {
    return parseFloat((adulto.peso/(Math.pow(adulto.altura,2))).toFixed(2));
  }
  
  console.log(adultos.map(IMC));
  