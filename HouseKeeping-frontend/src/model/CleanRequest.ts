import { HouseKeeper } from "./HouseKeeper";
import { Student } from "./Student";

export class CleanRequest{
    public requestId : number = 0;
    public reqtime : string = '';
    public reqStatus : string = '';
    public std : Student = new Student();
    public houseKeeper : HouseKeeper = new HouseKeeper();
}