import { Component } from '@angular/core';
import { Admin } from 'src/model/Admin';
import { AdminserService } from 'src/services/adminser.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {
  admin: Admin = new Admin();
  admins: Admin[] = [];
  hostels: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];

  constructor(private adminService: AdminserService) {
    this.loadAdmins();
  }

  loadAdmins(): void {
    let temp: Admin [] = [];
    this.admins = [];
    this.adminService.getAllAdmins().subscribe((data) => {
      temp = data;
      for(let ad of temp) {
        if(ad.username.localeCompare('Master') != 0) {
          this.admins.push(ad);
        }
      }
    });
  }

  onAddAdmin(): void {
    if (this.admin.username && this.admin.password && this.admin.hostel) {
      this.adminService.addAdmin(this.admin).subscribe(() => {
        this.loadAdmins();
        this.admin = new Admin();
      });
    }
  }

  onEditAdmin(adm: Admin): void {
    this.admin = adm;
  }

  onDeleteAdmin(admin_id: number): void {
    this.adminService.deleteAdminById(admin_id).subscribe(() => {
      this.loadAdmins();
    });
  }
}
