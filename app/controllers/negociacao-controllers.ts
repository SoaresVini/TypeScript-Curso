import { DiaDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { mensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData : HTMLInputElement;
    private inputQuantidade : HTMLInputElement;
    private inputvalor : HTMLInputElement;
    private negociacoes = new Negociacoes();
    //passei o id da div que vai conter a tabela com os dados na negociação
    private negociacoesView = new NegociacoesView
    ('#negociaçõesView');
    private mensagem = new mensagemView('#mensagemView');


    constructor() {
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputvalor = document.querySelector('#valor')
        this.negociacoesView.update(this.negociacoes)
    }


    public adiciona(): void{

        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputvalor.value
        )
       
        if(!this.ehDiaUtil(negociacao.data)){
                this.mensagem.update('Apenas negociações em dias úteis são aceitas')
            return
        }
      
        this.negociacoes.adiciona(negociacao)
        this.limparForm()
        this.atualizaView();
            

    }

    private ehDiaUtil(data: Date){
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO
    }


    private limparForm(): void {
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputvalor.value = ''

        this.inputData.focus()
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes)
        this.mensagem.update('Negociação adicionada com sucesso')
    }
}