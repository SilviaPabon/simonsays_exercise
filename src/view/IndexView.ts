export class IndexView {

    private _display: any;
    //todo
    private _initiate: boolean = false;

    public g = document.getElementById('0');
    public r = document.getElementById('1');
    public y = document.getElementById('2');
    public b = document.getElementById('3');

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
    public pintar(orden: number){
        if (orden == 0) {
            this.g!.classList.add('green-light');
            setTimeout(() => {
                this.g!.classList.remove('green-light');
            }, 1000);
        } else if (orden == 1) {
            this.r!.classList.add('red-light');
            setTimeout(() => {
                this.r!.classList.remove('red-light');
            }, 1000);
        } else if (orden == 2) {
            this.y!.classList.add('yellow-light');
            setTimeout(() => {
                this.y!.classList.remove('yellow-light');
            }, 1000);
        } else if (orden == 3) {
            this.b!.classList.add('blue-light');
            setTimeout(() => {
                this.b!.classList.remove('blue-light');
            }, 1000);
        }
        //TODO PONER ESE SWITCH EN UNO SOLO
    }

}
