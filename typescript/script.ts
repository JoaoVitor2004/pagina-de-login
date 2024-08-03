
const fade: HTMLElement | null = document.getElementById('fade')
const modal: HTMLElement | null = document.getElementById('modal')
const textModal: HTMLElement | null = document.getElementById('res')
const divs = document.querySelectorAll<HTMLElement>('.input')
const inputEmail: HTMLInputElement | null = document.getElementById('input-email') as HTMLInputElement | null
const inputPassword: HTMLInputElement | null = document.getElementById('input-password') as HTMLInputElement | null
const form: HTMLFormElement | null = document.getElementById('form') as HTMLFormElement | null


const inputElementPassword = inputPassword as HTMLElement | null

const classeHide: string = 'hide'
const comprimentoMinimoPassword: number = 8
const erroBorda: string = '2px solid red'
const clearBorda: string = '2px solid white'

function exibirErro(indice: number):void {
    fade?.classList.remove(classeHide)
    modal?.classList.remove(classeHide)
    if (divs[indice]) {
        divs[indice].style.borderBottom = erroBorda
    }
}

function limparErro(indice: number):void {
    if (divs[indice]) divs[indice].style.borderBottom = clearBorda
}

inputEmail?.addEventListener('input', () => limparErro(0))
inputPassword?.addEventListener('input', ()=> limparErro(1))

function esconderModal() {
    fade?.classList.add(classeHide)
    modal?.classList.add(classeHide)
}

form?.addEventListener('submit', (event) => {

    event.preventDefault()

    if (!inputEmail || inputEmail.value.trim() === '') {
        exibirErro(0)
        setTimeout(esconderModal, 2200)
        if (textModal) textModal.innerHTML = 'Digite um email valido!'
        return
    } 

    if (!inputEmail || inputEmail.value.trim() === '') {
        exibirErro(1)
        if (textModal) textModal.innerHTML = 'Digite uma senha forte e segura'
        setTimeout(esconderModal, 2200)
        return
    }

    alert('Bem vindo de volta!')
    form?.submit()

})