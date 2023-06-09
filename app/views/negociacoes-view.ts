import { Negociacao } from "../models/negociacao";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes>{

    //vai me retornar o HTML + os dados que eu quero

    //Vou passar o elemento html que vai rececer o retorno do table

    //Fazendo com que o programador não precise ficarescrevendo e adicionando os dados as tabelas manualemnte

    protected templete(model: Negociacoes): string {

        return `
        <table class="table table-hover table-bordered">
            <thead>
            <tr>
                <th>Data</th>
                <th>Quantidade</th>
                <th>Valor</th>
            </tr>
        </thead>   
        <tbody>
            ${model.listaNegociacao().map(negociacao => {
                return `
                    <tr>
                        <td>${this.formatar(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                    </tr>
                `
            }).join('')}
        </tbody> 
        </table>  
        `;
    }

    private formatar(data: Date): string{
        return new Intl.DateTimeFormat().format(data)
    } 
 
}