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

// //leer la pelicua de el array de pelicua con setiten
let listaMedico = JSON.parse(localStorage.getItem("listaMedicos")) || [];

if (listaMedico.length > 0) {
  listaMedicos = listaMedico.map(
    (medico) =>
      new Medico(
        medico.matricula,
        medico.nombre,
        medico.especialidad,
        medico.fotografia,
        medico.horario,
        medico.precio,
        medico.descripcion
      )
  );
}else listaMedicos = []
console.log(listaMedico); /// viveeee

cargaInicial();
//definir funcion carga inicial
function cargaInicial() {
  if (listaMedico.length > 0) {
    listaMedico.map((medico, posicion) => crearFila(medico, posicion+1));
  }
}

//definir funcion crearfila
function crearFila(pelicula, fila) {
  let tablaMedico = document.getElementById("tablaMedico");
  tablaMedico.innerHTML += `<tr>
  <th class="d-flex flex-wrap">${fila}</th>
  <td>
  <div class="text-truncate overflow-hidden" >${pelicula.nombre}</div>
  </td>
  <td> <div class="text-truncate overflow-hidden">${pelicula.especialidad}</div></td>
  <td>
    <div class="text-truncate overflow-hidden">${pelicula.fotografia}</div>
  </td>
  <td>
    <div class="text-truncate overflow-hidden">${pelicula.horario}</div>
  </td>
  <td class="text-start"> $ ${pelicula.precio}</td>
  <td>
    <button class="btn btn-warning ms-1" onclick="prepararPelicula('${pelicula.codigo}')">
      <i class="bi bi-vector-pen"></i>
    </button>
    <button class="btn btn-danger ms-1" onclick="borrarPelicula('${pelicula.codigo}')">
      <i class="bi bi-trash"></i>
    </button>
  </td>
</tr>`;
}
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

    crearFila(medicoNuevo, listaMedico.length)

    Swal.fire(
      "Carga exitosa",
      "El medico se cargo correctamente en la lista",
      "success"
    );

    limpiarForm();
  }
}
