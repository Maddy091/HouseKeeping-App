import { Component } from '@angular/core';
import { CleanRequest } from 'src/model/CleanRequest';
import { CleanReqWithoutHouk } from 'src/model/CleanReqWithoutHouk';
import { HouseKeeper } from 'src/model/HouseKeeper';
import { Student } from 'src/model/Student';
import { AdminserService } from 'src/services/adminser.service';
import { CleanrequestserService } from 'src/services/cleanrequestser.service';
import { StudentserService } from 'src/services/studentser.service';

@Component({
  selector: 'app-requestser',
  templateUrl: './requestser.component.html',
  styleUrls: ['./requestser.component.css']
})
export class RequestserComponent {
  reqDate: string = '';
  reqTime: string = '';
  notavl: boolean = false;

  clreq: CleanReqWithoutHouk = new CleanReqWithoutHouk();
  
  constructor(private cl: CleanrequestserService, private st: StudentserService, private ad: AdminserService) {
    this.notavl = false;
  }

  sendReq(): void {
    if (this.reqDate == '' || this.reqTime == '') {
      this.reqDate = '';
      this.reqTime = '';
      alert("Please fill the Details");
    } else {
      this.clreq.reqtime = this.reqDate + 'T' + this.reqTime;
      this.clreq.reqStatus = "Not Allotted";
      let rid: string | null = sessionStorage.getItem('ID');
      if (rid != null) {
        this.st.getByStudId(parseInt(rid)).subscribe((p) => {
          this.clreq.std = p;
          let houseKeepers: HouseKeeper [] = [];
          this.ad.checkWorkerAvailability(this.clreq.std.floor, this.clreq.reqtime, this.clreq.std.hostel).subscribe((h)=>{
            houseKeepers = h;
            if(houseKeepers.length == 0) {
              this.notavl = true;
              this.reqTime = '';
            } else {
              this.cl.addCleanReq(this.clreq).subscribe((c) => {
                this.notavl = false;
                this.clreq = c;
                this.reqDate = '';
                this.reqTime = '';
              });
            }
          });
        });
      }
    }
  }
}
