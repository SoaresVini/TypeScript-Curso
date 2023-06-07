import { NegociacaoController } from "./controllers/negociacao-controllers.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form')
form.addEventListener('submit', event => {
    //evento que bloqueia o evento padrão do form de dar o refresh
    event.preventDefault();
    controller.adiciona();
})

const negociacoesView = new NegociacoesView()
const templete = negociacoesView.templete()
console.log(templete)