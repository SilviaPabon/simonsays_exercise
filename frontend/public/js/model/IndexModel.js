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
        //fetch to get
        this.httpGet = (url, method, fn) => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, { method: method });
            const data = yield response.json();
            fn(data);
        });
        //fetch to post
        this.httpPost = (url, method, playerData) => __awaiter(this, void 0, void 0, function* () {
            yield fetch(url, { method: method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ "data": playerData }) });
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
    //needs method httpGet
    getWinners(fn) {
        this.httpGet('http://127.0.0.1:1802/simonsay/winners', 'get', fn);
    }
    //needs method httpPost
    postWinners(data) {
        this.httpPost('http://127.0.0.1:1802/simonsay/winners', 'post', data);
    }
}
