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
    throw Error('Deu pau ai maninho')
}
