// T - Type defini que eu não sei o tipo dessa essa classe e que vou poder seta aquele que eu precisar na filha dela se eu precisar tipar outras partes do codigo, posso usar e adiconar qualquer outra letra 

// uma classe abstrata não te permite instanciar ela

export abstract class View<T> {

    protected elemento: HTMLElement

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }

    // o metodo sendo abstract obrigada o programador a implementar na clase filha
    protected abstract templete(model: T): string ;

    public update(model: T): void{
        const templete = this.templete(model)
        this.elemento.innerHTML = templete
    }
}