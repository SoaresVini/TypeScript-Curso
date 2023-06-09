import { View } from "./view.js";

export class mensagemView extends View<String>{

    protected templete(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `
    }
}