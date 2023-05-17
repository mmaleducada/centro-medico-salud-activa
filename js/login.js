const modalLogin = new bootstrap.Modal(document.querySelector("#modalLogin"));
const btnIniciarSesion = document.querySelector("#btnIniciarSesion")
const btnLogin = document.querySelector("#btnLogin");
const formularioLogin = document.querySelector("#formLogin");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const alert = document.querySelector("#alert");

btnIniciarSesion.addEventListener("click", desplegarModalLogin);
formularioLogin.addEventListener("submit", login);
const usuarioAdmin = {
    email: "admin@cmsaludactiva.com",
    password: "12345678Aa!",
};

sessionStorage.setItem("user", JSON.stringify(usuarioAdmin));
verificarUser();

function verificarUser(){
    let existeUsuario = sessionStorage.getItem("user");
    if (existeUsuario === usuarioAdmin) {
        btnIniciarSesion.innerHTML = "Salir";
        document.querySelector("#btnAdmin").classList.remove("d-none");
    }else {
        btnIniciarSesion.innerHTML = "Iniciar Sesión";
        let webAdmin = window.location.origin + "/pages/administrador.html";
    if (window.location.href === webAdmin){
        document.querySelector("main").innerHTML = `<h2 class="text-center">No tienes permisos suficientes para estar en esta página, sera redireccionado a la página principal.</h2>`
    }
    }
}

function desplegarModalLogin(){
    if (btnIniciarSesion.innerHTML === "Iniciar Sesión"){
        modalLogin.show();
    } else {
        logout();
    }
}

function login(e){
    e.preventDefault();

    if (email.value === usuarioAdmin.value && password.value === usuarioAdmin.password) {
        alert.className = "alert alert-danger mt-3 d-none";
        btnIniciarSesion.innerHTML = "Salir";
        sessionStorage.setItem("user", JSON.stringify(usuarioAdmin));
        document.querySelector("#btnAdmin").classList.remove("d-none");
        modalLogin.hide();
    } else {
    }
}

function logout(){
    sessionStorage.removeItem("user");
    btnIniciarSesion.innerHTML = "Iniciar Sesión";
    document.querySelector("#btnAdmin").classList.add("d-none");
window.location.href = window.location.origin;
}