const modalLogin = new bootstrap.Modal(document.querySelector("#modalLogin"));
const btnIniciarSesion = document.querySelector("#btnIniciarSesion");
const btnSalir = document.querySelector("#btnSalir");
const btnLogin = document.querySelector("#btnLogin");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const formularioLogin = document.querySelector("#formLogin");
const linkAdministrador = document.querySelector('#linkAdministrador');

const expRegCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const expRegContrasenia = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

const usuarioAdmin = {
	email: "admin@cmsaludactiva.com",
	password: "Admin123!"
}

let admin = false;

if (sessionStorage.getItem('adminLog') !== null) {
	btnIniciarSesion.classList.add('d-none');
	btnSalir.classList.remove('d-none');
	linkAdministrador.classList.remove('d-none');
}

sessionStorage.setItem("user", JSON.stringify(usuarioAdmin));

btnIniciarSesion.addEventListener("click", desplegarModalLogin);
formularioLogin.addEventListener('submit', entrar);
btnSalir.addEventListener('click', cerrarSesion)

function entrar(e) {
	e.preventDefault();
	if (btnIniciarSesion.innerHTML === 'Iniciar Sesión') {
		verificarUsuario();
	};
};

function verificarUsuario() {
	const datosAdmin = JSON.parse(sessionStorage.getItem('user'));
	const correoAdmin = datosAdmin.email;
	const contraseniaAdmin = datosAdmin.password;

	if (email.value.match(expRegCorreo) === null || password.value.match(expRegContrasenia) === null) {
		Swal.fire('Correo y/o contraseña Invalido');
		formularioLogin.reset()
	} else {
		if (email.value === correoAdmin && password.value === contraseniaAdmin) {
			admin = true;
			sessionStorage.setItem('adminLog', JSON.stringify(admin))
			linkAdministrador.classList.remove('d-none');
			btnSalir.classList.remove('d-none');
			btnIniciarSesion.classList.add('d-none');
			modalLogin.hide();
		} else {
			Swal.fire('Ingreso usuario normal');
			modalLogin.hide();
			btnIniciarSesion.classList.add('d-none');
			btnSalir.classList.remove('d-none');
		};
	};
};

function cerrarSesion() {
	sessionStorage = false;
	sessionStorage.removeItem('adminLog');
	linkAdministrador.classList.add('d-none');
	btnSalir.classList.add('d-none');
	btnIniciarSesion.classList.remove('d-none');
}

function desplegarModalLogin() {
	if (btnIniciarSesion.innerHTML === "Iniciar Sesión") {
		formularioLogin.reset();
	}
}