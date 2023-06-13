import { NegociacaoController } from "./controllers/negociacao-controllers.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form')
if(form){
    form.addEventListener('submit', event => {
        //evento que bloqueia o evento padrão do form de dar o refresh
        event.preventDefault();
        controller.adiciona();
    })
}else {
    throw Error('Não é possivel iniciar a aplicação')
}

const botaoImporta = document.querySelector('#botao-importa')
if(botaoImporta){
    botaoImporta.addEventListener('click', () =>{
        controller.importarDados()
    })

}else{
    throw Error('Botão importa não foi encontrado')
}
