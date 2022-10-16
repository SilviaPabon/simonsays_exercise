import { IPlayers } from "interface/IPlayers";
import fs from "fs";
import * as path from "path";
import { IObject } from '../interface/IObject';
export class Model {

    constructor() {
      // TODO document why this constructor is empty
    }
    //logic to insert winners in db (post)
    public insertWinners = (people: IObject): boolean => {

        try {
            //read data in database
            let data: string = fs.readFileSync(path.join(__dirname,'../../db/winners.json'), 'utf8');
            //convert to json data
            let peopleData: IPlayers[] = JSON.parse(data);

            //push info from people to db, order info in db and select first 10 scores
            peopleData.push(people['data'][0]);
            this.orderWinners(peopleData);
            data = JSON.stringify(peopleData.slice(0, 10));

            //update the database
            fs.writeFile(path.join(__dirname,'../../db/winners.json'), data, (err) => {
                if (err) throw err;
                return false;
            });
            return true;
        } catch (error) {
            console.log("error");
            return false;
        }
    }
    //returning the data when is fetched it (get)
    public getWinners = () => {
        let data = fs.readFileSync(path.join(__dirname,'../../db/winners.json'), 'utf8');
        return data;
    };
    //function to help ordering
    public orderWinners(array: IPlayers[]){
        array.sort((a, b) => (b.point_player) - (a.point_player));
    }

}
