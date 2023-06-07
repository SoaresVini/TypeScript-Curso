import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputvalor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        const negociacoes = this.negociacoes.listaNegociacao();
        console.log(negociacoes);
        this.limparForm();
    }
    criaNegociacao() {
        const exp = /-/g; //expessão regular 
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = Number(this.inputQuantidade.value);
        const valor = Number(this.inputvalor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputvalor.value = '';
        this.inputData.focus();
    }
}
