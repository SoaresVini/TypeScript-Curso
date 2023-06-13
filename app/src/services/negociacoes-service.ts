import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService{

    public obterNegociacoes(): Promise<Negociacao[]> {
        //Requisição para esse endereço

       return fetch('http://localhost:8080/dados')
        // recebi os dados e os converti para JSON
            .then(res => res.json())
            // Interface recebe os dados da API e falar que os dados recebidos sõa do Tipo number e passa como é o nome delas, ou seja, tira minha margem de erro
            .then((dados: NegociacoesDoDia[]) => {
                return dados.map(dado => {
                    // converto o Array q é do tipo Any para uma negociação
                    return new Negociacao(
                        new Date(), 
                        dado.vezes, 
                        dado.montante
                        )
                })
                /*
                Se tivesse n controller
            .then( => {
                for (const negociacao of negociacoesDeHoje) {
                    this.negociacoes.adiciona(negociacao)
                }
                this.negociacoesView.update(this.negociacoes)
            })
        */
                
            })
            // Agora o TS entende que isso é do tipo negociação
    }

}