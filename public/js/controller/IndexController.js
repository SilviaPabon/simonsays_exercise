export class IndexController {
    constructor(model, view) {
        this.userTurn = false;
        this.model = model;
        this.view = view;
        //this.test("maría", 5, 5);
        //console.log(this.view.initiate);
        this.start();
    }
    //corrobora si el botón de start ha sido activado e inicia
    start() {
        //todo de pronto esto de vista?
        const _btn = document.getElementById('btn-start');
        _btn === null || _btn === void 0 ? void 0 : _btn.addEventListener('click', (e) => {
            e.preventDefault();
            let stage = 0;
            this.view.initiate = true;
            if (this.view.initiate == true) {
                let n = 2;
                let simonColors = this.model.obtainCombination(n);
                simonColors.forEach((c, i) => {
                    setTimeout(() => {
                        this.view.pintar(c);
                    }, (i + 1) * 1200);
                });
                n++;
                this.userTurn = true;
                if (this.userTurn == true) {
                    this.userInput(simonColors);
                }
            }
            stage++;
        });
    }
    userInput(simonPattern) {
        var _a, _b, _c, _d;
        let arrayUser = this.model.userPattern;
        function checkUserPattern(e) {
            let turn = arrayUser.push(parseInt(e.target.id));
            console.log(typeof arrayUser[(turn - 1)]);
            console.log(typeof simonPattern[(turn - 1)]);
            if (arrayUser[(turn - 1)] !== simonPattern[(turn - 1)]) {
                console.log("Game Over");
                return;
            }
        }
        (_a = this.view.r) === null || _a === void 0 ? void 0 : _a.addEventListener("click", checkUserPattern);
        (_b = this.view.g) === null || _b === void 0 ? void 0 : _b.addEventListener("click", checkUserPattern);
        (_c = this.view.y) === null || _c === void 0 ? void 0 : _c.addEventListener("click", checkUserPattern);
        (_d = this.view.b) === null || _d === void 0 ? void 0 : _d.addEventListener("click", checkUserPattern);
    }
    checkPattern() {
    }
    //todo
    test(name, point_player, level) {
        this.model.winners.push({ name_player: name, point_player: point_player, level: level });
        console.log(this.model.winners);
    }
}
