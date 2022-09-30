export class IndexModel {
    constructor() {
        //todo
        this._winners = [];
        this.simonPattern = [];
        this.userPattern = [];
        this.round = 1;
        this.difficulty = 500;
        this._winners = [];
    }
    get winners() {
        return this._winners;
    }
    set winners(winners) {
        this._winners = winners;
    }
    //todo
    startButton() {
        const _btn = document.getElementById('btn-start');
        const modalDif = document.getElementById('modaldif');
        _btn === null || _btn === void 0 ? void 0 : _btn.addEventListener('click', (e) => {
            e.preventDefault();
            modalDif.showModal();
            this.setDifficulty();
        });
    }
    //todo
    setDifficulty() {
        const easy = document.getElementById('700');
        const normal = document.getElementById('500');
        const hard = document.getElementById('100');
        const setDifficulty = (e) => {
            this.difficulty = parseInt(e.target.id);
        };
        easy === null || easy === void 0 ? void 0 : easy.addEventListener('click', setDifficulty);
        normal === null || normal === void 0 ? void 0 : normal.addEventListener('click', setDifficulty);
        hard === null || hard === void 0 ? void 0 : hard.addEventListener('click', setDifficulty);
    }
    //retorna array d n posiciones, con números del 0 al 3 random
    obtainCombination(n) {
        for (let index = 0; index < n; index++) {
            let color = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
            this.simonPattern.push(color);
        }
        return this.simonPattern;
    }
    sendDataBase() {
        const modalName = document.getElementById('askname');
        const input = document.getElementById('userName');
        const buttonSend = document.getElementById('sendName');
        buttonSend === null || buttonSend === void 0 ? void 0 : buttonSend.addEventListener('click', (e) => {
            if (this._winners.length < 10) {
                this._winners.push({ name_player: input.value, point_player: this.round, level: this.difficulty });
            }
            modalName === null || modalName === void 0 ? void 0 : modalName.close();
        });
    }
}
