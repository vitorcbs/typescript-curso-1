import { daysOfWeek } from "../enums/days-of-week.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { mensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes: Negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView"); //a propriedade recebe o elemento com id
  private mensagemView = new mensagemView("#mensagemView");

  constructor() {
    //no momento da instancia da classe, os valores dos inputs serão associados aos valores dos atributos
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.negociacoesView.update(this.negociacoes); //ao iniciar a pagina, o template é renderizado
  }

  public adicionaNegociacao(): void {
    const negociacao = this.criaNegociacao();
    if (!this.ehDiaUtil(negociacao.data)) {
      this.mensagemView
        .update('A negociação não está sendo feita em um dia útil')
      return;
    } else {
      this.negociacoes.adiciona(negociacao);
      this.limparFormulario();
      this.atualizaView();
    }
  }

  private ehDiaUtil(data: Date): boolean {
    return data.getDay() > daysOfWeek.DOMINGO && data.getDay() < daysOfWeek.SABADO
  }

  private criaNegociacao(): Negociacao {
    //agora ele retorna uma Negociacao
    const expression = /-/g; //gera uma expression global
    const date = new Date(this.inputData.value.replace(expression, ",")); //vai percorrer a data e substituir tudo que tem - por ,

    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);

    return new Negociacao(date, quantidade, valor);
  }

  private limparFormulario(): void {
    //limpa os campos e coloca foco no campo de data
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";

    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes); //atualiza sempre que tiver um novo
    this.mensagemView.update("Negociação adiconada com sucesso");
  }
}
