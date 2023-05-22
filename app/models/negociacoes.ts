import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private listaNegociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.listaNegociacoes.push(negociacao)
    }

    lista(): readonly Negociacao[]{ //impede a alteração da lista original
        return this.listaNegociacoes 
    }
}

const negociacoes = new Negociacoes()
negociacoes.lista().forEach(n => {
    ''
})