export default class Resenia {
    #paciente;
    #comentario;

constructor (
    paciente,
    comentario,
)
{
    this.#paciente = paciente;
    this.#comentario = comentario;
}
get paciente(){
    return this.#paciente;
}
get comentario(){
    return this.#comentario;
}
set paciente(paciente){
    this.#paciente = paciente;
}
set comentario(comentario){
    this.#comentario = comentario;
}
toJSON() {
    return {
      paciente: this.paciente,
      comentario: this.comentario      
    }
}
}