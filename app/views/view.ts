export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(selector: string) {
    this.elemento = document.querySelector(selector);
  }

  abstract template(model: T): string;

  update(model: T): void {
    // joga o template no elemento que foi escolhido no construtor
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }
}
