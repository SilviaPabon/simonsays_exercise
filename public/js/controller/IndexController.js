export class IndexController {
    constructor(model, view) {
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
                const arrayColors = this.model.obtainCombination(n);
                arrayColors.forEach((c, i) => {
                    setTimeout(() => {
                        this.view.pintar(c);
                    }, (i + 1) * 1200);
                    console.log("object");
                    console.log(arrayColors[2]);
                });
                n++;
            }
            stage++;
        });
        this.view.prueba();
    }
    //todo
    test(name, point_player, level) {
        this.model.winners.push({ name_player: name, point_player: point_player, level: level });
        console.log(this.model.winners);
    }
}
