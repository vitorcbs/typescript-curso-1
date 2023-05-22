import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes: Negociacoes = new Negociacoes();

  constructor() {
    //no momento da instancia da classe, os valores dos inputs serão associados aos valores dos atributos
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  adicionaNegociacao(): void {
    const negociacao = this.criaNegociacao()
    this.negociacoes.adiciona(negociacao)
    console.log(this.negociacoes.lista())
    this.limparFormulario()
  }

  criaNegociacao(): Negociacao { //agora ele retorna uma Negociacao
    const expression = /-/g; //gera uma expression global
    const date = new Date(this.inputData.value.replace(expression, ",")); //vai percorrer a data e substituir tudo que tem - por ,

    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);

    return new Negociacao(date, quantidade, valor);
    
  }

  limparFormulario(): void{ //limpa os campos e coloca foco no campo de data
    this.inputData.value = ''
    this.inputQuantidade.value = ''
    this.inputValor.value = ''

    this.inputData.focus()
  }
}
