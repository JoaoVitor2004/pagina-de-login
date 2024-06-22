const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade')
const divs = document.querySelectorAll('.input')
const inputEmail = document.querySelector('.int1')
const inputSenha = document.querySelector('.int2')
const form = document.getElementById('form')
const texto = document.getElementById('res')

function limparErroBorda(indice) {
    inputs[indice].style.borderBottom = ''
}

function exibirErro(indice){
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
    divs[indice].style.borderBottom = '2px solid rgb(250, 67, 67'
}

function limparErro(indice) {
    divs[indice].style.borderBottom = '2px solid white'
}

function validarEmail(email) {
    const resultado = new RegExp(
        /^[a-zA-Z._-]+@[a-zA-Z]+\.[a-zA-Z]/
    )

    if (resultado.test(email)) {
        return true
    }

    return false
}

form.addEventListener('submit', (remove) => {
        
    remove.preventDefault()

    if (!validarEmail(inputEmail.value)) {
        exibirErro(0)
        setTimeout(() => {
            modal.classList.add('hide')
            fade.classList.add('hide')
        }, 2200)
        texto.innerHTML = 'Digite um email valido'
        return
    }

    if (inputSenha.value.length < 8) {
        exibirErro(1)
        setTimeout(() => {
            modal.classList.add('hide')
            fade.classList.add('hide')
        }, 2200)
        texto.innerHTML = 'Digite uma senha com no minimo 8 caracteres'
        return
    }

    alert('Bem vindo de volta')
    form.submit()

})