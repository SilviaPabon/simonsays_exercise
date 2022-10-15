//import winners from "../../db/winners.json";
import { IPlayers } from "interface/IPlayers";
import fs from "fs";
import * as path from "path";
export class Model {

    constructor() {
      // TODO document why this constructor is empty
    }

    public insertWinners = (people: IPlayers): boolean => {

        try {
            let data = fs.readFileSync(path.join(__dirname,'../../db/winners.json'), 'utf8');

            let peopleData: IPlayers[] = JSON.parse(data);

            peopleData.push(people['data'][0]);
            this.orderWinners(peopleData);

            data = JSON.stringify(peopleData.slice(0, 10));

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

    public getWinners = () => {
        let data = fs.readFileSync(path.join(__dirname,'../../db/winners.json'), 'utf8');
        return data;
    };

    public orderWinners(array: IPlayers[]){
        array.sort((a, b) => (b.point_player) - (a.point_player));
    }

}
