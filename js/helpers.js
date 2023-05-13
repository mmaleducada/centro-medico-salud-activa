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


/* export function resumenValidaciones(nombre, especialidad, fotografia, horario1, horario2, horario3, horario4, horario5, horario6, precio, descripcion){
    let resumen = '';
    if(! validarCantidadCaracteres(titulo,2, 100)){
        //si no cumplio la validacion
        resumen = 'El titulo debe contener entre 2 y 100 caracteres <br>';
    };
    if(! validarCantidadCaracteres(descripcion,5, 300)){
        //si no cumplio la validacion
        resumen += 'La descripcion debe contener entre 5 y 300 caracteres <br>';
    };
    if(! validarURLImagen(imagen)){
        //si no cumplio la validacion
        resumen += 'La url debe ser valida y contener una extension (.jpg,.png o .gif) <br>';
    };
    if(! validarGenero(genero)){
        //si no cumplio la validacion
        resumen += 'Debe seleccionar un genero de la lista <br>';
    };
    return resumen;
} */