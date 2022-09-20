export class IndexModel {
    constructor(name_player, point_player, level) {
        /* public id: number;
        public names: string;
        public lastnames: string;
        public age: number;
        private _address: string;
    
        constructor(id: number, names: string, lastnames: string, age: number, address: string) {
            this.id = id;
            this.names = names;
            this.lastnames = lastnames;
            this.age = age;
            this._address = address;
        }
    
        public getString(): string {
            return `${this.id}, ${this.names}, ${this.lastnames}, ${this.age}, ${this.address}`;
        }
    
        public set address(address: string) {
            this._address = address;
        }
    
        public get address(): string {
            return this._address;
        } */
        this._employee = [];
        this._employee[this.employee.length].name_player = name_player;
        this._employee[this.employee.length].point_player = point_player;
        this._employee[this.employee.length].level = level;
    }
    set employee(employee) {
        this._employee = employee;
    }
    get employee() {
        return this._employee;
    }
}
