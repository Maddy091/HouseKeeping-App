import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CleanRequest } from 'src/model/CleanRequest';
import { Feedback } from 'src/model/Feedback';
import { FeedbackserService } from 'src/services/feedbackser.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  clreq : CleanRequest = new CleanRequest();
  feedback : Feedback = new Feedback();
  showMessage: boolean = false;
  message: string = '';
  submitted: boolean = false;

  constructor(private fd : FeedbackserService, private r : Router){
    const nav = this.r.getCurrentNavigation();
    if(nav?.extras.state) {
      this.clreq = nav.extras.state['myobj1'];
    }
  }

  onSubmit() : void {
    this.submitted = true;
    if(this.clreq.requestId == 0) {
      this.feedback = new Feedback();
      this.showMessage = true;
      this.message = 'Request ID cannot be 0. Feedback reset.';
      setTimeout(() => {
        this.showMessage = false;
      }, 3000);
      return;
    }
    this.clreq.reqStatus = "Served";
    this.feedback.creq = this.clreq;
    console.log(this.clreq);
    this.fd.addFeed(this.feedback).subscribe((p)=>{
      this.feedback = new Feedback();
    });
  }
}
