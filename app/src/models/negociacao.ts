import { modelo } from "../interfaces/modelo.js";
export class Negociacao implements modelo<Negociacao>{ 

    /* 

    Jeito "normal"

    private _data : Date;
    private _quantidade : number;
    private _valor : number

    constructor(data : Date, quantidade : number, valor : number){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor
    }
    get data(): Date{
        return this._data
    }

    get quantidade(): Number{
        return this._quantidade
    }

    get valor(): Number{
        return this._valor
    }

    get volume(): Number{
        return this._quantidade * this._valor
    }
    */


    //private podeDeixarAquiTambem : string
    constructor(
        //  Coloca o modificicador indica par ao TS que por debaixo dos panos vai cria uma propriedade da classe que contenha o mesmo nome do contrutor e vai fazer a atribuição

        private _data : Date,
        // readonly valor que é de somente leitura em casos que precise adiconar alguma logica na hora da leitura, ai vc precisa usar o get
        
        public readonly quantidade : number, 
        public readonly valor : number
    ){}

    public static criaDe(dataString :string, quantidadeString :string, valorString:string ): Negociacao{
        const exp = /-/g //expessão regular 
        const date = new Date(dataString.replace(exp, ','))
        const quantidade = Number(quantidadeString)
        const valor = Number(valorString)
        return new Negociacao(date, quantidade, valor);
    }

    get volume(): Number{
        return this.quantidade * this.valor
    }

    get data(): Date {

        // a data vai ser igual a que foi vai ser identica a data que esta encapsulado dentro da negociaçõa, porem em uma nova referencia. tanto faz usar o setData ou o getData

        const data = new Date(this._data.getTime());
        return data
    }

    public paraTexto(): string {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `
    }

    public ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear()
    }
}

