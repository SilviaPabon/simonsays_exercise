export class IndexView {
    constructor() {
        //todo
        this._initiate = false;
        this.g = document.getElementById('0');
        this.r = document.getElementById('1');
        this.y = document.getElementById('2');
        this.b = document.getElementById('3');
        this.getElement = (selector) => document.querySelector(selector);
        this._display = this.getElement('.container');
    }
    set display(display) {
        this._display = display;
    }
    get display() {
        return this._display;
    }
    set initiate(initiate) {
        this._initiate = initiate;
    }
    get initiate() {
        return this._initiate;
    }
    //va pintando o iluminando los botones luego de start()
    pintar(orden) {
        if (orden == 0) {
            this.g.classList.add('green-light');
            setTimeout(() => {
                this.g.classList.remove('green-light');
            }, 1000);
        }
        else if (orden == 1) {
            this.r.classList.add('red-light');
            setTimeout(() => {
                this.r.classList.remove('red-light');
            }, 1000);
        }
        else if (orden == 2) {
            this.y.classList.add('yellow-light');
            setTimeout(() => {
                this.y.classList.remove('yellow-light');
            }, 1000);
        }
        else if (orden == 3) {
            this.b.classList.add('blue-light');
            setTimeout(() => {
                this.b.classList.remove('blue-light');
            }, 1000);
        }
        //TODO PONER ESE SWITCH EN UNO SOLO
    }
}
