import Medico from "./class.js";
import { resumenValidaciones } from "./helpers.js";

//variables globales
let formularioMedico = document.getElementById('form-medico');
let modalMedico = new bootstrap.Modal(document.getElementById("modalMedicosAdmi"));
let btnModalMedico = document.getElementById('boton-sumar-medico-admi');
let matricula = document.getElementById('inputMatricula');
let nombre = document.getElementById('inputNombreCompleto');
let especialidad = document.getElementById('inputEspecialidad');
let fotografia = document.getElementById('inputFotografia');
let horario = document.querySelectorAll('input[type="checkbox"]:checked');
let precio = document.getElementById('inputPrecioConsulta');
let descripcion = document.getElementById('inputDescripcion');
let alert = document.getElementById('alerta');

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