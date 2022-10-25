const acordando = () => {
  return "Acordando!!";
};
const cafe = () => {
  return "Bora Tomar Café!!";
};
const dormir = () => {
  return "Partiu dormir!!";
};
const doindThings = (parametro) =>{
const print = parametro();
return console.log(print);
}
doindThings(acordando)