import { IndexModel } from "../model/IndexModel.js";
import { IndexView } from "../view/IndexView.js";

export class IndexController {
    public model: IndexModel;
    public view: IndexView;

    constructor(model: IndexModel, view: IndexView) {
        this.model = model;
        this.view = view;

        this.begin();
        this.userInput();
    }
    //inicializa el juego, llamando a que Simón diga su patrón
    public begin() {
        const startbtn = document.getElementById('start');
        const modalDif = document.getElementById('modaldif');
        this.model.startButton();
        startbtn?.addEventListener('click', () => {
            modalDif.close();
            this.simonTurn();
            console.log("click start");
        });

    }
    //establece la dificultad del juego

    //el turno de simon
    public simonTurn() {
        document.getElementById('simon')!.style.visibility = 'visible';
        this.model.simonPattern = this.model.obtainCombination(this.model.round);
        this.view.generaColores(this.model.simonPattern, this.model.difficulty);
        console.log("simon turn");
        setTimeout(() => {console.log("Get ready for this folk");
        document.getElementById('simon')!.style.visibility = 'hidden';
        document.getElementById('human')!.style.visibility = 'visible';
        }, this.model.round * 500 + 1000);

    }
    //el turno del usuario
    public userInput() {
        const checkUserPattern = (e: any) => {
            let turn = this.model.userPattern.push(parseInt(e.target.id));
            let roundLen = this.model.simonPattern.length;
            if (this.model.userPattern[(turn-1)] !== this.model.simonPattern[(turn-1)]){
                console.log("Game Over");
                this.view.modalName();
                this.model.sendDataBase();
                document.getElementById('human')!.style.visibility = 'hidden';
                let db = this.model.winners;
                console.log(db, "hh");
                this.restartSimonSay();
                this.view.showTable(db);
                return true;
            }
            //hasta que la cantidad de userinput no sea igual a la del turno y le queda bien, no pasa a ste ronda
            if (roundLen == turn){
                this.model.simonPattern.splice(0);
                this.model.userPattern.splice(0);
                console.log("You are amazing folk");
                this.model.round++;
                setTimeout(() => {this.simonTurn();
                document.getElementById('human')!.style.visibility = 'hidden';
                }, 1000);
                return true;
            }
        }
        this.view.g?.addEventListener("click", checkUserPattern);
        this.view.r?.addEventListener("click", checkUserPattern);
        this.view.y?.addEventListener("click", checkUserPattern);
        this.view.b?.addEventListener("click", checkUserPattern);
    }

    public restartSimonSay(){
        this.model.round = 1;
        this.model.simonPattern = [];
        this.model.userPattern = [];
    }
}
