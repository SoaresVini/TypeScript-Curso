var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorations/dom-injector.js";
import { inspect } from "../decorations/inspect.js";
import { logarTempoDeExecucao } from "../decorations/logar-tempo-de-execucao.js";
import { DiaDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../util/imprimir.js";
import { mensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociaçõesView');
        this.mensagem = new mensagemView('#mensagemView');
        this.negociacoesService = new NegociacoesService();
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputvalor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagem.update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        imprimir(negociacao, this.negociacoes);
        this.limparForm();
        this.atualizaView();
    }
    importarDados() {
        this.negociacoesService.obterNegociacoes()
            .then(negociacoesDeHoje => {
            for (let negociacao of negociacoesDeHoje) {
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        });
    }
    ehDiaUtil(data) {
        return data.getDay() > DiaDaSemana.DOMINGO
            && data.getDay() < DiaDaSemana.SABADO;
    }
    limparForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputvalor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagem.update('Negociação adicionada com sucesso');
    }
}
__decorate([
    domInjector('#data')
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    domInjector('#quantidade')
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector('#valor')
], NegociacaoController.prototype, "inputvalor", void 0);
__decorate([
    logarTempoDeExecucao(),
    inspect
], NegociacaoController.prototype, "adiciona", null);
