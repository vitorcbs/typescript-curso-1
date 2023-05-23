import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { mensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView'); //a propriedade recebe o elemento com id
        this.mensagemView = new mensagemView('#mensagemView');
        //no momento da instancia da classe, os valores dos inputs serão associados aos valores dos atributos
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes); //ao iniciar a pagina, o template é renderizado
    }
    adicionaNegociacao() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes); //atualiza sempre que tiver um novo
        this.mensagemView.update('Negociação adiconada com sucesso');
        this.limparFormulario();
    }
    criaNegociacao() {
        const expression = /-/g; //gera uma expression global
        const date = new Date(this.inputData.value.replace(expression, ",")); //vai percorrer a data e substituir tudo que tem - por ,
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
