const modalLogin = new bootstrap.Modal(document.querySelector("#modalLogin"));
const btnIniciarSesion = document.querySelector("#btnIniciarSesion")
const btnLogin = document.querySelector("#btnLogin");
const listaSalir = document.querySelector("#listaSalir");
const btnSalir = document.querySelector("#btnSalir");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const alert = document.querySelector("#alerta");
const formularioLogin = document.querySelector("#formLogin");
const linkAdmin = document.querySelector("#linkAdmin");
const usuarioActivo = "";
// const expRegCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
// const expRegContrasenia = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/

const usuarioAdmin = {
    email: "admin@cmsaludactiva.com",
    password: "12345678Aa!",
}
btnIniciarSesion.addEventListener("click", desplegarModalLogin);
formularioLogin.addEventListener("submit", login);
btnSalir.addEventListener("click", logout);

sessionStorage.setItem("user", JSON.stringify(usuarioAdmin));
sessionStorage.setItem("activo", JSON.stringify(usuarioActivo));


function desplegarModalLogin(){
    if (btnIniciarSesion.innerHTML === "Iniciar Sesión"){
        formularioLogin.reset();
        modalLogin.show();
    }
}
function login(e){
    e.preventDefault();
    // if (validarEmail() && validarPassword()){
        if (btnIniciarSesion.innerHTML === "Iniciar Sesión"){
            verificarUser();
            linkAdmin.classList.remove("d-none");
            modalLogin.hide();
        } 
        // }
}
function verificarUser(){
    // sessionStorage.setItem("activo", JSON.stringify(true));
    const datosAdmin = JSON.parse(sessionStorage.getItem("user"));
	const correoAdmin = datosAdmin.email;
	const contraseniaAdmin = datosAdmin.password;
    
	if (email.value === correoAdmin && password.value === contraseniaAdmin) {
        linkAdmin.classList.remove("d-none");
        btnIniciarSesion.classList.add("d-none");
        listaSalir.classList.remove("d-none");
	}
    
    let existeUsuario = sessionStorage.getItem("activo", (true));
    console.log(existeUsuario);
//     if (existeUsuario) {
// }
}
function logout(){
    sessionStorage.removeItem("activo");
        btnIniciarSesion.classList.remove("d-none");
        listaSalir.classList.add("d-none");
        linkAdmin.classList.add("d-none");
    }



// validaciones
// function validarEmail(){
//     const correo = email.value;
//     console.log(correo);
//     if (correo !== null) {
//         if (correo.match(expRegCorreo) === null) {
//             console.log('Usuario y/o contrasenia incorrecta');
//         };
//     };
// }


// function validarPassword(){
//     const contrasenia = password.value;
//     console.log(contrasenia);
    
//     if (contrasenia === null) {
//         console.log("Debe ingresar una contrasenia");
//     } else if (contrasenia < 8 || contrasenia > 16){
//         console.log('La contrasenia debe tener entre 8 y 16 caracteres')
//     } else {
//         if (contrasenia.match(expRegContrasenia) === null) {
//             console.log('Usuario y/o contrasenia incorrecta');
//         } else {
//             console.log('Contrasenia invalida')
//         }
//     };
    
// }
