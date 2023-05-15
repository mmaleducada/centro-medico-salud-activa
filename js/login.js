const modalLogin = new bootstrap.Modal(document.querySelector("#modalLogin"));
const btnIniciarSesion = document.querySelector("#btnIniciarSesion")
const btnLogin = document.querySelector("#btnLogin");
const btnAdmin = document.querySelector("#btnAdmin");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const alert = document.querySelector("#alert");
const formularioLogin = document.querySelector("#formLogin");

btnIniciarSesion.addEventListener("click", desplegarModalLogin);
btnLogin.addEventListener("submit", login);
btnIniciarSesion.addEventListener("click", logout);

const usuarioAdmin = {
    email: "admin@cmsaludactiva.com",
    password: "12345678Aa!",
}

sessionStorage.setItem("user", JSON.stringify(usuarioAdmin));
verificarUser();
console.log(window.location.href);
console.log(window.location.origin);

function verificarUser(){
    let existeUsuario = sessionStorage.getItem("user");
    if (existeUsuario) {
        btnIniciarSesion.innerHTML = "Salir";
        document.querySelector("#btnAdmin").classList.add("d-none");
       // TODO agregar validaciones
    }else {
        btnIniciarSesion.innerHTML = "Iniciar Sesión";
        let webAdmin = window.location.origin+ "/pages/administrador.html";
        if (window.location.href === webAdmin){
            document.querySelector("main").innerHTML = `<h2 class="text-center bg-dark text-light">No tienes permisos suficientes para estar en esta página, sera redireccionado a la página principal.</h2>`
        }
        setTimeout( ()=>{    
            window.location.href = window.location.origin;
        }, 3000)
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
    // TODO descomentar las lineas 47 y 64 cuando se agreguen las validaciones (y borrar esta!)
    // if (validarEmail() && validarPassword()){
        if (email.value === usuarioAdmin.value && password.value === usuarioAdmin.password) {
                console.log(`hola admin`);
                btnIniciarSesion.innerHTML = "Salir";
                document.querySelector("#btnAdmin").classList.add("d-none");
                modalLogin.hide();
        } 
    }   
    // }
    
    function logout(){
        modalLogin.hide();
            sessionStorage.removeItem("user");
            btnIniciarSesion.innerHTML = "Iniciar Sesión";
            document.querySelector("#btnAdmin").classList.add("d-none");
        window.location.href = window.location.origin;
            }
        