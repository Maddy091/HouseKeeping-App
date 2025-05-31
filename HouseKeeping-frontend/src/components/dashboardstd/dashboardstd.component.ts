import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CleanRequest } from 'src/model/CleanRequest';
import { CleanReqWithFeed } from 'src/model/CleanReqWithFeed';
import { Feedback } from 'src/model/Feedback';
import { CleanrequestserService } from 'src/services/cleanrequestser.service';
import { FeedbackserService } from 'src/services/feedbackser.service';
import { StudentserService } from 'src/services/studentser.service';

@Component({
  selector: 'app-dashboardstd',
  templateUrl: './dashboardstd.component.html',
  styleUrls: ['./dashboardstd.component.css']
})
export class DashboardstdComponent {
  cleanRequestswithoutfeed: CleanRequest [] = [];
  cleanRequests: CleanReqWithFeed [] = [];
  feedbacks: Feedback[] = [];
  constructor(private cl: CleanrequestserService, private fd: FeedbackserService, private r : Router) {
    let rid: string | null = sessionStorage.getItem("ID");
    if(rid != null) {
      this.cl.getAllCleanRequestForStd(parseInt(rid)).subscribe((c)=> {
        this.cleanRequestswithoutfeed=c;
        if(rid != null) {
          this.fd.viewAllFeedbacksBySId(parseInt(rid)).subscribe((f)=>{
            this.feedbacks=f;
            for(let cltemp of this.cleanRequestswithoutfeed) {
              this.cleanRequests.push({
                requestId : cltemp.requestId,
                reqtime : cltemp.reqtime,
                reqStatus : cltemp.reqStatus,
                feedback : new Feedback(),
                std : cltemp.std,
                houseKeeper : cltemp.houseKeeper
              });
            }
            for(let feed of this.feedbacks) {
              for(let clreq of this.cleanRequests) {
                if(feed.creq.requestId==clreq.requestId) {
                  clreq.feedback = feed;
                }
              }
            };
          });
        }
      });
    } else {
      alert("Please Login again");
    }
  }

  giveFeed(cr : CleanReqWithFeed): void {
    let clreq: CleanRequest = {
      requestId : cr.requestId,
      reqtime : cr.reqtime,
      reqStatus : cr.reqStatus,
      std : cr.std,
      houseKeeper : cr.houseKeeper
    };
    this.r.navigate(['/feedback'], {state: {
      myobj1: clreq
    }});
  }

  redirectToRequest(): void {
    this.r.navigate(['/requestser']);
  }

}
