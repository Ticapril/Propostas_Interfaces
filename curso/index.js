class IndexController{

    constructor(){
        this._selecionados = 0;
        this._cards = document.querySelectorAll('.card');
        this._trs = document.querySelectorAll("tbody tr");
        this._btnUnicos = document.querySelectorAll(".btn-unico");
        this._btnMultiplos = document.querySelectorAll(".btn-multiplo");
        this.selecao();
    }

    selecao(){

        let aplicaEvento = (elementos, evento, acao, classe) => {
            elementos.forEach(elemento => {
                elemento.addEventListener(evento, event => {
                    acao(elemento, classe);
                });
            });
        }

        let aplicaSelecao = (elemento, classe) => {
            if(elemento.classList.contains(classe)){
                elemento.classList.remove(classe);
                this._selecionados -= 1;
            }else{
                elemento.classList.add(classe);
                this._selecionados += 1;
            }
            this.controleBtns();
        }

        aplicaEvento(this._cards,"click",aplicaSelecao,"card-selecionado");
        aplicaEvento(this._trs,"click",aplicaSelecao,"tabela-selecionada");

    }

    controleBtns(){

        if(this._selecionados == 0){
            this._btnUnicos.forEach(btn => {
                btn.classList.add('d-none');
            });
            this._btnMultiplos.forEach(btn => {
                btn.classList.add('d-none');
            });
        }
        
        if(this._selecionados == 1){
            this._btnUnicos.forEach(btn => {
                btn.classList.remove('d-none');
            });
            this._btnMultiplos.forEach(btn => {
                btn.classList.remove('d-none');
            });
        }

        if(this._selecionados > 1){
            this._btnUnicos.forEach(btn => {
                btn.classList.add('d-none');
            });
        }

    }

}


let classe = new IndexController();