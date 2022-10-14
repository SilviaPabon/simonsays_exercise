import { Request, Response } from "express";
import { Model } from "../model/Model.js";

export class Controller {

    private model: Model;

    constructor() {
        this.model = new Model();
    }

    public index = (req: Request, res: Response) => res.json({ 'error': 0, 'msg': 'API: node-express-ts' });

    public insertWinners = (req: Request, res: Response) => {
        this.model.insertWinners(req.body);
        return res.json({ 'error': 0, 'msg': 'API: insert' });
    }

    public getPeople = (req: Request, res: Response) => {
        const people = this.model.getWinners();
        if (people) {
            return res.send(people);
        }
        return res.json({ 'error': 1, 'msg': 'API: id no found' });
    }

}
