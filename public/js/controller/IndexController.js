export class IndexController {
    constructor(model, view) {
        //todo quizá bloquear las teclas
        //el turno de simon
        this.simonTurn = () => {
            this.view.visibleTitle('simon', 'visible');
            this.model.simonPattern = this.model.obtainCombination(this.model.round);
            this.view.generaColores(this.model.simonPattern, this.model.difficulty);
            setTimeout(() => {
                console.log("Get ready for this folk");
                this.view.visibleTitle('simon', 'hidden');
                this.view.visibleTitle('human', 'visible');
            }, this.model.round * 500 + 1000);
        };
        //el turno del usuario
        this.userInput = (e) => {
            let turn = this.model.userPattern.push(parseInt(e.target.id));
            let roundLen = this.model.simonPattern.length;
            if (this.model.userPattern[(turn - 1)] !== this.model.simonPattern[(turn - 1)]) {
                console.log("Game Over");
                this.view.visibleTitle('human', 'hidden');
                this.showModal();
                this.restartSimonSay();
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
                    this.view.visibleTitle('human', 'hidden');
                }, 1000);
                return true;
            }
        };
        this.handleSend = (player) => {
            this.model.winners.push({ name_player: player, point_player: this.model.round, level: this.model.difficulty });
            console.log(this.model.winners, "prueba");
            //localStorage.setItem("winners", this.model.winners.toString());
            //console.log(localStorage);
        };
        this.model = model;
        this.view = view;
        this.begin();
        this.view.listenPattern(this.userInput);
    }
    //inicializa el juego, llamando a que Simón diga su patrón
    /* public begin() {
        const startbtn = document.getElementById('start');
        const modalDif: any = document.getElementById('modaldif');
        this.model.startButton();
        startbtn?.addEventListener('click', () => {
            modalDif.close();
            this.simonTurn();
            console.log("click start");
        });

    } */
    //inicialización del juego
    begin() {
        //start button - modal dificulty
        this.view.listenStart(this.model.setDifficulty);
        this.view.listenStartGame(this.simonTurn);
        //this.view.modalDif.close();
        //this.simonTurn();
    }
    restartSimonSay() {
        this.view.modalname.close();
        this.model.round = 1;
        this.model.simonPattern = [];
        this.model.userPattern = [];
    }
    showModal() {
        this.view.modalname.showModal();
        console.log("showmodal");
        this.view.buttonSendGameOver(this.handleSend);
    }
}
