export class IndexView {

    private _display: any;
    //todo
    private _initiate: boolean = false;

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
        const r = document.getElementById('red');
        const g = document.getElementById('green');
        const y = document.getElementById('yell');
        const b = document.getElementById('blue');

        if (orden == 0) {
            g!.classList.add('green-light');
            setTimeout(() => {
                g!.classList.remove('green-light');
            }, 1000);
        } else if (orden == 1) {
            r!.classList.add('red-light');
            setTimeout(() => {
                r!.classList.remove('red-light');
            }, 1000);
        } else if (orden == 2) {
            y!.classList.add('yellow-light');
            setTimeout(() => {
                y!.classList.remove('yellow-light');
            }, 1000);
        } else if (orden == 3) {
            b!.classList.add('blue-light');
            setTimeout(() => {
                b!.classList.remove('blue-light');
            }, 1000);
        }
        //TODO PONER ESE SWITCH EN UNO SOLO
    }

    public prueba () {
        let _userPattern: number[] = [];
        const pushIntoUserPattern = (e) => _userPattern.push(e.target.textContent);
        const r = document.getElementById('red')?.addEventListener('click', pushIntoUserPattern);
        const g = document.getElementById('green')?.addEventListener('click', pushIntoUserPattern);
        const y = document.getElementById('yell')?.addEventListener('click', pushIntoUserPattern);
        const b = document.getElementById('blue')?.addEventListener('click', pushIntoUserPattern);
        console.log(_userPattern);
        /* function pushIntoUserPattern() {
            console.log("hola");
        } */

    }
}
