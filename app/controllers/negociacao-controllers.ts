import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    private inputData : HTMLInputElement;
    private inputQuantidade : HTMLInputElement;
    private inputvalor : HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor() {
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputvalor = document.querySelector('#valor')
    }


    adiciona(): void{
        const negociacao = this.criaNegociacao()
        this.negociacoes.adiciona(negociacao)
        const negociacoes = this.negociacoes.listaNegociacao()
        console.log(negociacoes)
        this.limparForm()

        
    }

    criaNegociacao(): Negociacao{
        const exp = /-/g //expessão regular 
        const date = new Date(this.inputData.value.replace(exp, ','))

        const quantidade = Number(this.inputQuantidade.value)
        const valor = Number(this.inputvalor.value)

        return new Negociacao(date, quantidade, valor);
    }

    limparForm(): void {
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputvalor.value = ''

        this.inputData.focus()
    }
}