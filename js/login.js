const modalLogin = new bootstrap.Modal(document.querySelector("#modalLogin"));
const btnLogin = document.querySelector("#btnLogin");
const formularioLogin = document.querySelector("#formLogin");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const alert = document.querySelector("#alert");

btnLogin.addEventListener("click", mostrarModalLogin);
formularioLogin.addEventListener("submit", login);

const usuarioAdmin = {
    email: "admin@cmsaludactiva.com",
    password: "12345678Aa!",
};

verificarUser();

function verificarUser(){

}

function mostrarModalLogin(){
    if (btnLogin.innerHTML === "Login"){
        modalLogin.show();
    } else {
        logout();
    }
}