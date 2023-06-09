const inputBuscar = document.querySelector('#inputBuscar');
const medicoNoEncontrado = document.querySelector('#imagenDoctorNoEncontrado');
const filtro = document.querySelector('#selectFiltro');
let listaMedicos = JSON.parse(localStorage.getItem("listaMedicos")) || [];

filtro.addEventListener('change', filtrador);

if (sessionStorage.getItem('adminLog') !== null) {
	btnIniciarSesion.classList.add('d-none');
	btnSalir.classList.remove('d-none');
	linkAdministrador.classList.remove('d-none');
}

if (sessionStorage.getItem('pacienteLog') !== null) {
	btnIniciarSesion.classList.add('d-none');
	btnSalir.classList.remove('d-none');
}

function filtrador() {
	const medicosFiltrados = document.querySelectorAll('.cardMedico');

	inputBuscar.value = '';

	medicosFiltrados.forEach(medico => {
		if (filtro.value === 'Elija especialidad:') {
			medicosFiltrados.forEach(medico => {
				medico.classList.remove('oculto');
				medico.classList.add('filtrado')
			})
		} else if (filtro.value === medico.children[1].children[0].children[1].innerHTML) {
			medico.classList.add('filtrado');
			medico.classList.remove('oculto');
		} else {
			medico.classList.remove('filtrado');
			medico.classList.add('oculto');
		}
	});
};

document.addEventListener('keyup', e => {
	const medicosFiltrados = document.querySelectorAll('.cardMedico');
	const hayFiltracion = document.querySelectorAll('.filtrado');

	if (e.key === 'Escape') e.target.value = '';

	if (filtro.value === 'Elija especialidad:') {
		medicosFiltrados.forEach(doctor => {
			doctor.classList.remove('oculto')
		}
		);

		if (e.target.matches('#inputBuscar')) {
			hayFiltracion.forEach(doctor => {
				doctor.children[1].children[0].children[0].innerHTML.toLowerCase().includes(e.target.value.toLowerCase()) ? doctor.classList.remove('escondido') : doctor.classList.add('escondido');
			});
		};

	} else {
		if (e.target.matches('#inputBuscar')) {
			hayFiltracion.forEach(doctor => {
				doctor.children[1].children[0].children[0].innerHTML.toLowerCase().includes(e.target.value.toLowerCase()) ? doctor.classList.remove('escondido') : doctor.classList.add('escondido');
			});
		};
	};

	const escondido = document.querySelectorAll('.escondido')
	hayFiltracion.length === escondido.length
		? medicoNoEncontrado.className = ''
		: medicoNoEncontrado.className = 'imgOculta';
});

listaMedicos.map((medico)=> {crearCard(medico);});


function crearCard (medico) {
	let contenedorCards = document.getElementById("contenedor-card-medicos");
	contenedorCards.innerHTML += `<div class="card cardMedico mt-3 mx-auto border-1 filtrado">
	<img src="${medico.fotografia}" class="card-img-top imagenMedico"
	  alt="${medico.nombre}">
	<div class="card-body py-0 my-3 d-flex flex-column justify-content-between">
	  <div>
		<h3 class="card-title">${medico.nombre}</h3>
		<p class="card-text">${medico.especialidad}</p>
	  </div>
	  <div>
		<p class="card-text mt-4">Precio de la consulta: <span>$${medico.precio}</span></p>
	  </div>
	</div>
	<div class="card-footer p-3">
	  <button class="btn btn-outline-warning" onclick="navegarPaginaDetalle('${medico.matricula}')">Ver Mas</=>
	</div>
  </div>`
}
function navegarPaginaDetalle(matricula){
    window.location.href = window.location.origin+'/pages/detalle.html?matricula='+matricula;
}