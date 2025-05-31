import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/model/Admin';
import { Student } from 'src/model/Student';
import { AdminserService } from 'src/services/adminser.service';
import { StudentserService } from 'src/services/studentser.service';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  selectedRole: string = 'student';
  forgetPage: boolean = false;
  stdNotFound: boolean = false;
  incorrectMail: boolean = false;
  message: string = '';
  otp: number = 0;
  otpsend: boolean = false;
  isLoading: boolean = false;
  inputOtp: number | null = null;
  invalidOtp: boolean = false;
  resetpasssuccess: boolean = false;
  studentCredentials: Student = new Student();
  adminCredentials: Admin = new Admin();
  invalidPass: boolean = false;

  constructor(private a: AdminserService, private r: Router, private s : StudentserService, private r1:ActivatedRoute) {}

  setRole(role: string): void {
    this.selectedRole = role;
  }

  showForgetpage(): void {
    this.forgetPage = !this.forgetPage;
    this.studentCredentials = new Student();
  }

  generateOTP() {
    this.otp = Math.floor(100000 + Math.random() * 900000);
    return this.otp;
  }

  onStudentLogin(): void {
    if(this.studentCredentials.rollId != null) {
      let rll: number = this.studentCredentials.rollId;
      let pss: string = this.studentCredentials.password;
      this.s.getByStudId(this.studentCredentials.rollId).subscribe((p)=>{
        if(p == null) {
          this.showStdNotFound();
          return;
        } else if(rll != null && pss != null) {
          console.log(rll+pss);
          this.s.checkStudent(rll, pss).subscribe((p)=>{
            this.studentCredentials = p;
            console.log(this.studentCredentials);
            if (this.studentCredentials == null) {
              this.showIncorrectPass();
              this.studentCredentials = new Student();
            } else {
              sessionStorage.setItem("MyStd", "Std");
              sessionStorage.setItem("Role", "logged");
              sessionStorage.setItem("Hosteller", "true");
              sessionStorage.setItem("Hostel", this.studentCredentials.hostel);
              sessionStorage.setItem('ID', this.studentCredentials.rollId+'');
              this.r.navigate(['']);
            }
          });
        }
      });
    }
  }

  onSendOTP(): void {
    let checkstd: Student = new Student();
    if(this.studentCredentials.rollId != null) {
      this.s.getByStudId(this.studentCredentials.rollId).subscribe((p)=>{
        checkstd=p;
        if(checkstd == null) {
          this.showStdNotFound();
          this.studentCredentials = new Student();
        } else {
          if(checkstd.email == this.studentCredentials.email) {
            this.otp = this.generateOTP();
            const templateParams = {
              to_email : this.studentCredentials.email,
              OTP : this.otp
            }
            emailjs.send('service_vzvgfkc', 'template_0mq910t', templateParams, 'F9kOHK9LTkR9N1TMp').then((response)=> {
              this.isLoading = true;
              setTimeout(() => {
                this.isLoading = false;
                this.otpsend = true;
                this.forgetPage = false;
              }, 2000);
            }, (error) => {
              console.log("Error Sending OTP");
              this.isLoading = false;
            });
            setTimeout(()=> {
              this.otp = this.generateOTP();
            }, 300000);
          } else {
            this.showIncorrectMail();
            this.studentCredentials.email = '';
          }
        }
      });
    }
  }

  onVerifyOtp(): void {
    if(this.inputOtp == null || this.inputOtp != this.otp || this.studentCredentials.rollId == null) {
      this.showInvalidOtp();
      this.inputOtp = null;
    } else if(this.inputOtp == this.otp && this.studentCredentials.rollId != null) {
      this.s.getByStudId(this.studentCredentials.rollId).subscribe((p)=>{
        this.studentCredentials = p;
        this.studentCredentials.password = this.studentCredentials.rollId + "@" + this.studentCredentials.roomNumber;
        this.s.updateStudent(this.studentCredentials).subscribe((pt)=>{
          this.showResetPassSuccess();
          setTimeout(()=>{
            this.otpsend = false;
            this.studentCredentials = new Student();
            this.otp = 0;
          }, 3500);
        });
      });
    }
  }

  showResetPassSuccess(): void {
    this.message = 'Your Password is reset to default. Please login and change your password';
    this.resetpasssuccess = true;
    setTimeout(()=> {
      this.resetpasssuccess = false;
    }, 3000);
  }

  showInvalidOtp(): void {
    this.message = 'Please enter a Valid OTP';
    this.invalidOtp = true;
    setTimeout(()=> {
      this.invalidOtp = false;
    }, 3000);
  }
  showStdNotFound(): void {
    this.message = 'No Student Found';
    this.stdNotFound = true;
    setTimeout(()=> {
      this.stdNotFound = false;
    }, 3000);
  }
  showAdmNotFound(): void {
    this.message = 'Wrong Credentials';
    this.stdNotFound = true;
    setTimeout(()=> {
      this.stdNotFound = false;
    }, 3000);
  }
  showIncorrectPass(): void {
    this.message = 'Password does not match';
    this.invalidPass = true;
    setTimeout(()=> {
      this.invalidPass = false;
    }, 3000);
  }
  showIncorrectMail(): void {
    this.message = 'Incorrect Email Address';
    this.incorrectMail = true;
    setTimeout(()=> {
      this.incorrectMail = false;
    }, 3000);
  }

  onAdminLogin(): void {
    this.a.check(this.adminCredentials.username, this.adminCredentials.password).subscribe((p)=>{
      this.adminCredentials=p;
      console.log(this.adminCredentials);
      if(this.adminCredentials!=null && this.adminCredentials.username.localeCompare("Master") != 0 &&this.adminCredentials.hostel!=null) {
        console.log(this.adminCredentials);
        sessionStorage.setItem("MyAdm", 'Admin');
        sessionStorage.setItem("Role", "logged");
        sessionStorage.setItem("Admin", "true");
        sessionStorage.setItem("Hostel", this.adminCredentials.hostel);
        this.r.navigate(['']);
      } else if(this.adminCredentials!=null && this.adminCredentials.username.localeCompare("Master") == 0) {
        sessionStorage.setItem("MyMaster", 'Master');
        sessionStorage.setItem("Role", "logged");
        sessionStorage.setItem("Master", "true");
        this.r.navigate(['']);
      } else {
        this.adminCredentials = new Admin();
        this.showAdmNotFound();
      }
  });
  }
}



