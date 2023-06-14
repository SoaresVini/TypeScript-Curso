export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletor} não tem nada no DOM maninho, dá uma verificvada com o programador`);
        }
    }
    update(model) {
        let templete = this.templete(model);
        this.elemento.innerHTML = templete;
    }
}
//# sourceMappingURL=view.js.map