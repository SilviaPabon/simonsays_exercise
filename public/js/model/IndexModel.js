export class IndexModel {
    constructor() {
        //todo
        this.colors = ['G', 'R', 'Y', 'B'];
        //todo
        this._winners = [];
        this.colors;
        this._winners = [];
    }
    get winners() {
        return this._winners;
    }
    set winners(winners) {
        this._winners = winners;
    }
    //retorna array d n posiciones, con números del 0 al 3 random
    obtainCombination(n) {
        let _colorsArray = [];
        for (let index = 0; index < n; index++) {
            let color = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
            _colorsArray.push(color);
        }
        return _colorsArray;
    }
}
