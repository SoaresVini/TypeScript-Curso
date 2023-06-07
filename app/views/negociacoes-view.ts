export class NegociacoesView{

    //vai me retornar o HTML + os dados que eu quero

    templete(): string {

        return `
        <table class="table table-hover table-bordered"></table>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>
        </table>     
        <tbody>
        </tbody> 
    
        `;
    }

}