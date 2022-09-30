export class IndexModel {
    //todo

    private _winners:  Array<{}> = [];

    public simonPattern: number[] = [];
    public userPattern: number[] = [];

    public round: number = 1;
    public difficulty: number = 500;


    constructor() {
        this._winners = [];
    }

    public get winners() {
        return this._winners;
    }
    public set winners(winners: Array<{}>) {
        this._winners = winners;
    }
    //todo
    public startButton(){
        const _btn = document.getElementById('btn-start');
        const modalDif = document.getElementById('modaldif');
        _btn?.addEventListener('click', (e) => {
            e.preventDefault();
            modalDif.showModal();
            this.setDifficulty();
        });
    }
    //todo
    public setDifficulty(){
        const easy = document.getElementById('700');
        const normal = document.getElementById('500');
        const hard = document.getElementById('100');

        const setDifficulty = (e) => {
            this.difficulty = parseInt(e.target.id);
        }
        easy?.addEventListener('click', setDifficulty);
        normal?.addEventListener('click', setDifficulty);
        hard?.addEventListener('click', setDifficulty);
    }
    //retorna array d n posiciones, con números del 0 al 3 random
    public obtainCombination(n: number) {
        for (let index = 0; index < n; index++) {
            let color = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
            this.simonPattern.push(color);
        }
        return this.simonPattern;
    }

    public sendDataBase() {
        const modalName = document.getElementById('askname');
        const input = document.getElementById('userName');
        const buttonSend = document.getElementById('sendName');
        buttonSend?.addEventListener('click', (e) => {
            if (this._winners.length < 10) {
                this._winners.push({name_player: input.value, point_player: this.round, level: this.difficulty})
                console.log(this._winners, "h");
            }
            modalName?.close();
        })
    }
}
