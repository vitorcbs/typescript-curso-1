import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private listaNegociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.listaNegociacoes.push(negociacao)
    }

    public lista(): readonly Negociacao[]{ //impede a alteração da lista original
        return this.listaNegociacoes 
    }
}
