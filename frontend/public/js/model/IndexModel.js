var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class IndexModel {
    constructor() {
        this._winners = [];
        this.simonPattern = [];
        this.userPattern = [];
        this.round = 1;
        this.roundReal = 1;
        this.difficulty = 600;
        //todo
        /* public startButton(){
            const _btn = document.getElementById('btn-start');
            const modalDif: any = document.getElementById('modaldif');
            _btn?.addEventListener('click', (e) => {
                e.preventDefault();
                modalDif.showModal();
                this.setDifficulty();
            });
        } */
        //todo
        /* public setDifficulty(){
            const easy = document.getElementById('700');
            const normal = document.getElementById('500');
            const hard = document.getElementById('100');
    
            const setDifficulty = (e: any) => {
                this.difficulty = parseInt(e.target.id);
            }
            easy?.addEventListener('click', setDifficulty);
            normal?.addEventListener('click', setDifficulty);
            hard?.addEventListener('click', setDifficulty);
        } */
        //establecer dificultad del simon dice
        this.setDifficulty = (e) => {
            this.difficulty = parseInt(e.target.id);
        };
        this.http = (url, method, fn) => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, { method: method });
            const data = yield response.json();
            fn(data);
        });
        this._winners;
    }
    get winners() {
        return this._winners;
    }
    set winners(winners) {
        this._winners = winners;
    }
    //retorna array d n posiciones, con números del 0 al 3 random
    obtainCombination(n) {
        for (let index = 0; index < n; index++) {
            let color = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
            this.simonPattern.push(color);
        }
        return this.simonPattern;
    }
    /*
    modal del nombre abierto: this.view
    evento en el botón de enviar: this.view
    guardar en la lista de ganadores: this.controller {this.modelo}
    mostrar la tabla: vista

    vista
    public mostrartabla(array de ){
        limpiar y generar
    }
    */
    orderWinners() {
        this._winners.sort((a, b) => (b.point_player) - (a.point_player));
        console.log(this._winners);
    }
    getWinners(id, fn) {
        //this.http(`${this.url}people/${id}`, 'get', fn);
    }
    postWinners() {
        //this.http(`${this.url}people/${id}`, 'get', fn);
    }
}
