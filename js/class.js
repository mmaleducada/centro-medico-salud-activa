export default class Medico {
  #horario;
  #matricula;
  #nombre;
  #especialidad;
  #fotografia;
  #precio;
  #descripcion;

  constructor(
    matricula = uuidv4(),
    nombre,
    especialidad,
    fotografia,
    horario,
    precio,
    descripcion
  ) {
    this.#matricula = matricula;
    this.#nombre = nombre;
    this.#especialidad = especialidad;
    this.#fotografia = fotografia;
    this.#horario = horario;
    this.#precio = precio;
    this.#descripcion = descripcion;
  }
  // Getters
  get matricula() {
    return this.#matricula;
  }

  get nombre() {
    return this.#nombre;
  }

  get especialidad() {
    return this.#especialidad;
  }

  get fotografia() {
    return this.#fotografia;
  }

  get descripcion() {
    return this.#descripcion;
  }

  get horario() {
    return this.#horario;
  }
  get precio() {
    return this.#precio;
  }

  // Setters
  set matricula(matricula) {
    this.#matricula = matricula;
  }

  set nombre(nombre) {
    this.#nombre = nombre;
  }
  set especialidad(especialidad) {
    this.#especialidad = especialidad;
  }

  set fotografia(fotografia) {
    this.#fotografia = fotografia;
  }

  set descripcion(descripcion) {
    this.#descripcion = descripcion;
  }

  set horario(horario) {
    this.#horario = horario;
  }

  set precio(precio) {
    this.#precio = precio;
  }

  toJSON() {
    return {
      matricula: this.matricula,
      nombre: this.nombre,
      especialidad: this.especialidad,
      fotografia: this.fotografia,
      horario: this.horario,
      precio: this.precio,
      descripcion: this.descripcion,
    };
  }
}