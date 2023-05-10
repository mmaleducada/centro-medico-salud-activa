const modalLogin = new bootstrap.Modal(document.querySelector("#modalLogin"));
const btnLogin = document.querySelector("#btnLogin");
const formularioLogin = document.querySelector("#formLogin");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const alert = document.querySelector("#alert");

// manejadores de eventos
btnLogin.addEventListener("click", mostrarModalLogin);
formularioLogin.addEventListener("submit", login);

// admin hardcodeado en el localStorage
const usuarioAdmin = {
    email: "admin@cmsaludactiva.com",
    password: "12345678Aa!",
};

verificarUser();

function verificarUser(){
let existeUsuario = sessionStorage.getItem("user");
if (existeUsuario) {
    btnLogin.innerHTML = "Logout";
    // poner cartel con display none que no muestre el boton admin si es un paciente
}else {
    btnLogin.innerHTML = "Login";
    let webAdmin = window.location.origin + "/pages/administrador.html";
    if (window.location.href === webAdmin){
document.querySelector("main").innerHTML = `<h2 class="text-center">No tienes permisos suficientes para estar en esta página, sera redireccionado a la página principal.</h2>`
    }
    setTimeout(()=>{
        window.location.href = window.location.origin;
    }, 3000);
}
}

function mostrarModalLogin(){
    if (btnLogin.innerHTML === "Login"){
        modalLogin.show();
    } else {
        logout();
    }
}

function login(e){
    e.preventDefault();
}

function logout(){
    sessionStorage.removeItem("user");
    btnLogin.innerHTML = "Login";
// mostrar boton 

window.location.href = window.location.origin;
}