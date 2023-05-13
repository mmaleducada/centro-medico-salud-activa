function validarTexto(texto, min, max,) {
    const patron = /^[a-zA-ZáÁéÉíÍóÓúÚñÑüÜ\s,'-]$/;
    if(patron.test(texto) && texto.length >= min && texto.length <= max){
        console.log("El texto es valido");
        return true;
    } else {
        return false;
    }
}

function validarEspecialidad (especialidad){
    if(especialidad.length > 0 && especialidad === "Cardiología",  especialidad === "Ginecología",  especialidad === "Neurología",  especialidad === "Traumatología",  especialidad === "Oncología", especialidad === "Psiquiatría"){
        console.log("Selecciono una especialidad correctamente");
        return true;
    } else {
        console.log("No selecciono ninguna especialidad de la lista");
        return false;
    }
}

function validarFotografia(fotografia) {
    const patron = /^(http(s?):)([/|.|\w|\s|-])*.(?:jpg|gif|png)$/;
    if(patron.test(fotografia)){
        console.log("La url de la fotografía es valida");
        return true;
    } else {
        console.log("La url de la fotografía es invalida");
        return false;
    }
}

function validarPrecio(precio, min, max) {   

    if (parseInt(precio) >= min && parseInt(precio) <= max) {
        console.log("El precio está dentro del rango válido")
        return true;
    } else {
        console.log("El precio no está dentro del rango válido")
        return false;
    }
}

function validarHorario(){
    const horariosSeleccionados = document.querySelectorAll('input[type="checkbox"]:checked');

if (horariosSeleccionados.length === 0) {
  alert('Debe seleccionar al menos un horario.');
} else {
  // Los horarios seleccionados están en el array horariosSeleccionados
  const horarios = [];
  horariosSeleccionados.forEach((horario) => {
    horarios.push(horario.value);
  });
  console.log('Horarios seleccionados:', horarios);
}
}

export function resumenValidaciones(nombre, especialidad, fotografia, precio, descripcion){
    let resumen = '';
    if(!validarTexto(nombre, 3, 100)){
        resumen += "El nombre debe contener entre 3 y 100 caracteres <br>";
    }
    if(!validarEspecialidad(especialidad)){
        resumen += "Debe seleccionar una especialidad <br>";
    }
    if(!validarFotografia(fotografia)){
        resumen += "La URL de la fotografía no es válida, debe contener una extensión (.jpg, .png o .gif) <br>";
    }
    if(!validarHorario()){
        resumen += "Debe seleccionar un horario como mínimo <br>";
    }
    if(!validarPrecio(precio, 1000, 10000)){
        resumen += "El precio debe estar entre $1.000 y $10.000 <br>";
    }
    if(!validarTexto(descripcion, 10, 200)){
        resumen += "La descripción debe contener entre 10 y 200 caracteres <br>";
    }
    return resumen;
}
