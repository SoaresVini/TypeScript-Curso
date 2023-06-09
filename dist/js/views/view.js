// T - Type defini que eu não sei o tipo dessa essa classe e que vou poder seta aquele que eu precisar na filha dela se eu precisar tipar outras partes do codigo, posso usar e adiconar qualquer outra letra 
// uma classe abstrata não te permite instanciar ela
export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        const templete = this.templete(model);
        this.elemento.innerHTML = templete;
    }
}
