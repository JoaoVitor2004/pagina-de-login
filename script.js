const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade')
const inputs = document.querySelectorAll('.input')
const form = document.getElementById('form')
const texto = document.getElementById('res')

function limparErroBorda(indice) {
    inputs[indice].style.borderBottom = ''
}

function exibirErro(indice){
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
    inputs[indice].style.borderBottom = '2px solid rgb(250, 67, 67)'
}

function limparErro() {
    setTimeout(() => {
        modal.classList.add('hide')
        fade.classList.add('hide')
    }, 2200)
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

    if (!validarEmail(inputs[0].value)) {
        exibirErro(0)
        limparErro()
        texto.innerHTML = 'Digite um email valido'
        return
    }

    if (inputs[1].value.length < 8) {
        exibirErro(1)
        limparErro()
        texto.innerHTML = 'Digite uma senha com no minimo 8 caracteres'
        return
    }

    alert('Bem vindo de volta')
    form.submit()

})