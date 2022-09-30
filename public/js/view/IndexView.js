export class IndexView {
    constructor() {
        //todo
        this._initiate = false;
        this.g = document.getElementById('0');
        this.gs = document.querySelector('.z');
        this.r = document.getElementById('1');
        this.rs = document.querySelector('.u');
        this.y = document.getElementById('2');
        this.ys = document.querySelector('.t');
        this.b = document.getElementById('3');
        this.bs = document.querySelector('.tr');
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
    pintar(orden, level) {
        if (orden == 0) {
            this.g.classList.add('green-light');
            setTimeout(() => {
                this.g.classList.remove('green-light');
                this.gs.play();
            }, level);
        }
        else if (orden == 1) {
            this.r.classList.add('red-light');
            setTimeout(() => {
                this.r.classList.remove('red-light');
                this.rs.play();
            }, level);
        }
        else if (orden == 2) {
            this.y.classList.add('yellow-light');
            setTimeout(() => {
                this.y.classList.remove('yellow-light');
                this.ys.play();
            }, level);
        }
        else if (orden == 3) {
            this.b.classList.add('blue-light');
            setTimeout(() => {
                this.b.classList.remove('blue-light');
                this.bs.play();
            }, level);
        }
    }
    //todo
    generaColores(simonColors, level) {
        simonColors.forEach((c, i) => {
            //cambio cada segundo
            setTimeout(() => { this.pintar(c, level); }, (i + 1) * 500);
        });
    }
    modalName() {
        const modalName = document.getElementById('askname');
        const input = document.getElementById('userName');
        const buttonSend = document.getElementById('sendName');
        modalName.showModal();
    }
    showTable(db) {
        var _a;
        let table = document.getElementById('table-top');
        for (let info in db) {
            let row = table.insertRow();
            let column_ = row.insertCell();
            let column = row.insertCell();
            column_.innetHTML = info;
            column.innerHTML = db[info];
        }
        let t = "<table>";
        for (let k in db) {
            t += `
            <tr>
            <td>
            ${k}
            </td>
            <td>
            ${db[k]}
            </td>
            </tr>`;
        }
        t += "</table>";
        let div = (_a = document.getElementById('container-2')) === null || _a === void 0 ? void 0 : _a.innerHTML;
        div = t;
    }
}
