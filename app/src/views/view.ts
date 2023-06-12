// T - Type defini que eu não sei o tipo dessa essa classe e que vou poder seta aquele que eu precisar na filha dela se eu precisar tipar outras partes do codigo, posso usar e adiconar qualquer outra letra 

// uma classe abstrata não te permite instanciar ela

export abstract class View<T> {

    protected elemento: HTMLElement
    private escapar = false

    // Com o ? eu falo que essa variavel do contrutor é opcinal e ela sempre vai receber o valor padrão dela, que no caso é false. Opcional tem que ser  ultimo

    // as - casting 

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if(elemento){
            this.elemento = elemento as HTMLElement
        }else {
            throw Error(`Seletor ${seletor} não tem nada no DOM maninho, dá uma verificvada com o programador`)
        }
        
        // quando for true ele vai receber esse valor, se não for ele vai passar reto
        if(escapar){
            this.escapar = escapar;
        }
    }

    // o metodo sendo abstract obrigada o programador a implementar na clase filha
    protected abstract templete(model: T): string ;

    public update(model: T): void{

        let templete = this.templete(model)

        if(this.escapar){
            templete = templete.replace(/<script>[\s\S]*?<\/script>/, '')    
            //expressão regular para não deixar que passe JS. Ele não é u padrão só em classes especificas que vai ser usado                       
        }

        this.elemento.innerHTML = templete
    }
}