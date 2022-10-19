const p = document.getElementById('result');
const btn = document.getElementById('button');

const validar = (value1,value2) =>{
if (isNaN(value1) || isNaN(value2)) {
  throw new Error('Os valores devem ser numéricos');
}
else if (value1 == '' || value2 == ''){
  throw new Error('ambos os campos devem ser preenchidos')
};
}

const soma = (value1,value2) =>{
try{
value1 = document.getElementById('value1').value;
value2 = document.getElementById('value2').value;
validar(value1,value2)
const soma = Number(value1) + Number(value2)
p.innerHTML = soma;
}
catch(e){
alert(e.message)
}
};

btn.addEventListener('click', soma);
