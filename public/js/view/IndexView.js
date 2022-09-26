export class IndexView {
    constructor() {
        this._initiate = false;
        this.getElement = (selector) => document.querySelector(selector);
        this._display = this.getElement('.container');
    }
    //TODO VER SI SE CAMBIA
    set display(display) {
        this._display = display;
    }
    // Permite desplegar el original
    get display() {
        return this._display;
    }
    set initiate(initiate) {
        this._initiate = initiate;
    }
    // Permite desplegar el original
    get initiate() {
        return this._initiate;
    }
    // Manejar cuando se da clic en start
    anotherInit() {
        this.initiate = true;
    }
    pintar(orden) {
        const r = document.getElementById('red');
        const g = document.getElementById('green');
        const y = document.getElementById('yell');
        const b = document.getElementById('blue');
        if (orden == 0) {
            g.classList.add('green-light');
            setTimeout(() => {
                g.classList.remove('green-light');
            }, 1000);
        }
        else if (orden == 1) {
            r.classList.add('red-light');
            setTimeout(() => {
                r.classList.remove('red-light');
            }, 1000);
        }
        else if (orden == 2) {
            y.classList.add('yellow-light');
            setTimeout(() => {
                y.classList.remove('yellow-light');
            }, 1000);
        }
        else if (orden == 3) {
            b.classList.add('blue-light');
            setTimeout(() => {
                b.classList.remove('blue-light');
            }, 1000);
        }
        //TODO PONER ESE SWITCH EN UNO SOLO
    }
}
