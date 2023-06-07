export class Negociacoes {
    constructor() {
        //Guarda uma lista de negociações
        //private negociacoes: Array<Negociacao> = [] ; 
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    /*
    Solução JS
    para que ao retornar o array(objeto) não ser possivel excluir a lista que esta encapsulada, sped operator(...) cada item dessa lista e botnado em uma nova lista

    listaNegociacao(): Array<Negociacao>{
        
            return [...this.negociacoes]
        }

      listaNegociacao(): ReadonlyArray<Negociacao> == listaNegociacao(): readonly Negociacao[]{
    */
    // Solução TS
    listaNegociacao() {
        return this.negociacoes;
    }
}
