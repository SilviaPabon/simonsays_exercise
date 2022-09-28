export class IndexView {
    constructor() {
        //todo
        this._initiate = false;
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
    prueba() {
        var _a, _b, _c, _d;
        let _userPattern = [];
        const pushIntoUserPattern = (e) => _userPattern.push(e.target.textContent);
        const r = (_a = document.getElementById('red')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', pushIntoUserPattern);
        const g = (_b = document.getElementById('green')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', pushIntoUserPattern);
        const y = (_c = document.getElementById('yell')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', pushIntoUserPattern);
        const b = (_d = document.getElementById('blue')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', pushIntoUserPattern);
        console.log(_userPattern);
        /* function pushIntoUserPattern() {
            console.log("hola");
        } */
    }
}
