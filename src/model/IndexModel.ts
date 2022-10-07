export class IndexModel {

    private _winners:  Array<player> = [];

    public simonPattern: number[] = [];
    public userPattern: number[] = [];

    public round: number = 1;
    public difficulty: number = 500;


    constructor() {
        this._winners;
    }

    public get winners(): Array<player> {
        return this._winners;
    }
    public set winners(winners: Array<player>) {
        this._winners = winners;
    }
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
    public setDifficulty = (e: any) => {
        this.difficulty = parseInt(e.target.id);
    }

    //retorna array d n posiciones, con números del 0 al 3 random
    public obtainCombination(n: number) {
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

    public sendDataBase() {
        const modalName: any = document.getElementById('askname');
        const buttonSend = document.getElementById('sendName');
        let usertable = document.getElementById('userstable')!;
        buttonSend?.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("this._winners");
            if (this._winners.length < 10) {
                this.winners.push({name_player: "aaa", point_player: 111, level: 111});
                console.log(this._winners.length);
                let usertable = document.getElementById('userstable')!;
                let tabla = document.getElementById('top-table');
                console.log(this.winners);
            }
            usertable.insertAdjacentHTML('beforebegin', `<tr id="tableex"><td>ccc</td><td>bbb</td><td>xxx</td></tr>`);
            modalName?.close();
        })

    }
}
