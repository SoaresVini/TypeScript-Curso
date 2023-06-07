export class Negociacao {
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
    _data, 
    // readonly valor que é de somente leitura em casos que precise adiconar alguma logica na hora da leitura, ai vc precisa usar o get
    quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        // a data vai ser igual a que foi vai ser identica a data que esta encapsulado dentro da negociaçõa, porem em uma nova referencia. tanto faz usar o setData ou o getData
        const data = new Date(this._data.getTime());
        return data;
    }
}
