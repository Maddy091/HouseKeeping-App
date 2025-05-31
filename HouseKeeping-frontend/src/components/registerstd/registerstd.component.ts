import { Component } from '@angular/core';
import { Student } from 'src/model/Student';
import { StudentserService } from 'src/services/studentser.service';

@Component({
  selector: 'app-registerstd',
  templateUrl: './registerstd.component.html',
  styleUrls: ['./registerstd.component.css']
})
export class RegisterstdComponent {
  std: Student = new Student();
  room : number | null = null;
  filteredStudents: Student[] = [];
  update: boolean = false;
  message: string = '';
  hst: string | null = sessionStorage.getItem('Hostel');
  successReg: boolean = false;
  updateReg: boolean = false;
  deleteReg: boolean = false;
  invalidform: boolean = false;

  constructor(private s: StudentserService) {
    if(this.hst != null) {
      this.s.studentsfromeachhHostel(this.hst, 1).subscribe((p)=>this.filteredStudents=p);
    }
  }

  onRegister() {
   
    if (this.std.rollId == null || this.room == null || (this.room != null && (this.room < 0 || this.room > 30)) || this.std.floor == 0 || this.std.rollId != null && (this.std.rollId >= 20250000 && this.std.rollId <20240000 )) {
      this.std = new Student();
      this.showInvalid();
      this.room = null;
    } else {
      if(this.hst != null) {
        this.std.hostel = this.hst;
        this.std.roomNumber = this.hst + this.room;
        this.std.password = this.std.rollId + "@" + this.std.roomNumber;
        this.s.addStudent(this.std).subscribe((p)=>{
          this.std=p;
          if(this.hst != null) {
            this.s.studentsfromeachhHostel(this.hst, this.std.floor).subscribe((p)=>this.filteredStudents=p);
          };
          this.std = new Student();
          if(this.update == false) this.showSuccessReg();
          else this.showUpdateReg();
          this.update = false;
        });
      }
    }
  }

  check(): boolean {
    if(this.room != null && (this.room < 0 || this.room > 30)) return false;
    return true; 
  }

  check1(): boolean {
    if(this.std.rollId == null || (this.std.rollId != null && (this.std.rollId < 20250000 && this.std.rollId >=20240000 ))) return true;
    return false; 
  }

  showSuccessReg(): void {
    this.message = 'Student Registered Successfully';
    this.successReg = true;
    setTimeout(() => {
      this.successReg = false;
    }, 3000);
  }
  showUpdateReg(): void {
    this.message = 'Student Updated Successfully';
    this.updateReg = true;
    setTimeout(() => {
      this.updateReg = false;
    }, 3000);
  }
  showDeleteReg(): void {
    this.message = 'Student Delete Successfully';
    this.deleteReg = true;
    setTimeout(() => {
      this.deleteReg = false;
    }, 3000);
  }
  showInvalid(): void {
    this.message = 'Please enter valid details';
    this.invalidform = true;
    setTimeout(() => {
      this.invalidform = false;
    }, 3000);
  }

  onUpdate(student: Student) {
    this.std = student;
    this.room = parseInt(this.std.roomNumber.slice(1)); 
    this.update = true;
  }

  onDelete(student: Student) {
    let delstdfromfloor: number = student.floor;
    if(student.rollId != null) {
      this.s.deleteByStudId(student.rollId).subscribe((p)=>{
        this.std = new Student();
        if(this.hst != null) {
          this.s.studentsfromeachhHostel(this.hst, delstdfromfloor).subscribe((p)=>this.filteredStudents=p);
        }
        this.showDeleteReg();
      });
    }
  }

  filterByFloor(floor: number) {
    if(this.hst != null) {
      this.s.studentsfromeachhHostel(this.hst, floor).subscribe((p)=>this.filteredStudents=p);
    }
  }
}
