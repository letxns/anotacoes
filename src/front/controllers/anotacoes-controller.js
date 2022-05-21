class AnotacoesController{
    constructor(){
        this.array = [];
    }

    addAnotacao(){
        const titulo = document.getElementById("titulo").value; //$("#titulo").val() -> se fosse jQuery
        const descricaoTarefa = document.getElementById("descricaoTarefa").value; //$("#descricaoTarefa").val() -> se fosse jQuery
        const anotacao = new Anotacoes(titulo, descricaoTarefa);
        console.log(anotacao);
        this.array.push(anotacao);
        console.log(this.array);
        const anotacaoView = new AnotacoesView();
        anotacaoView.renderizaAnotacao(anotacao);
    }
}

const novaAnotacao = new AnotacoesController();

const btnSubmit = document.querySelector('#submit');

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    novaAnotacao.addAnotacao();
})







/*

    CÓDIGO BREAKOUT ROOM

class AnotacoesController {
    constructor(array){
        array = [];
        addAnotacoes = () => {
            titulo = document.querySelector("#titulo").val();
            descricaoTarefa = document.querySelector("#descricaoTarefa").val();
            console.log(AnotacoesController)
        }
    }
}*/