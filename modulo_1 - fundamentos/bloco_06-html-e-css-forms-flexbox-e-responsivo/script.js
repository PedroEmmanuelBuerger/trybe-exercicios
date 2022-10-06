const botao = document.getElementById('botao');
function botaoParar(evento) {
evento.preventDefault();
}
botao.addEventListener('click', botaoParar)