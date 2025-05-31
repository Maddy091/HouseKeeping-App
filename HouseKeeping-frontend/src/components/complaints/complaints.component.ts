import { Component } from '@angular/core';
import { Feedback } from 'src/model/Feedback';
import { FeedbackserService } from 'src/services/feedbackser.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent {
  feedbacks: Feedback [] = [];
  
  hst : string | null = sessionStorage.getItem("Hostel");
  
  constructor(private f: FeedbackserService) {
    if(this.hst!=null)
    this.f.feedbackByHostel(this.hst).subscribe((feed)=>{this.feedbacks=feed;});
  }
}
