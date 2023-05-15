const inputBuscar = document.querySelector('#inputBuscar');
const medicosFiltrados = document.querySelectorAll('.cardMedico');
const medicoNoEncontrado = document.querySelector('#imagenDoctorNoEncontrado');
const filtro = document.querySelector('#selectFiltro');

filtro.addEventListener('change', filtrador);

function filtrador() {
	inputBuscar.value = '';

	medicosFiltrados.forEach(medico => {
		if (filtro.value === 'Elija especialidad:') {
			medicosFiltrados.forEach(medico => {
				medico.classList.remove('oculto');
				medico.classList.add('filtrado')
			})
		} else if (filtro.value === medico.children[1].children[0].children[1].innerHTML.toLowerCase()) {
			medico.classList.add('filtrado');
			medico.classList.remove('oculto');
		} else {
			medico.classList.remove('filtrado');
			medico.classList.add('oculto');
		}
	});
};

document.addEventListener('keyup', e => {

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