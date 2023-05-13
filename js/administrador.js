import Medico from "./class.js";
//import { resumenValidaciones } from "./helpers.js";

//variables globales
let formularioMedico = document.getElementById('form-medico');
let modalMedico = new bootstrap.Modal(document.getElementById("modalMedicosAdmi"));
let btnModalMedico = document.getElementById('boton-sumar-medico-admi');
let matricula = document.getElementById('inputMatricula');
let nombre = document.getElementById('inputNombreCompleto');
let especialidad = document.getElementById('inputEspecialidad');
let fotografia = document.getElementById('inputFotografia');
let horario1 = document.getElementById('horario1');
let horario2 = document.getElementById('horario2');
let horario3 = document.getElementById('horario3');
let horario4 = document.getElementById('horario4');
let horario5 = document.getElementById('horario5');
let horario6 = document.getElementById('horario6');
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

function crearMedico(){

}