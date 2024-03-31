const botaoAbrir = document.querySelector('#abrir')
const botaoFechar = document.querySelector('#fechar')
const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade')
const input1 = document.querySelector('.int1')
const input2 = document.querySelector('.int2')

function limparClasse(){
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
    botaoFechar.classList.toggle('hide')
}

botaoAbrir.addEventListener('click', () => {

    if(input1.value === '' || input2.value === '') {
        alert('Complete todos os campos')
    } else {
        limparClasse()
    }

})

botaoFechar.addEventListener('click', () => {
    limparClasse()
})