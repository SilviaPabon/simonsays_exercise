export class IndexController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.begin();
        this.userInput();
    }
    //inicializa el juego, llamando a que Simón diga su patrón
    begin() {
        const startbtn = document.getElementById('start');
        const modalDif = document.getElementById('modaldif');
        this.model.startButton();
        startbtn === null || startbtn === void 0 ? void 0 : startbtn.addEventListener('click', () => {
            modalDif.close();
            this.simonTurn();
            console.log("click start");
        });
    }
    //establece la dificultad del juego
    //el turno de simon
    simonTurn() {
        document.getElementById('simon').style.visibility = 'visible';
        this.model.simonPattern = this.model.obtainCombination(this.model.round);
        this.view.generaColores(this.model.simonPattern, this.model.difficulty);
        console.log("simon turn");
        setTimeout(() => {
            console.log("Get ready for this folk");
            document.getElementById('simon').style.visibility = 'hidden';
            document.getElementById('human').style.visibility = 'visible';
        }, this.model.round * 500 + 1000);
    }
    //el turno del usuario
    userInput() {
        var _a, _b, _c, _d;
        const checkUserPattern = (e) => {
            let turn = this.model.userPattern.push(parseInt(e.target.id));
            let roundLen = this.model.simonPattern.length;
            if (this.model.userPattern[(turn - 1)] !== this.model.simonPattern[(turn - 1)]) {
                console.log("Game Over");
                this.view.modalName();
                this.model.sendDataBase();
                let db = this.model.winners;
                this.view.showTable(db);
                this.restartSimonSay();
                document.getElementById('human').style.visibility = 'hidden';
                return true;
            }
            //hasta que la cantidad de userinput no sea igual a la del turno y le queda bien, no pasa a ste ronda
            if (roundLen == turn) {
                this.model.simonPattern.splice(0);
                this.model.userPattern.splice(0);
                console.log("You are amazing folk");
                this.model.round++;
                setTimeout(() => {
                    this.simonTurn();
                    document.getElementById('human').style.visibility = 'hidden';
                }, 1000);
                return true;
            }
        };
        (_a = this.view.g) === null || _a === void 0 ? void 0 : _a.addEventListener("click", checkUserPattern);
        (_b = this.view.r) === null || _b === void 0 ? void 0 : _b.addEventListener("click", checkUserPattern);
        (_c = this.view.y) === null || _c === void 0 ? void 0 : _c.addEventListener("click", checkUserPattern);
        (_d = this.view.b) === null || _d === void 0 ? void 0 : _d.addEventListener("click", checkUserPattern);
    }
    restartSimonSay() {
        this.model.round = 1;
        this.model.simonPattern = [];
        this.model.userPattern = [];
    }
}
