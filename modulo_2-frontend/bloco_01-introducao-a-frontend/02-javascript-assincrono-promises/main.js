import './style.css'
import sweetalert from 'sweetalert2'
import Swal from 'sweetalert2';
const imagemLocal = document.getElementById('imagem');
const botao = document.getElementById('botao');
const nome = document.getElementById('nome');

const numeroaleatorio = () => {
  return Math.floor(Math.random() * 1000) + 1
}
const url = `https://www.superheroapi.com/api.php/3276834285899830`
botao.addEventListener('click', (event) => {
  event.preventDefault();
  const id = numeroaleatorio();
  fetch(`https://www.superheroapi.com/api.php/3276834285899830/${id}`)
    .then((result) => result.json())
    .then((data) => {
      imagemLocal.src = data.image.url
      nome.innerText = data.name;
      console.log(data)
    })
    .catch((error) => Swal.fire({
      icon: 'error',
      title: '404',
      text: 'Heroi não encontrando',
      footer: '<a href="">Why do I have this issue?</a>'
    }))
})
