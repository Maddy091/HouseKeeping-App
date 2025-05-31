import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from 'src/model/Admin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminserService implements CanActivate{

  URL: string = environment.apiUrl + "/admin";
  constructor(private h : HttpClient) { }
  canActivate():boolean {
    var v = sessionStorage.getItem("MyAdm");
    if(v!=null && v.localeCompare('Admin')==0)return true;
    return false;        
  }

  check(username: string, passw: string): Observable<any>{
    return this.h.get(this.URL +"/checkAdmin/"+username+"/"+passw);
  }
  checkWorkerAvailability(floor:number, dte: string, hostel: string): Observable<any>{
    return this.h.get(this.URL+"/checkHouseKeeperAvailability/"+floor+"/"+dte+"/"+hostel);
  }
  addAdmin(adm: Admin): Observable<any> {
    return this.h.post(this.URL+"/addAdmin", adm, {responseType:'json'});
  }
  getAllAdmins(): Observable<any> {
    return this.h.get(this.URL+"/getAllAdmins");
  }
  deleteAdminById(id: number): Observable<any> {
    return this.h.delete(this.URL+"/deleteAdminById/"+id);
  }
}
