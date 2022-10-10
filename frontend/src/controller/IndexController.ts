import { IndexModel } from "../model/IndexModel.js";
import { IndexView } from "../view/IndexView.js";

export class IndexController {
    public model: IndexModel;
    public view: IndexView;

    public prueba: boolean = false;

    constructor(model: IndexModel, view: IndexView) {
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
    public begin() {
        //start button - modal dificulty
        this.view.visibleTitle('form', 'hidden');
        this.view.listenStart(this.model.setDifficulty);
        this.view.listenStartGame(this.simonTurn);
        //this.view.modalDif.close();
        //this.simonTurn();
    }
    //todo quizá bloquear las teclas
    //el turno de simon
    public simonTurn = () => {
        this.view.visibleTitle('simon', 'visible');
        this.model.simonPattern = this.model.obtainCombination(this.model.round);
        this.view.generaColores(this.model.simonPattern, this.model.difficulty);
        setTimeout(() => {console.log("Get ready for this folk");
        this.view.visibleTitle('simon', 'hidden');
        this.view.visibleTitle('human', 'visible');
        }, this.model.round * 500 + 1000);
    }

    //el turno del usuario
    public userInput = (e: any) => {
        let turn = this.model.userPattern.push(parseInt(e.target.id));
        let roundLen = this.model.simonPattern.length;
        if (this.model.userPattern[(turn-1)] !== this.model.simonPattern[(turn-1)]){
            console.log("Game Over");
            this.view.visibleTitle('human', 'hidden');
            this.view.visibleTitle('form', 'visible');
            this.view.buttonSendGameOver(this.handleSend);
            this.restartSimonSay();
            return true;
        }
        //hasta que la cantidad de userinput no sea igual a la del turno y le queda bien, no pasa a ste ronda
        if (roundLen == turn){
            this.model.simonPattern.splice(0);
            this.model.userPattern.splice(0);
            console.log("You are amazing folk");
            this.model.round++;
            setTimeout(() => {this.simonTurn();
                this.view.visibleTitle('human', 'hidden');
            }, 1000);
            return true;
        }
    }

    public handleSend = (player: string) => {
        let difficulty: string = '';
        switch (this.model.difficulty) {
            case 700:
                difficulty = 'Easy';
                break;
            case 600:
                difficulty = 'Normal';
                break;
            case 100:
                difficulty = 'Hard';
                break;
            default:
                break;
        }
        this.model.winners.push({name_player: player, point_player: this.model.round, level: difficulty})
        localStorage.setItem('winners', JSON.stringify(this.model.winners));
        let prueba = JSON.parse(localStorage.getItem(('winners'))!);

        this.view.showTable(prueba);
    }

    public restartSimonSay(){
        this.model.round = 1;
        this.model.simonPattern = [];
        this.model.userPattern = [];
    }
}
