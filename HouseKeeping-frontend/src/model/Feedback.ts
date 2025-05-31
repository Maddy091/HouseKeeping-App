import { CleanRequest } from "./CleanRequest";

export class Feedback {

    public feedReqid : number = 0;
    public feedRating : number = 0;
    public feedTimein : string ='';
    public feedTimeout : string ='';
    public feedSuggestion : string ='';
    public feedComplaints : string ='';
    public creq : CleanRequest = new CleanRequest();
    
}