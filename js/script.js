"use strict";
const fade = document.getElementById('fade');
const modal = document.getElementById('modal');
const textModal = document.getElementById('res');
const divs = document.querySelectorAll('.input');
const inputEmail = document.getElementById('input-email');
const inputPassword = document.getElementById('input-password');
const iconPassword = document.querySelector("#icon-password");
const form = document.getElementById('form');
const classeHide = 'hide';
const comprimentoMinimoPassword = 8;
const erroBorda = '2px solid red';
const clearBorda = '2px solid white';
function exibirErro() {
    fade === null || fade === void 0 ? void 0 : fade.classList.remove(classeHide);
    modal === null || modal === void 0 ? void 0 : modal.classList.remove(classeHide);
    if (divs) {
        divs.forEach((div) => div.style.borderBottom = "2px solid red");
    }
    setTimeout(() => {
        fade === null || fade === void 0 ? void 0 : fade.classList.add(classeHide);
        modal === null || modal === void 0 ? void 0 : modal.classList.add(classeHide);
    }, 2200);
}
function limparErro(indice) {
    if (divs[indice])
        divs[indice].style.borderBottom = clearBorda;
}
function validarEmail(email) {
    if (!email.match(/\w+@+[a-zA-Z]+\.+[a-zA-Z]/)) {
        throw new Error("Digite um email válido");
    }
}
function validarSenha(password) {
    if (password.length < 8 ||
        !password.match(/\w/) ||
        !password.match(/\W/)) {
        throw new Error("Senha invalida");
    }
}
iconPassword === null || iconPassword === void 0 ? void 0 : iconPassword.addEventListener("click", () => {
    if (inputPassword) {
        const tipo = inputPassword.type;
        if (tipo === "password") {
            inputPassword.type = "text";
        }
        else {
            inputPassword.type = "password";
        }
    }
});
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => {
    event.preventDefault();
    try {
        validarEmail(inputEmail.value);
        validarSenha(inputPassword.value);
    }
    catch (error) {
        exibirErro();
        if (error instanceof Error) {
            if (textModal)
                textModal.innerHTML = error.message;
        }
        return;
    }
    alert('Bem vindo de volta!');
    form === null || form === void 0 ? void 0 : form.submit();
});
