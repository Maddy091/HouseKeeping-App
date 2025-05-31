import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CleanRequest } from 'src/model/CleanRequest';
import { CleanReqWithFeed } from 'src/model/CleanReqWithFeed';
import { Feedback } from 'src/model/Feedback';
import { CleanrequestserService } from 'src/services/cleanrequestser.service';
import { FeedbackserService } from 'src/services/feedbackser.service';

@Component({
  selector: 'app-dashboardadm',
  templateUrl: './dashboardadm.component.html',
  styleUrls: ['./dashboardadm.component.css']
})
export class DashboardadmComponent {
  cleanRequests: CleanRequest[] = [];
  cleanRequests1: CleanReqWithFeed[] = [];
  feedbacks: Feedback[] = [];
  hst: string | null = sessionStorage.getItem('Hostel');
  constructor(private cl: CleanrequestserService, private f: FeedbackserService,private r:Router) {
    if(this.hst != null) {
      this.cl.requestPerHostel(this.hst).subscribe((c)=>{
        this.cleanRequests=c;
        for(let cq of this.cleanRequests) {
          this.cleanRequests1.push({
            requestId: cq.requestId,
            reqtime: cq.reqtime,
            reqStatus: cq.reqStatus,
            feedback: new Feedback(),
            std: cq.std,
            houseKeeper: cq.houseKeeper
          });
        }
        this.f.viewAllFeedbacks().subscribe((fd)=> {
          this.feedbacks=fd;
          for(let feed of this.feedbacks) {
            for(let cr of this.cleanRequests1) {
              if(feed.creq.requestId == cr.requestId) {
                cr.feedback = feed;
                break;
              }
            }
          }
        });
      });
    }
  }
  allotHousekeeper(request: CleanReqWithFeed) :void{
    this.r.navigate(['/allot'], {state: {
      myobj: request
    }});
  }
}
