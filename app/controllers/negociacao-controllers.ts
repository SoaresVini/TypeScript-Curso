import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private inputData : HTMLInputElement;
    private inputQuantidade : HTMLInputElement;
    private inputvalor : HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputvalor = document.querySelector('#valor')
    }


    adiciona(){
        const exp = /-/g //expessão regular 
        const date = new Date(this.inputData.value.replace(exp, '/'))

        const quantidade = Number(this.inputQuantidade.value)
        const valor = Number(this.inputvalor.value)

        const negociacao = new Negociacao(
            date,
            quantidade,
            valor
        )

        console.log(negociacao)
    }
}