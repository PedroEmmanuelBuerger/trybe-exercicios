const btn = document.getElementById('btn');
const contador = document.createElement('p');
contador.innerText = 0;
numero = 0;
const local = document.getElementById('local-contador');
local.appendChild(contador);
btn.addEventListener('click', () => {
    numero = numero + 1;
    contador.innerText = numero;
})

