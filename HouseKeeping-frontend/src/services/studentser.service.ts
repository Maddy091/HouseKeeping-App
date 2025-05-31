import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/model/Student';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentserService implements CanActivate{

  URL: string = environment.apiUrl + "/student";
  constructor(private h : HttpClient) { }
  canActivate(): boolean{
    let v = sessionStorage.getItem("MyStd");
    if(v!=null && v.localeCompare('Std')==0) return true;
    return false;
  }

  checkStudent(rollid: number ,password: string) : Observable<any> {
    console.log(rollid+password);
    return this.h.get(this.URL+ "/checkStudent/"+rollid+"/"+password);
  }

  listAllStudents(): any{
    return this.h.get(this.URL+"/listAllStudents");
  }

  addStudent(std : Student): Observable<any>{
    return this.h.post(this.URL+"/addStudent", std, {responseType : 'json'});
  }

  updateStudent(std : Student): Observable<any>{
    return this.h.put(this.URL+"/updateStudent", std, {responseType : 'json'});
  }

  deleteByStudId(id: number): Observable<any>{
    return this.h.delete(this.URL+"/deleteStudent/"+id);
  }
 
  studentsfromeachfloor(floor: number):Observable<any>{
    return this.h.get(this.URL+"/studentsbyfloor/"+floor);
  }

  getByStudId(id : number): Observable<any>{
    return this.h.get(this.URL+"/getByStudId/"+id);
  }

  studentsfromeachhHostel(hostel : string, floor : number): Observable<any>{
    return this.h.get(this.URL+"/studentsfromeachhHostel/"+hostel+"/"+floor);
  }
}
