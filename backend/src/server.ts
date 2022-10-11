import express, { Application, json, urlencoded } from "express";
import Route from "./route/Route"

class Server {

    private backend: Application;
    private Route: Route;

    constructor() {
        this.backend = express();
        this.Route = new Route();
        this.config();
        this.route();
        this.start();
    }

    public config = (): void => {
        this.backend.set('port', 1802);
        this.backend.use(urlencoded({extended: true}));
        this.backend.use(json());
    }

    public route = (): void => {
        this.backend.use('/api', this.Route.router);
    }

    public start = (): void => {
        this.backend.listen(this.backend.get('port'), () => {
            console.log('Server on port:', this.backend.get('port'));
        });
    }

}

const server = new Server();
