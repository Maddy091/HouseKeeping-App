import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CleanRequest } from 'src/model/CleanRequest';
import { Feedback } from 'src/model/Feedback';
import { CleanrequestserService } from 'src/services/cleanrequestser.service';
import { FeedbackserService } from 'src/services/feedbackser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HouseKeeping';
  logged: boolean = (sessionStorage.getItem("Role") != null? true: false);
  admin: boolean = (sessionStorage.getItem("Admin") != null? true: false);
  hosteller: boolean = (sessionStorage.getItem("Hosteller") != null? true: false);
  master: boolean = (sessionStorage.getItem("Master") != null? true: false);

  fb : Feedback[]=[];
  complaincount : number=0;
  suggesscount : number=0;
  cleancount : number=0;
  cl : CleanRequest[]=[];
  constructor(private r: Router, private f : FeedbackserService, private c : CleanrequestserService){
   f.viewAllFeedbacks().subscribe((p)=>{
    this.fb=p;
    for(let k of this.fb){
      if(k.feedComplaints.localeCompare('')!=0)this.complaincount++;
      if(k.feedSuggestion.localeCompare('')!=0)this.suggesscount++;
    }
    c.getAllCleanRequest().subscribe((p)=>{
      this.cl=p;
      for(let k of this.cl){
        this.cleancount++;
      }
    })
  })

  }
  signout(): void {
    sessionStorage.clear();
    this.logged=false;
    this.admin = false;
    this.hosteller = false;
    this.master = false;
    this.r.navigate(['']);
  }
}
