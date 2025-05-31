import { Component } from '@angular/core';
import { Student } from 'src/model/Student';
import { StudentserService } from 'src/services/studentser.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  student: Student = new Student();
  showPasswordChange: boolean = false;
  currentPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';
  passwordMismatch: boolean = false;
  incorrectPass: boolean = false;
  passwordChanged: boolean = false;
  emailChanged: boolean = false;
  showEmailChange: boolean = false;

  constructor(private st: StudentserService) {
    let rid: string | null = sessionStorage.getItem('ID');
    if(rid != null) {
      this.st.getByStudId(parseInt(rid)).subscribe((s)=>this.student=s);
    }
  }

  togglePasswordChange() {
    this.showPasswordChange = true;
    this.showEmailChange = false;
  }

  toggleEmailChange() {
    this.showEmailChange = true;
    this.showPasswordChange = false;
  }

  cancelPasswordChange() {
    this.showPasswordChange = false;
    this.currentPassword = '';
    this.newPassword = '';
    this.confirmNewPassword = '';
  }

  cancelEmailChange() {
    this.showEmailChange = false;
  }

  onSubmitPasswordChange() {
    if(this.currentPassword != this.student.password) {
      this.showIncorrectPassword();
      return;
    }
    if (this.newPassword !== this.confirmNewPassword) {
      this.showPasswordMismatchMessage();
      return;
    }
    this.student.password = this.newPassword;
    this.st.updateStudent(this.student).subscribe((s)=>this.student=s);
    this.showPasswordChangeSuccess();
    this.cancelPasswordChange();
  }

  onSubmitEmailChange(): void {
    this.st.updateStudent(this.student).subscribe((s)=>this.student=s);
    this.showEmailChangeSuccess();
    this.cancelEmailChange();
  }

  showEmailChangeSuccess(): void {
    this.emailChanged = true;
    setTimeout(() => {
      this.emailChanged = false;
    }, 3000);
  }

  showPasswordChangeSuccess(): void {
    this.passwordChanged = true;
    setTimeout(() => {
      this.passwordChanged = false;
    }, 3000);
  }

  showIncorrectPassword(): void {
    this.incorrectPass = true;
    setTimeout(() => {
      this.incorrectPass = false;
    }, 3000);
  }

  showPasswordMismatchMessage() {
    this.passwordMismatch = true;
    setTimeout(() => {
      this.passwordMismatch = false;
    }, 3000);
  }
}
