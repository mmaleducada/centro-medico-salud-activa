const modalLogin = new bootstrap.Modal(document.querySelector("#modalLogin"));
const btnIniciarSesion = document.querySelector("#btnIniciarSesion")
const btnLogin = document.querySelector("#btnLogin");
const formularioLogin = document.querySelector("#formLogin");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const alert = document.querySelector("#alert");

// manejadores de eventos
btnIniciarSesion.addEventListener("click", desplegarModalLogin);
formularioLogin.addEventListener("submit", login);

// admin hardcodeado en el localStorage
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
        // mostrar boton de administrador 
        document.querySelector("#btnAdmin").classList.remove("d-none");
    }else {
        btnIniciarSesion.innerHTML = "Iniciar Sesión";
        let webAdmin = window.location.origin + "/pages/administrador.html";
    // para prevenir hackeos de la pagina admin
    if (window.location.href === webAdmin){
        document.querySelector("main").innerHTML = `<h2 class="text-center">No tienes permisos suficientes para estar en esta página, sera redireccionado a la página principal.</h2>`
    }
    // setTimeout(()=>{
        //     window.location.href = window.location.origin;
        // }, 3000);
    }
}

function desplegarModalLogin(){
    if (btnIniciarSesion.innerHTML === "Iniciar Sesión"){
        modalLogin.show();
    } else {
        logout();
    }
}
// verificaciones
/* expression regular - for password "Password must contain 8 characters and at least one number, one letter and one unique character such as !#$%&? "-->
 ^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$
 */
// sweet alert con msj de error: "usuario o contraseña incorrecto."

function login(e){
    e.preventDefault();
// if (validarEmail() && validarPassword()) {
    if (email.value === usuarioAdmin.value && password.value === usuarioAdmin.password) {
        alert.className = "alert alert-danger mt-3 d-none";
        btnIniciarSesion.innerHTML = "Salir";
        sessionStorage.setItem("user", JSON.stringify(usuarioAdmin));
        document.querySelector("#btnAdmin").classList.remove("d-none");
        modalLogin.hide();
    } else {
        // alert.className = "alert alert-danger mt-3";
    }
}
// }

function logout(){
    sessionStorage.removeItem("user");
    btnIniciarSesion.innerHTML = "Iniciar Sesión";
    // se vuelve a agregar la clase d-none al boton administrador al cerrar sesion
    document.querySelector("#btnAdmin").classList.add("d-none");
// redireccionamos a la pagina de inicio
window.location.href = window.location.origin;
}