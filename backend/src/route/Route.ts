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
        this.router.get('/', this.Controller.index);
        //this.router.get('/people/:id', this.Controller);
        //this.router.post('/people/', this.Controller);
    }

}

export default BackendRoute;
