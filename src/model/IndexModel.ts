export class IndexModel {
    //todo
    private colors: string[] = ['G', 'R', 'Y', 'B'];
    //todo
    private _winners: { name_player: string, point_player: number, level: number }[] = [];

    constructor() {
        this.colors;
        this._winners = [];
    }

    public get winners() {
        return this._winners;
    }
    public set winners(winners: { name_player: string, point_player: number, level: number }[]) {
        this._winners = winners;
    }
    //retorna array d n posiciones, con números del 0 al 3 random
    public obtainCombination(n: number) {
        let _colorsArray: number[] = [];
        for (let index = 0; index < n; index++) {
            let color = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
            _colorsArray.push(color);
        }
        return _colorsArray;
    }
}
