import { IndexModel } from "../model/IndexModel.js";
import { IndexView } from "../view/IndexView.js";

export class IndexController {
    public model: IndexModel;
    public view: IndexView;

    constructor(model: IndexModel, view: IndexView) {
        this.model = model;
        this.view = view;

        this.begin();
        this.view.listenPattern(this.userInput);
        this.model.getWinners(this.view.showTable);
    }

    //inicialización del juego
    public begin() {
        this.view.visibleTitle('form', 'hidden');
        this.view.listenStart(this.model.setDifficulty);
        this.view.listenStartGame(this.simonTurn);
    }

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
        //what happen if the person lost
        if (this.model.userPattern[(turn-1)] !== this.model.simonPattern[(turn-1)]){
            console.log("Game Over");
            //se esconde el mensaje de turno y aparece un form
            this.view.visibleTitle('human', 'hidden');
            this.view.visibleTitle('form', 'visible');
            // se contabiliza el round real
            this.model.roundReal = (this.model.round) - 1;
            //qué pasa al clicar al enviar la persona su nombre, llama a handleSend
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
    //envia datos de usuario ordenados, hace push en winners, y postea lo que hay en winners, envía a db
    //hace un llamado para que la vista se actualice con los nuevos datos
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
        this.model.winners.push({name_player: player, point_player: this.model.roundReal, level: difficulty})
        this.model.postWinners(this.model.winners)
        this.model.getWinners(this.view.showTable)
        //to help this.model.round
        this.model.roundReal = 1;
    }

    //restart the game and some values
    public restartSimonSay(){
        this.model.round = 1;
        this.model.simonPattern = [];
        this.model.userPattern = [];
        this.model.difficulty = 600;
    }
}
