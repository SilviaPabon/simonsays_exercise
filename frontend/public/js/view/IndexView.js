export class IndexView {
    constructor() {
        this.getElement = (selector) => document.querySelector(selector);
        //muestra los datos provenientes de la bd
        this.showTable = (list) => {
            let usertable = document.getElementById('userstable');
            let body = document.querySelector('tbody');
            //borra la tabla para facilitar su actualización
            while (body.firstChild != usertable) {
                body.removeChild(body.firstChild);
            }
            list.forEach((user) => usertable.insertAdjacentHTML('beforebegin', `<tr><td>${user.name_player}</td><td>${user.point_player}</td><td>${user.level}</td></tr>`));
        };
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
    set display(display) {
        this._display = display;
    }
    get display() {
        return this._display;
    }
    get userName() {
        return this._userName = this.input.value;
    }
    set userName(userName) {
        this._display = userName;
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
    //recibe los colores, los recorre y los pinta
    generaColores(simonColors, level) {
        simonColors.forEach((c, i) => {
            //cambio cada segundo
            setTimeout(() => {
                this.pintar(c, level);
            }, (i + 1) * 500);
        });
    }
    //para clicar en el start principal y seleccionar la dificultad
    listenStart(handler) {
        this._btn.addEventListener('click', (e) => {
            e.preventDefault();
            this.modalDif.showModal();
            //aquí se establece la dificultad con los botones del modal
            this.btnEasy.addEventListener('click', handler);
            this.btnNormal.addEventListener('click', handler);
            this.btnHard.addEventListener('click', handler);
        });
    }
    //después de seleccionar la dificultad se cierra el modal y se llama el turno de simón
    listenStartGame(handle) {
        this.btnModalStart.addEventListener('click', (e) => {
            e.preventDefault();
            this.modalDif.close();
            handle();
        });
    }
    //visibilidad de títulos
    visibleTitle(which, type) {
        document.getElementById(which).style.visibility = type;
    }
    //listeners para la respuesta del usuario, recibe la función this.userinput del controller
    listenPattern(handler) {
        this.g.addEventListener('click', handler);
        this.r.addEventListener('click', handler);
        this.y.addEventListener('click', handler);
        this.b.addEventListener('click', handler);
    }
    //cuando la persona da enivar su nombre, hace un llamado a una función que va a actualizar los datos
    buttonSendGameOver(handler) {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.userName) {
                handler(this.userName);
                this.input.value = '';
            }
            this.visibleTitle('form', 'hidden');
        });
    }
}
