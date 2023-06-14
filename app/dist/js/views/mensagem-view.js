import { View } from "./view.js";
export class mensagemView extends View {
    templete(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
//# sourceMappingURL=mensagem-view.js.map