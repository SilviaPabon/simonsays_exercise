export class IndexView {
    private _display: any;
    //g normal button gs with sound
    public g: any;
    public gs: any;
    public r: any;
    public rs: any;
    public y: any;
    public ys: any;
    public b: any;
    public bs: any;
    public _btn: any;
    //titles
    public simontitle: any;
    public usertitle: any;
    //todo tabla

    //modal dificultad
    public modalDif: any;
    public btnEasy: any;
    public btnNormal: any;
    public btnHard: any;
    public btnModalStart: any;

    //modal askname
    public modalname: any;
    public btnModalName: any;
    public input: any;
    private _userName: any;
    public form: any;

    constructor() {
        this._display = this.getElement('.container');
        this.g = document.getElementById('0');
        this.gs = document.querySelector('.z');
        this.r = document.getElementById('1');
        this.rs = document.querySelector('.u');
        this.y = document.getElementById('2');
        this.ys = document.querySelector('.t');
        this.b = document.getElementById('3');
        this.bs = document.querySelector('.tr');

        this._btn = document.getElementById('btn-start');

        this.simontitle = document.getElementById('simon');
        this.usertitle = document.getElementById('human');

        this.modalDif = document.getElementById('modaldif');
        this.btnEasy = document.getElementById('700');
        this.btnNormal = document.getElementById('600');
        this.btnHard = document.getElementById('100');
        this.btnModalStart = document.getElementById('start');

        this.modalname = document.getElementById('askname');
        this.input = document.getElementById('userName');
        this.form = document.getElementById('form');
        this.btnModalName = document.getElementById('sendName');
    }

    private getElement = (selector: string): HTMLElement | null => document.querySelector(selector);

    public set display(display: HTMLElement) {
        this._display = display;
    }
    public get display() {
        return this._display;
    }

    public get userName() {
        return this._userName = this.input.value
    }
    public set userName(userName: any) {
        this._display = userName;
    }

    //va pintando o iluminando los botones luego de start()
    public pintar(orden: number, level: number) {
        if (orden == 0) {
            this.g.classList.add('green-light');
            setTimeout(() => {
                this.g.classList.remove('green-light');
                this.gs.play();
            }, level);
        } else if (orden == 1) {
            this.r.classList.add('red-light');
            setTimeout(() => {
                this.r.classList.remove('red-light');
                this.rs.play();
            }, level);
        } else if (orden == 2) {
            this.y.classList.add('yellow-light');
            setTimeout(() => {
                this.y.classList.remove('yellow-light');
                this.ys.play();
            }, level);
        } else if (orden == 3) {
            this.b.classList.add('blue-light');
            setTimeout(() => {
                this.b.classList.remove('blue-light');
                this.bs.play();
            }, level);
        }
    }
    //recibe los colores, los recorre y los pinta
    public generaColores(simonColors: number[], level: number) {
        simonColors.forEach((c, i) => {
            //cambio cada segundo
            setTimeout(() => {
                this.pintar(c, level);
            }, (i + 1) * 500);
        });
    }

    //para clicar en el start principal y seleccionar la dificultad
    public listenStart(handler: Function) {
        this._btn.addEventListener('click', (e: any) => {
            e.preventDefault();
            this.modalDif.showModal();
            //aqu?? se establece la dificultad con los botones del modal
            this.btnEasy.addEventListener('click', handler);
            this.btnNormal.addEventListener('click', handler);
            this.btnHard.addEventListener('click', handler);
        });
    }

    //despu??s de seleccionar la dificultad se cierra el modal y se llama el turno de sim??n
    public listenStartGame(handle: Function) {
        this.btnModalStart.addEventListener('click', (e: any) => {
            e.preventDefault();
            this.modalDif.close();
            handle();
        });
    }

    //visibilidad de t??tulos
    public visibleTitle(which: string, type: string) {
        document.getElementById(which)!.style.visibility = type;
    }

    //listeners para la respuesta del usuario, recibe la funci??n this.userinput del controller
    public listenPattern(handler: Function) {
        this.g.addEventListener('click', handler);
        this.r.addEventListener('click', handler);
        this.y.addEventListener('click', handler);
        this.b.addEventListener('click', handler);
    }
    //cuando la persona da enivar su nombre, hace un llamado a una funci??n que va a actualizar los datos
    public buttonSendGameOver(handler: Function) {
        this.form.addEventListener('submit', (e: any) => {
            e.preventDefault()
            if (this.userName) {
                handler(this.userName);
                this.input.value = '';
            }
            this.visibleTitle('form', 'hidden');
        })
    }
    //muestra los datos provenientes de la bd
    public showTable = (list: player[]) => {
        let usertable = document.getElementById('userstable')!;

        let body = document.querySelector('tbody');

        //borra la tabla para facilitar su actualizaci??n
        while(body!.firstChild != usertable){
            body!.removeChild(body!.firstChild!);
        }

        list.forEach((user: player) =>
            usertable.insertAdjacentHTML('beforebegin',
        `<tr><td>${user.name_player}</td><td>${user.point_player}</td><td>${user.level}</td></tr>`));
    }

}
