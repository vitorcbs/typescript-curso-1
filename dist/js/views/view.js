export class View {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
    template(model) {
        throw Error("Classe filha precisa implementar o template");
    }
    update(model) {
        // joga o template no elemento que foi escolhido no construtor
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
