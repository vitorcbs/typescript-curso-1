import { View } from "./view.js";
export class NegociacoesView extends View {
    //   private elemento: HTMLElement; //cria a propriedade que irá receber um elemento do html
    //   constructor(seletor: string) {
    //     this.elemento = document.querySelector(seletor); //a propriedade, ao iniciar, vai receber um elemento que será passado na função querySelector
    //   }
    template(model) {
        //cria o template(esqueleto) da view
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th> DATA </th>
                    <th> QUANTIDADE </th>
                    <th> VALOR </th>
                </tr>
            </thead>
            <tbody>
                ${model
            .lista()
            .map((negociacao) => {
            //vai percorrer todos os itens da lista gerada pelo metodo lista, e pra cada item vai pegar os dados e jogar no template
            return `
                    <tr>
                        <td>
                            ${this.formatarData(negociacao.data)}
                        </td>
                        <td>
                            ${negociacao.quantidade}
                        </td>
                        <td>
                            ${negociacao.valor}
                        </td>
                    </tr>
                    `;
        })
            .join("")} 
            </tbody>
        </table>
        `;
    }
    formatarData(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
// .join() junta todas as strings de um array e separa ela de acordo com o que o usuario quer
//new Intl.DateTimeFormat().format(parametro) cria uma instancia que formata a data para um padrão internacional
