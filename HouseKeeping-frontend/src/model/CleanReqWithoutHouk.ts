import { Feedback } from "./Feedback";
import { Student } from "./Student";

export class CleanReqWithoutHouk {
    public requestId : number = 0;
    public reqtime : string = '';
    public reqStatus : string = '';
    public feedback : Feedback = new Feedback();
    public std : Student = new Student();
}