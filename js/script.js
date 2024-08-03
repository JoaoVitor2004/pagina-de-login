"use strict";
const fade = document.getElementById('fade');
const modal = document.getElementById('modal');
const textModal = document.getElementById('res');
const divs = document.querySelectorAll('.input');
const inputEmail = document.getElementById('input-email');
const inputPassword = document.getElementById('input-password');
const form = document.getElementById('form');
const inputElementPassword = inputPassword;
const classeHide = 'hide';
const comprimentoMinimoPassword = 8;
const erroBorda = '2px solid red';
const clearBorda = '2px solid white';
function exibirErro(indice) {
    fade === null || fade === void 0 ? void 0 : fade.classList.remove(classeHide);
    modal === null || modal === void 0 ? void 0 : modal.classList.remove(classeHide);
    if (divs[indice]) {
        divs[indice].style.borderBottom = erroBorda;
    }
}
function limparErro(indice) {
    if (divs[indice])
        divs[indice].style.borderBottom = clearBorda;
}
inputEmail === null || inputEmail === void 0 ? void 0 : inputEmail.addEventListener('input', () => limparErro(0));
inputPassword === null || inputPassword === void 0 ? void 0 : inputPassword.addEventListener('input', () => limparErro(1));
function esconderModal() {
    fade === null || fade === void 0 ? void 0 : fade.classList.add(classeHide);
    modal === null || modal === void 0 ? void 0 : modal.classList.add(classeHide);
}
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!inputEmail || inputEmail.value.trim() === '') {
        exibirErro(0);
        setTimeout(esconderModal, 2200);
        if (textModal)
            textModal.innerHTML = 'Digite um email valido!';
        return;
    }
    if (!inputEmail || inputEmail.value.trim() === '') {
        exibirErro(1);
        if (textModal)
            textModal.innerHTML = 'Digite uma senha forte e segura';
        setTimeout(esconderModal, 2200);
        return;
    }
    alert('Bem vindo de volta!');
    form === null || form === void 0 ? void 0 : form.submit();
});
