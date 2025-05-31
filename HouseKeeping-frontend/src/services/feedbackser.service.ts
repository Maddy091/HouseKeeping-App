import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from 'src/model/Feedback';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackserService {

  URL: string = environment.apiUrl + "/feedback";
  constructor(private h : HttpClient) { }

  addFeed(addFeedback: Feedback): Observable<any>{
    return this.h.post(this.URL+"/addFeed",addFeedback,{responseType:'json'});
  }
 
  viewAllFeedbacks():Observable<any>{
    return this.h.get(this.URL+"/viewallfeedbacks");
  }

  viewAllFeedbacksBySId(id : number): Observable<any>{
    return this.h.get(this.URL+"/viewAllFeedbacksBySId/"+id);
  }

  feedbackByHostel(hostel : string ): Observable<any>{
    return this.h.get(this.URL+"/feedbackByHostel/"+hostel);
  }
}
