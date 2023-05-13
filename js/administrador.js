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
let mensajeAlerta = document.getElementById('alerta');
let listaMedicos = [];

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

function mostrarMensajeError (resumen) {
    if(resumen.length > 0) {
        mensajeAlerta.className = "alert alert-danger mt-3";
        mensajeAlerta.innerHTML = resumen;
    } else {
        mensajeAlerta.className = "alert alert-danger mt-3 d-none";
    }
}

function guardarEnLocalStorage() {
    localStorage.setItem("listaMedicos", JSON.stringify(listaMedicos));
}

function limpiarForm (){
    formularioMedico.reset();
    modalMedico.hide();
}

function crearMedico () {
    const resumen = resumenValidaciones(nombre.value, especialidad.value, fotografia.value, horario.value, precio.value, descripcion.value);
    
    mostrarMensajeError(resumen);

    if(resumen.length === 0){
        const medicoNuevo = new Medico (
            undefined, 
            nombre.value, 
            especialidad.value, 
            fotografia.value, 
            horario.value, 
            precio.value, 
            descripcion.value
        );
        
        listaMedicos.push(medicoNuevo);
        
        guardarEnLocalStorage();

        limpiarForm();
    }
    
}
