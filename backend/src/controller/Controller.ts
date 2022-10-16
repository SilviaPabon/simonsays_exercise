import { Request, Response } from "express";
import { Model } from "../model/Model.js";

export class Controller {

    private model: Model;

    constructor() {
        this.model = new Model();
    }
    //call model method to insertwinners, send as argument req.body (insertwinners in db)
    public insertWinners = (req: Request, res: Response) => {
        this.model.insertWinners(req.body);
        return res.json({ 'error': 0, 'msg': 'Winners Inserted' });
    }
    //call model method to getwinners, obtain data from winners in database
    public getPeople = (req: Request, res: Response) => {
        const people = this.model.getWinners();
        if (people) {
            return res.send(people);
        }
        return res.json({ 'error': 1, 'msg': 'Something went wrong obtaining Winners' });
    }

}
