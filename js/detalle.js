import Resenia from "./classResenia.js";

//variables globales
let formResenia = document.getElementById('formResenia');
let modalResenia = new bootstrap.Modal(document.getElementById('modalResenia'));
let btnResenia = document.getElementById('btnResenia');
let listaResenia = JSON.parse(localStorage.getItem("listaResenia")) || [];
let paciente = document.getElementById('inputNombreResenia');
let comentario = document.getElementById('textoResenia');
let mensajeAlerta = document.getElementById("alertaResenia");


//manejadores de eventos
btnResenia.addEventListener('click', desplegarModalResenia);
formResenia.addEventListener('submit', prepararFormResenia);

//funciones
function desplegarModalResenia(){
    modalResenia.show();
  }

function prepararFormResenia(e){
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

function resumenResenia(nombre, resenia){
    let resumen = '';
    if(!validarTexto(nombre, 3, 100)){
        resumen += "El nombre debe contener entre 3 y 100 caracteres <br>";
    }
    if(!validarTexto(resenia, 10, 500)){
        resumen += "La reseña debe contener entre 10 y 500 caracteres <br>";
    }
    return resumen;
}

function crearResenia(){
    const resumen = resumenResenia(paciente.value, comentario.value);
    mostrarMensajeError(resumen);
    if (resumen.length === 0){
        const nuevaResenia = new Resenia(paciente.value, comentario.value);  
        listaResenia.push(nuevaResenia);
        guardarEnLocalStorage();
        limpiarForm();      
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

function limpiarForm() {
    formResenia.reset();
    modalResenia.hide();
  }