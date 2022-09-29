import { IndexModel } from "../model/IndexModel.js";
import { IndexView } from "../view/IndexView.js";

export class IndexController {
    public model: IndexModel;
    public view: IndexView;

    public userTurn : boolean = false;

    constructor(model: IndexModel, view: IndexView) {
        this.model = model;
        this.view = view;
        //this.test("maría", 5, 5);
        //console.log(this.view.initiate);
        this.start();
    }
    //corrobora si el botón de start ha sido activado e inicia
    public start() {
        //todo de pronto esto de vista?
        const _btn = document.getElementById('btn-start');

        _btn?.addEventListener('click', (e) => {
            e.preventDefault();
            this.view.initiate = true;
            if (this.view.initiate == true){
                let level = 1;
                let noTerminated = true;
                let simonColors = this.model.obtainCombination(level);
                simonColors.forEach((c, i) => {
                    setTimeout(() => {
                        this.view.pintar(c)
                    }, (i+1) * 1200);
                })
                this.userTurn = true;
                if (this.userTurn == true) {
                    this.userInput(simonColors, noTerminated);
                }
                this.userTurn = false;
                level++;
            }
        });
    }

    public userInput (simonPattern: number[], noTerminated: boolean) {
        let arrayUser = this.model.userPattern;
        function checkUserPattern(e: any) {
            let turn = arrayUser.push(parseInt(e.target.id));
            console.log(typeof arrayUser[(turn-1)]);
            console.log(typeof simonPattern[(turn-1)]);
            if (arrayUser[(turn-1)] !== simonPattern[(turn-1)]){
                console.log("Game Over");
                noTerminated = false;
                return;
            } else {
                return;
            }
          }
        this.view.r?.addEventListener("click", checkUserPattern);
        this.view.g?.addEventListener("click", checkUserPattern);
        this.view.y?.addEventListener("click", checkUserPattern);
        this.view.b?.addEventListener("click", checkUserPattern);
    }

    //todo
    public test (name: string, point_player: number, level: number): void {
        this.model.winners.push({name_player: name, point_player: point_player, level: level})
        console.log(this.model.winners)
    }

}
