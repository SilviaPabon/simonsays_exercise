import winners from "../db/winners.json";
import { IPlayers } from "interface/IPlayers";
import fs from "fs";
import path from "path";
export class Model {

    constructor() {
      // TODO document why this constructor is empty
    }

    public insertWinners = (people: IPlayers): boolean => {
        console.log(path.join(__dirname, 'db'));
        let data = fs.readFileSync('dist/db/winners.json', 'utf8');
        let peopleData: IPlayers[] = JSON.parse(data);
        console.log(peopleData, "peopleData1");
        peopleData.push(people['data'][0]);
        data = JSON.stringify(peopleData);
        fs.writeFile('dist/db/winners.json', data, (err) => {
            if (err) throw err;
            return false;
        });
        return true;
    }

    public getWinners = () => {
        return winners;
    };

/*     public getPeopleByID = (id: number) => peoples[--id];

    public insertPeople = (people: IPeople): boolean => {
        console.log(path.join(__dirname, 'db'));
        let data = fs.readFileSync('dist/db/people.json', 'utf8');
        let peopleData: IPeople[] = JSON.parse(data);
        peopleData.push(people);
        data = JSON.stringify(peopleData);
        fs.writeFile('dist/db/people.json', data, (err) => {
            if (err) throw err;
            return false;
        });
        return true;
    }

    public updatePeople = (people: IPeople): boolean => {
        console.log('UPDATE');
        return true;
    }

    public deletePeople = (id: number): boolean => {
        console.log('DELETE');
        return true;
    } */
}
