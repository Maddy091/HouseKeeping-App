import { Feedback } from "./Feedback";
import { HouseKeeper } from "./HouseKeeper";
import { Student } from "./Student";

export class CleanReqWithFeed{

    public requestId : number = 0;
    public reqtime : string = '';
    public reqStatus : string = '';
    public feedback : Feedback = new Feedback();
    public std : Student = new Student();
    public houseKeeper : HouseKeeper = new HouseKeeper();
    
}