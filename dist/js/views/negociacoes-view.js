import { View } from "./view.js";
export class NegociacoesView extends View {
    //vai me retornar o HTML + os dados que eu quero
    //Vou passar o elemento html que vai rececer o retorno do table
    //Fazendo com que o programador não precise ficarescrevendo e adicionando os dados as tabelas manualemnte
    templete(model) {
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
                `;
        }).join('')}
        </tbody> 
        </table>  
        `;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
