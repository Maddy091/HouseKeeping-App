import { Component } from '@angular/core';
import { Feedback } from 'src/model/Feedback';
import { FeedbackserService } from 'src/services/feedbackser.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent {
  feedbacks: Feedback [] = [];
  
  constructor(private f: FeedbackserService) {
    this.f.viewAllFeedbacks().subscribe((feed)=>{this.feedbacks=feed;});
  }

}
