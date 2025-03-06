const fade: HTMLElement | null = document.getElementById('fade')
const modal: HTMLElement | null = document.getElementById('modal')
const textModal: HTMLElement | null = document.getElementById('res')
const divs = document.querySelectorAll<HTMLElement>('.input')
const inputEmail = document.getElementById('input-email') as HTMLInputElement | null
const inputPassword = document.getElementById('input-password') as HTMLInputElement | null
const iconPassword = document.querySelector("#icon-password")
const form = document.getElementById('form') as HTMLFormElement | null

const classeHide: string = 'hide'
const comprimentoMinimoPassword: number = 8
const erroBorda: string = '2px solid red'
const clearBorda: string = '2px solid white'

function exibirErro(): void {
    fade?.classList.remove(classeHide)
    modal?.classList.remove(classeHide)
    if (divs) {
        divs.forEach((div) => div.style.borderBottom = "2px solid red")
    }
    setTimeout(() => {
        fade?.classList.add(classeHide)
        modal?.classList.add(classeHide)
    }, 2200)
}

function limparErro(indice: number): void {
    if (divs[indice]) divs[indice].style.borderBottom = clearBorda
}

function validarEmail(email: string): void {

    if (!email.match(/\w+@+[a-zA-Z]+\.+[a-zA-Z]/)) {
        throw new Error("Digite um email válido")
    }

}

function validarSenha(password: string): void {
    if (
        password.length < 8 ||
        !password.match(/\w/) ||
        !password.match(/\W/)
    ) {
        throw new Error("Senha invalida")
    }
}

iconPassword?.addEventListener("click", () => {
    if (inputPassword) {

        const tipo = inputPassword.type

        if (tipo === "password") {
            inputPassword.type = "text"
        } else {
            inputPassword.type = "password"
        }
    }
})

form?.addEventListener('submit', (event) => {

    event.preventDefault()

    try {
        validarEmail(inputEmail!.value)
        validarSenha(inputPassword!.value)
    } catch (error) {
        exibirErro()

        if (error instanceof Error) {
            if (textModal) textModal.innerHTML = error!.message
        }

        return
    }

    alert('Bem vindo de volta!')
    form?.submit()

})