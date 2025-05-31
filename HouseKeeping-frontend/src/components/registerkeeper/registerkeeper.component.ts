import { Component } from '@angular/core';
import { HouseKeeper } from 'src/model/HouseKeeper';
import { HousekeeperserService } from 'src/services/housekeeperser.service';

@Component({
  selector: 'app-registerkeeper',
  templateUrl: './registerkeeper.component.html',
  styleUrls: ['./registerkeeper.component.css']
})
export class RegisterkeeperComponent {
  houkee: HouseKeeper = new HouseKeeper();
  houseKeepers: HouseKeeper[] = [];
  message: string = '';
  invalidform: boolean = false;
  successreg: boolean = false;
  deletereg: boolean = false;
  hst: string | null = sessionStorage.getItem('Hostel');
  constructor(private h: HousekeeperserService) {
    if(this.hst != null) {
      this.h.housekeeperAtParticularhostel(this.hst).subscribe((houk)=>this.houseKeepers=houk);
    }
  }

  onRegister() {
    if (this.validateForm()) {
      if(sessionStorage.getItem("Hostel") != null) {
        this.houkee.hostel = sessionStorage.getItem("Hostel") + '';
        this.h.addHouseKeepers(this.houkee).subscribe((p)=>{
          this.houkee=new HouseKeeper();
          if(this.hst != null) {
            this.h.housekeeperAtParticularhostel(this.hst).subscribe((houk)=>this.houseKeepers=houk);
          }
          this.showSuccessReg();
        });
      }
    } else {
      this.showInvalidForm();
    }
  }

  onUpdate(houseKeeper: HouseKeeper) {
    this.houkee = houseKeeper;
  }

  onDelete(workerId: number) {
    this.h.delHousKbyId(workerId).subscribe((h)=>{
      this.houkee=new HouseKeeper();
      if(this.hst != null) {
        this.h.housekeeperAtParticularhostel(this.hst).subscribe((houk)=>this.houseKeepers=houk);
      }
      this.showDeleteReg();
    });
  }

  private validateForm(): boolean {
    return this.houkee.wordkername.localeCompare('') != 0 && this.houkee.floor != 0;
  }

  showInvalidForm(): void {
    this.message = 'Please Fill out the Fields Correctly';
    this.invalidform = true;
    setTimeout(() => {
      this.invalidform = false;
    }, 3000);
  }
  showSuccessReg(): void {
    this.message = 'HouseKeeper Registered Successfully';
    this.successreg = true;
    setTimeout(() => {
      this.successreg = false;
    }, 3000);
  }
  showDeleteReg(): void {
    this.message = 'HouseKeeper Deleted Successfully';
    this.deletereg = true;
    setTimeout(() => {
      this.deletereg = false;
    }, 3000);
  }
}
