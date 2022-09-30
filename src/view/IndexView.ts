export class IndexView {

    private _display: any;
    //todo
    private _initiate: boolean = false;

    public g = document.getElementById('0');
    public gs = document.querySelector('.z');
    public r = document.getElementById('1');
    public rs = document.querySelector('.u');
    public y = document.getElementById('2');
    public ys = document.querySelector('.t');
    public b = document.getElementById('3');
    public bs = document.querySelector('.tr');

    constructor() {
        this._display = this.getElement('.container');
    }

    private getElement = (selector: string): HTMLElement | null => document.querySelector(selector);

    public set display(display: HTMLElement) {
        this._display = display;
    }
    public get display() {
        return this._display;
    }

    public set initiate(initiate: boolean) {
        this._initiate = initiate;
    }
    public get initiate() {
        return this._initiate;
    }

    //va pintando o iluminando los botones luego de start()
    public pintar(orden: number, level:number){
        if (orden == 0) {
            this.g!.classList.add('green-light');
            setTimeout(() => {
                this.g!.classList.remove('green-light');
                this.gs!.play();
            }, level);
        } else if (orden == 1) {
            this.r!.classList.add('red-light');
            setTimeout(() => {
                this.r!.classList.remove('red-light');
                this.rs!.play();
            }, level);
        } else if (orden == 2) {
            this.y!.classList.add('yellow-light');
            setTimeout(() => {
                this.y!.classList.remove('yellow-light');
                this.ys!.play();
            }, level);
        } else if (orden == 3) {
            this.b!.classList.add('blue-light');
            setTimeout(() => {
                this.b!.classList.remove('blue-light');
                this.bs!.play();
            }, level);
        }
    }
    //todo
    public generaColores(simonColors: number[], level:number) {
        simonColors.forEach((c, i) => {
            //cambio cada segundo
            setTimeout(() => {this.pintar(c, level);}, (i+1) * 500);
        })
    }

    public modalName(){
        const modalName = document.getElementById('askname');
        const input = document.getElementById('userName');
        const buttonSend = document.getElementById('sendName');
        modalName.showModal();
    }

    public showTable(db: any){
        let table = document.getElementById('table-top')
        for(let info in db){
            let row = table.insertRow();
            let column_ = row.insertCell();
            let column = row.insertCell();
            column_.innetHTML = info;
            column.innerHTML = db[info];
        }
        let t = "<table>"
        for(let k in db){
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
        t += "</table>"
        let div = document.getElementById('container-2')?.innerHTML
        div = t;
    }

}
