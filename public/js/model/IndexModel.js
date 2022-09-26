export class IndexModel {
    constructor() {
        // colores para manipular, lista de ganadores
        this.colors = ['G', 'R', 'Y', 'B'];
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
    init(n) {
        let _colorsArray = [];
        for (let index = 0; index < n; index++) {
            let color = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
            _colorsArray.push(color);
        }
        return _colorsArray;
    }
}
