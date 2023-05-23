export class View {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
    update(model) {
        // joga o template no elemento que foi escolhido no construtor
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
