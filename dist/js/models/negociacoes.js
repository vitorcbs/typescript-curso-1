export class Negociacoes {
    constructor() {
        this.listaNegociacoes = [];
    }
    adiciona(negociacao) {
        this.listaNegociacoes.push(negociacao);
    }
    lista() {
        return this.listaNegociacoes;
    }
}
const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n => {
    '';
});
