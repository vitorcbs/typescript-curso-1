export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(selector: string) {
    this.elemento = document.querySelector(selector);
  }

  template(model: T): string {
    throw Error("Classe filha precisa implementar o template");
  }

  update(model: T): void {
    // joga o template no elemento que foi escolhido no construtor
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }
}
