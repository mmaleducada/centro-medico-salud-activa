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
let descripcion = document.getElementById("inputResenia");
let especialidad = document.getElementById("inputEspecialidad");
let fotografia = document.getElementById("inputFotografia");
let horario = document.getElementById("inputHorario");
let precio = document.getElementById("inputPrecio");
let mensajeAlerta = document.getElementById("alerta");
let altaDeMedico = true; // esta variable le permite al formulario saber que tiene que hacer. Si la variable esta en TRUE, debe crear un nuevo medico en la fila. Si esta en FALSE, debe editar el medico elegido.

//manejadores de eventos
btnModalMedico.addEventListener("click", desplegarModalMedico);
formularioMedico.addEventListener("submit", prepararFormularioMedico);


let listaMedicos = JSON.parse(localStorage.getItem("listaMedicos")) || [];

if (listaMedicos.length > 0) {
  listaMedicos = listaMedicos.map(
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
}
cargaInicial();
console.log(listaMedicos);

// funciones
function cargaInicial() {
  if (listaMedicos.length > 0) {
    listaMedicos.map((medico, posicion) => crearFila(medico, posicion + 1));
    console.log(listaMedicos);
  }
}

function crearFila(medico, fila) {
  let tablaMedico = document.getElementById("tablaMedico");
  tablaMedico.innerHTML += `<tr>
  <th scope="row">${fila}</th>
  <td>${medico.nombre}</td>
  <td>${medico.especialidad}</td>
  <td>
  <div class="text-truncate overflow-hidden">${medico.fotografia}</div>
  </td>
  <td>
  <div class="text-truncate overflow-hidden">${medico.horario}</div>
  </td>
  <td>${medico.precio}</td>
  <td>
    <button class="btn btn-warning" onclick="prepararMedico('${medico.matricula}')">
      <i class="bi bi-pencil-square"></i>
    </button>
    <button class="btn btn-danger" onclick="borrarMedico('${medico.matricula}')">
      <i class="bi bi-x-square"></i>
    </button>
  </td>
</tr>`;
}

function desplegarModalMedico() {
  modalMedico.show();
}
function prepararFormularioMedico(e) {
  e.preventDefault();
  if (altaDeMedico === true){
    crearMedico();
  } else {
    editarMedico();
  }
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
    descripcion.value,
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
      descripcion.value
    );

    listaMedicos.push(medicoNuevo);

    guardarEnLocalStorage();

    crearFila(medicoNuevo, listaMedicos.length);

    Swal.fire(
      "Carga exitosa",
      "El medico se cargo correctamente en la lista",
      "success"
    );

    limpiarForm();
  }
}

window.borrarMedico = (matricula) => {
  console.log(matricula);
  Swal.fire({
    title: 'Estas seguro que deseas eliminar el Medico?',
    text: "Esta accion es irrevertible, estas seguro",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#fed437',
    cancelButtonColor: '#EF315D',
    confirmButtonText: 'ELIMINAR!',
    cancelButtonText: "NO ELIMINAR!",
  }).then((result) => {
    if (result.isConfirmed) {
      let posicionMedico = listaMedicos.findIndex(
        (medico) => medico.matricula === matricula
      );
      listaMedicos.splice(posicionMedico, 1);
      guardarEnLocalStorage(); 
      tablaMedico.removeChild(tablaMedico.children[posicionMedico]);
      actualizarIndicesFilas();      
      Swal.fire(
        'Eliminado',
        'El medico se borro correctamente.',
        'success'
      )
    }
  })
};

function actualizarIndicesFilas() {

  let tablaMedico = document.getElementById("tablaMedico");

  let filas = tablaMedico.getElementsByTagName("tr");

  for (let i = 0; i < filas.length; i++) {
    let indice = i + 1;
    filas[i].getElementsByTagName("th")[0].textContent = indice;
  }
}

window.prepararMedico = (matriculaMedico) => {
  const medicoElegido = listaMedicos.find((medico)=> medico.matricula === matriculaMedico);

  matricula.value = medicoElegido.matricula;
  nombre.value = medicoElegido.nombre;
  especialidad.value = medicoElegido.especialidad;
  fotografia.value = medicoElegido.fotografia;
  horario.value = medicoElegido.horario;
  precio.value = medicoElegido.precio;
  descripcion.value = medicoElegido.descripcion;

  altaDeMedico = false;
  modalMedico.show();
}

function editarMedico() {
  console.log("aqui tengo que editar");
  let lugarMedico2 = listaMedicos.findIndex((medico) => medico.matricula === matricula.value);

  const resumen = resumenValidaciones(
    nombre.value,
    descripcion.value,
    especialidad.value,
    fotografia.value,
    horario.value,
    precio.value
  );

  mostrarMensajeError(resumen);

  if (resumen.length === 0){
    listaMedicos[lugarMedico2].nombre = nombre.value;
    listaMedicos[lugarMedico2].especialidad = especialidad.value;
    listaMedicos[lugarMedico2].fotografia = fotografia.value;
    listaMedicos[lugarMedico2].horario = horario.value;
    listaMedicos[lugarMedico2].precio = precio.value;
    listaMedicos[lugarMedico2].descripcion = descripcion.value;

    guardarEnLocalStorage();

    
  }
}