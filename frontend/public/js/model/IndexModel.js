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
        //establecer dificultad del simon dice
        this.setDifficulty = (e) => {
            this.difficulty = parseInt(e.target.id);
        };
        this.http = (url, method, fn) => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, { method: method });
            const data = yield response.json();
            fn(data);
        });
        this.http_ = (url, method, fn) => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, { method: method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ "data": fn }) });
            const data = yield response.json();
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
    orderWinners() {
        this._winners.sort((a, b) => (b.point_player) - (a.point_player));
    }
    getWinners(fn) {
        this.http('http://127.0.0.1:1802/simonsay/winners', 'get', fn);
    }
    postWinners(list) {
        this.http_('http://127.0.0.1:1802/simonsay/winners', 'post', list);
    }
}
