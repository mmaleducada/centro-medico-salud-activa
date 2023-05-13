import Medico from "./class.js";

//variables globales
let formularioMedico = document.getElementById('form-medico');
let modalMedico = new bootstrap.Modal(document.getElementById("modalMedicosAdmi"));
let btnModalMedico = document.getElementById('boton-sumar-medico-admi');

//manejadores de eventos
btnModalMedico.addEventListener("click", desplegarModalMedico);
formularioMedico.addEventListener('submit', prepararFormularioMedico);



//funciones
function desplegarModalMedico() {
    modalMedico.show();    
}
function prepararFormularioMedico(e){
    e.preventDefault();
    crearMedico();
}