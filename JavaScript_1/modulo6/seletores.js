const mudarTextoTitulo = (h1) => {
    const titulo = document.getElementsByTagName('h1');
    titulo.textContent = "Novo Título";
}
const alterarEstiloDaLi = () => {
    const ElementosDaLista = document.querySelectorAll('.lista li');
    for (const item of ElementosDaLista) {
        item.style.color = "purple";
        item.style.backgroundColor = "#f0f0f0";
    }
}
const adicionaClasseParagrafos = () => {
    const paragrafos = document.querySelectorAll('p');
    for (const p of paragrafos) {
      p.classList.add('texto-principal');
    }
}
const alterarTextoBotao = () => {
    function alterarTextoBotao() {
        const botao = document.getElementById('botao');
        botao.textContent = 'Entrar';
    }
}