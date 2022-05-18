class Anotacoes {
    constructor(titulo, notas){
        try{
            this.titulo = titulo;
            this.notas =  notas; 
            
            if(typeof titulo != 'string' || typeof notas != 'string'){
                throw new Error("Criação de notas - dados")
                
            }
        }catch(erro){
            window.alert(erro)
        }
    }
}

let teste1 = new Anotacoes("teste", "ola");
let teste2 = new Anotacoes(5, "ola");