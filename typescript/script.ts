const fade: HTMLElement | null = document.getElementById('fade')
const modal: HTMLElement | null = document.getElementById('modal')
const textModal: HTMLElement | null = document.getElementById('res')
const divs = document.querySelectorAll<HTMLElement>('.input')
const inputEmail = document.getElementById('input-email') as HTMLInputElement | null
const inputPassword = document.getElementById('input-password') as HTMLInputElement | null
const iconPassword = document.getElementById("icon-password")
const form = document.getElementById('form') as HTMLFormElement | null

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

function esconderModal() {
    fade?.classList.add(classeHide)
    modal?.classList.add(classeHide)
}

function limparErro(indice: number):void {
    if (divs[indice]) divs[indice].style.borderBottom = clearBorda
}

function validarEmail(email: string) {
    const verificar = new RegExp(
        /^[a-zA-Z.-_]+@+[a-zA-Z]+\.+[a-zA-Z]]/
    )

    if (verificar.test(email)) {
        return true
    }

    return false
}

iconPassword!.addEventListener("click", () => {
    if (inputPassword!.getAttribute("type") === "password") {
        inputPassword!.setAttribute("type", "text")

        iconPassword!.classList.add("bi-eye-slash-fill")
        iconPassword!.classList.remove("bi-eye-fill")
    } else {
        inputPassword!.setAttribute("type", "password")

        iconPassword!.classList.add("bi-eye-fill")
        iconPassword!.classList.remove("bi-eye-slash-fill")
    }
})

form?.addEventListener('submit', (event) => {

    event.preventDefault()

    if (!validarEmail(inputEmail!.value)) {
        exibirErro(0)
        setTimeout(esconderModal, 2200)
        if (textModal) textModal.innerHTML = 'Digite um email valido!'
        return
    }

    if (!inputPassword?.value || inputPassword.value.length < 8) {
        exibirErro(1)
        setTimeout(esconderModal, 2200)
        if (textModal) textModal.innerHTML = 'Digite uma senha forte e segura'
        return
    }

    alert('Bem vindo de volta!')
    form?.submit()

})