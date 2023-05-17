function validarTexto(texto, min, max) {
    if (texto.length >= min && texto.length <= max) {
        console.log("la palabra es valida");
        return true;
    } else {
        console.log("la palabra es incorrecta");
        return false;
    }
}

function validarEspecialidad (especialidad){
    if(especialidad.length > 0 && especialidad === "Cardiologia" || especialidad === "Ginecologia" || especialidad === "Neurologia" || especialidad === "Traumatologia" || especialidad === "Oncologia" || especialidad === "Psiquiatria"){
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


function validarPrecio(precio2, min, max) {  
    if (precio2 >= min && precio2 <= max) {
        console.log("El precio está dentro del rango válido")
        return true;
    } else {
        console.log("El precio no está dentro del rango válido")
    }
}

function validarHorario(horario) {
    if(horario.length > 0 && horario === "15:00 - 15:30 - 16:00" || horario === "16:00 - 16:30 - 17:00" || horario === "17:00 - 17:30 - 18:00" || horario === "18:00 - 18:30 - 19:00"){
        console.log("Selecciono una horario correctamente");
        return true;
    } else {
        console.log("No selecciono ninguna horario de la lista");
        return false;
    }
}

export function resumenValidaciones(nombre, resenia, especialidad, fotografia, horario, precio2){
    let resumen = '';
    if(!validarTexto(nombre, 3, 100)){
        resumen = "El nombre debe contener entre 3 y 100 caracteres <br>";
    }
    if(!validarTexto(resenia, 3, 500)){
        resumen = "La descripcion contener entre 3 y 500 caracteres <br>";
    }
    if(!validarEspecialidad(especialidad)){
        resumen += "Debe seleccionar una especialidad <br>";
    }
    if(!validarFotografia(fotografia)){
        resumen += "La URL de la fotografía no es válida, debe contener una extensión (.jpg, .png o .gif) <br>";
    }
    if(!validarHorario(horario)){
        resumen += "Debe seleccionar un horario como mínimo <br>";
    }
    if(!validarPrecio(precio2, 1000, 10000)){
        resumen += "El precio debe estar entre $1.000 y $10.000 <br>";
    }
    return resumen;
}