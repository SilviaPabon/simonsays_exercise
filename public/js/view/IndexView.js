export class IndexView {
    constructor() {
        this.getElement = (selector) => document.querySelector(selector);
        this._display = this.getElement('.container');
    }
    set display(display) {
        this._display = display;
    }
    get display() {
        return this._display;
    }
    displayResults() {
    }
}
