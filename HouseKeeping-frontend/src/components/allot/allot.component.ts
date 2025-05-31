import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CleanRequest } from 'src/model/CleanRequest';
import { CleanReqWithFeed } from 'src/model/CleanReqWithFeed';
import { HouseKeeper } from 'src/model/HouseKeeper';
import { TimeTable } from 'src/model/TimeTable';
import { AdminserService } from 'src/services/adminser.service';
import { CleanrequestserService } from 'src/services/cleanrequestser.service';
import { TimetableserService } from 'src/services/timetableser.service';

@Component({
  selector: 'app-allot',
  templateUrl: './allot.component.html',
  styleUrls: ['./allot.component.css']
})
export class AllotComponent {
  cleanreq1: CleanReqWithFeed = new CleanReqWithFeed();
  cleanreq: CleanRequest = new CleanRequest();
  houseKeepers: HouseKeeper[] = [];
  notavl: boolean = false;
  constructor(private r: Router, private ad: AdminserService, private cl: CleanrequestserService, private tt: TimetableserService) {
    const nav = this.r.getCurrentNavigation();
    if(nav?.extras.state) {
      this.cleanreq1 = nav.extras.state['myobj'];
    }
    this.cleanreq = {
      requestId: this.cleanreq1.requestId,
      reqtime: this.cleanreq1.reqtime,
      reqStatus: this.cleanreq1.reqStatus,
      std: this.cleanreq1.std,
      houseKeeper: this.cleanreq1.houseKeeper
    }
    this.ad.checkWorkerAvailability(this.cleanreq.std.floor, this.cleanreq.reqtime, this.cleanreq.std.hostel).subscribe((houkee)=>{
      this.houseKeepers=houkee;
      if(this.houseKeepers.length == 0) {
        this.notavl = true;
      }
    });
  }

  onSubmit() {
    if(this.cleanreq.houseKeeper != null) {
      this.cleanreq.reqStatus = "Alloted";
      this.cl.updateCleanReq(this.cleanreq).subscribe((p)=>{
        this.cleanreq=p;
        let tb: TimeTable = new TimeTable();
        tb.starttime = this.cleanreq.reqtime;
        const reqTimeString = this.cleanreq.reqtime;
        const [datePart, timePart] = reqTimeString.split('T');
        const [hours, minutes, seconds] = timePart.split(':');
        const reqTimeDate = new Date(
          `${datePart}T${hours}:${minutes}:${seconds.slice(0, 2)}`
        );
        reqTimeDate.setMinutes(reqTimeDate.getMinutes() + 30);
        const newTimeString = `${datePart}T${reqTimeDate.toTimeString().split(' ')[0]}.${seconds.split('.')[0]}`;
        tb.endtime = newTimeString;
        tb.hostel = this.cleanreq.std.hostel;
        tb.floor = this.cleanreq.std.floor;
        tb.workerid = this.cleanreq.houseKeeper.workerId;
        this.tt.addTimeTable(tb).subscribe((t)=>{
          this.tt=t;
          this.cleanreq = new CleanRequest();
          this.houseKeepers = [];
        });
      });
    } else {
      alert("No HouseKeeper Choosen");
    }
  }

  onReset(): void {
    this.cleanreq.reqStatus = "Declined";
    this.cleanreq.houseKeeper = new HouseKeeper();
    this.cl.updateCleanReq(this.cleanreq).subscribe((p)=>{
      this.cleanreq = new CleanRequest();
      this.houseKeepers = [];
    });
  }
}
