export class IndexModel {

    private _winners:  Array<player> = [];

    public simonPattern: number[] = [];
    public userPattern: number[] = [];

    public round: number = 1;
    public roundReal: number = 1;
    public difficulty: number = 600;


    constructor() {
        this._winners;
    }

    public get winners(): Array<player> {
        return this._winners;
    }
    public set winners(winners: Array<player>) {
        this._winners = winners;
    }

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

    public orderWinners(){
        this._winners.sort((a, b) => (b.point_player) - (a.point_player));
        console.log(this._winners);
    }

    public getWinners(fn: Function): void {
        this.http('http://127.0.0.1:1802/simonsay/winners', 'get', fn);
    }

    public postWinners(list: any): void {
        this.http_('http://127.0.0.1:1802/simonsay/winners', 'post', list);
    }

    public http = async (url: string, method: string, fn: Function) => {
        const response = await fetch(url, {method: method});
        const data = await response.json();
        console.log(data);
        fn(data);
    }

    public http_ = async (url: string, method: string, fn: any) => {
        console.log(fn, "2");
        const response = await fetch(url, {method: method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({"data": fn}) });
        const data = await response.json();
        console.log(data);
    }
}
