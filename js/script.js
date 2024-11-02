"use strict";
const fade = document.getElementById('fade');
const modal = document.getElementById('modal');
const textModal = document.getElementById('res');
const divs = document.querySelectorAll('.input');
const inputEmail = document.getElementById('input-email');
const inputPassword = document.getElementById('input-password');
const iconPassword = document.getElementById("icon-password");
const form = document.getElementById('form');
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
function esconderModal() {
    fade === null || fade === void 0 ? void 0 : fade.classList.add(classeHide);
    modal === null || modal === void 0 ? void 0 : modal.classList.add(classeHide);
}
function limparErro(indice) {
    if (divs[indice])
        divs[indice].style.borderBottom = clearBorda;
}
function validarEmail(email) {
    const verificar = new RegExp(/^[a-zA-Z.-_]+@+[a-zA-Z]+\.+[a-zA-Z]]/);
    if (verificar.test(email)) {
        return true;
    }
    return false;
}
iconPassword.addEventListener("click", () => {
    if (inputPassword.getAttribute("type") === "password") {
        inputPassword.setAttribute("type", "text");
        iconPassword.classList.add("bi-eye-slash-fill");
        iconPassword.classList.remove("bi-eye-fill");
    }
    else {
        inputPassword.setAttribute("type", "password");
        iconPassword.classList.add("bi-eye-fill");
        iconPassword.classList.remove("bi-eye-slash-fill");
    }
});
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!validarEmail(inputEmail.value)) {
        exibirErro(0);
        setTimeout(esconderModal, 2200);
        if (textModal)
            textModal.innerHTML = 'Digite um email valido!';
        return;
    }
    if (!(inputPassword === null || inputPassword === void 0 ? void 0 : inputPassword.value) || inputPassword.value.length < 8) {
        exibirErro(1);
        setTimeout(esconderModal, 2200);
        if (textModal)
            textModal.innerHTML = 'Digite uma senha forte e segura';
        return;
    }
    alert('Bem vindo de volta!');
    form === null || form === void 0 ? void 0 : form.submit();
});
