import Medico from "./class.js";
import { resumenValidaciones } from "./helpers.js";

//variables globales
let formularioMedico = document.getElementById("form-medico");
let modalMedico = new bootstrap.Modal(
  document.getElementById("modalMedicosAdmi")
);
let btnModalMedico = document.getElementById("boton-sumar-medico-admi");
let matricula = document.getElementById("inputMatricula");
let nombre = document.getElementById("inputNombreCompleto");
let resenia = document.getElementById("inputResenia");
let especialidad = document.getElementById("inputEspecialidad");
let fotografia = document.getElementById("inputFotografia");
let horario = document.getElementById("inputHorario");
let precio = document.getElementById("inputPrecio");
let mensajeAlerta = document.getElementById("alerta");
let listaMedicos = [];

//manejadores de eventos
btnModalMedico.addEventListener("click", desplegarModalMedico);
formularioMedico.addEventListener("submit", prepararFormularioMedico);

//leer la pelicua de el array de pelicua con setiten
let listaMedico = JSON.parse(localStorage.getItem("listaMedicos")) || [];
if (listaMedico.length > 0) {
  listaMedico = listaMedico.map(
    (medico) =>
      new Medico(
        medico.nombre,
        medico.especialidad,
        medico.fotografia,
        medico.horario,
        medico.precio,
        medico.resenia
      )
  );
}
console.log(listaMedico) /// viveeee 

function cargaInicial(){
    if(listaMedico.length>0){
        listaMedico.map((medico,posicion)=>crearFila(medico,posicion+1))
    }

}

//definir funcion carga inicial
//definir funcion crearfila
//corregir el numero de indice

//funciones
function desplegarModalMedico() {
  modalMedico.show();
}
function prepararFormularioMedico(e) {
  e.preventDefault();
  crearMedico();
}

function mostrarMensajeError(resumen) {
  if (resumen.length > 0) {
    mensajeAlerta.className = "alert alert-danger mt-3";
    mensajeAlerta.innerHTML = resumen;
  } else {
    mensajeAlerta.className = "alert alert-danger mt-3 d-none";
  }
}

function guardarEnLocalStorage() {
  localStorage.setItem("listaMedicos", JSON.stringify(listaMedicos));
}

function limpiarForm() {
  formularioMedico.reset();
  modalMedico.hide();
}

function crearMedico() {
  const resumen = resumenValidaciones(
    nombre.value,
    resenia.value,
    especialidad.value,
    fotografia.value,
    horario.value,
    precio.value
  );

  mostrarMensajeError(resumen);

  if (resumen.length === 0) {
    const medicoNuevo = new Medico(
      undefined,
      nombre.value,
      especialidad.value,
      fotografia.value,
      horario.value,
      precio.value,
      resenia.value
    );

    listaMedicos.push(medicoNuevo);

    guardarEnLocalStorage();
    Swal.fire(
      "Carga exitosa",
      "El medico se cargo correctamente en la lista",
      "success"
    );

    limpiarForm();
  }
}
