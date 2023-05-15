import Resenia from "./classResenia.js";

//variables globales
let formResenia = document.getElementById("formResenia");
let modalResenia = new bootstrap.Modal(document.getElementById("modalResenia"));
let btnResenia = document.getElementById("btnResenia");
let listaResenia = JSON.parse(localStorage.getItem("listaResenia")) || [];
let paciente = document.getElementById("inputNombreResenia");
let comentario = document.getElementById("textoResenia");
let mensajeAlerta = document.getElementById("alertaResenia");

//manejadores de eventos
btnResenia.addEventListener("click", desplegarModalResenia);
formResenia.addEventListener("submit", prepararFormResenia);

///////////////////////////////
if (listaResenia.length > 0) {
  listaResenia = listaResenia.map(
    (resenia) => new Resenia(resenia.paciente, resenia.comentario)
  );
}
/////////////////////////////////
cargaInit();
function cargaInit() {
  if (listaResenia.length > 0) {
    listaResenia.map((resenia, posicion) => crearCard(resenia, posicion + 1));
    console.log(listaResenia);
  }
}
////////////////////////////////
function crearCard(resenia, card) {
  let cardResenia = document.getElementById("cardResenia");
  cardResenia.innerHTML += `<div class="card col-11 col-md-3 col-lg-3 m-2">
    <div class="card-body">
      <h5 class="card-title">${resenia.paciente}</h5>
      <p class="card-text">
        ${resenia.comentario}
      </p>
    </div>
  </div>`;
}
//////////////////////////////

//funciones
function desplegarModalResenia() {
  modalResenia.show();
}

function prepararFormResenia(e) {
  e.preventDefault();
  crearResenia();
}

//validadores
function validarTexto(texto, min, max) {
  if (texto.length >= min && texto.length <= max) {
    console.log("la palabra es valida");
    return true;
  } else {
    console.log("la palabra es incorrecta");
    return false;
  }
}

function resumenResenia(nombre, resenia) {
  let resumen = "";
  if (!validarTexto(nombre, 3, 100)) {
    resumen += "El nombre debe contener entre 3 y 100 caracteres <br>";
  }
  if (!validarTexto(resenia, 10, 500)) {
    resumen += "La reseña debe contener entre 10 y 500 caracteres <br>";
  }
  return resumen;
}

function crearResenia() {
  const resumen = resumenResenia(paciente.value, comentario.value);
  mostrarMensajeError(resumen);
  if (resumen.length === 0) {
    const nuevaResenia = new Resenia(paciente.value, comentario.value);
    listaResenia.push(nuevaResenia);
    guardarEnLocalStorage();
    crearCard(nuevaResenia, listaResenia.length);
    limpiarFormulario();
  }
}

function guardarEnLocalStorage() {
  localStorage.setItem("listaResenia", JSON.stringify(listaResenia));
}

function mostrarMensajeError(resumen) {
  if (resumen.length > 0) {
    mensajeAlerta.className = "alert alert-danger mt-3";
    mensajeAlerta.innerHTML = resumen;
  } else {
    mensajeAlerta.className = "alert alert-danger mt-3 d-none";
  }
}

function limpiarFormulario() {
  formResenia.reset();
  modalResenia.hide();
}
