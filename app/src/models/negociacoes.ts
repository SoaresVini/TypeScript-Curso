import { modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements modelo<Negociacoes>{
    //Guarda uma lista de negociações

    // private negociacoes: Array<Negociacao> = [] ; 

    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
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

    public listaNegociacao(): ReadonlyArray<Negociacao>{
        return this.negociacoes
    }  

    public paraTexto(): string{
        return JSON.stringify(this.negociacoes,null, 2)
    } 

    ehIgual(negociacoes: Negociacoes): boolean {

        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.listaNegociacao())
        
    }
}




    

