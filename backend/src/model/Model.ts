//import winners from "../../db/winners.json";
import { IPlayers } from "interface/IPlayers";
import fs from "fs";
import * as path from "path";
export class Model {

    constructor() {
      // TODO document why this constructor is empty
    }

    public insertWinners = (people: IPlayers): boolean => {
        console.log(path.join(__dirname,'../../db/winners.json'));
        console.log(people, "people");
        try {
            let data = fs.readFileSync(path.join(__dirname,'../../db/winners.json'), 'utf8');
            console.log(data, "data");
            let peopleData: IPlayers[] = JSON.parse(data);
            console.log(people, "people");
            console.log(peopleData, "peopleData1");
            peopleData.push(people['data'][0]);
            data = JSON.stringify(peopleData);
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
        //return winners;
    };

}
