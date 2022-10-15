import { Router } from "express";
import { Controller } from "../controller/Controller"

class BackendRoute {

    public router: Router;
    private Controller: Controller;

    constructor() {
        this.router = Router();
        this.Controller = new Controller();
        this.config();
    }

    public config = (): void => {
        this.router.get('/winners', this.Controller.getPeople);
        this.router.post('/winners', this.Controller.insertWinners);
    }

}

export default BackendRoute;
