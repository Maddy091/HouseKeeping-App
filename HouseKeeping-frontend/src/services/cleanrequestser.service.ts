import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CleanRequest } from 'src/model/CleanRequest';
import { CleanReqWithoutHouk } from 'src/model/CleanReqWithoutHouk';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CleanrequestserService {

  URL: string = environment.apiUrl + "/CleanRequest";
  constructor(private h : HttpClient) { }

  getCleanReqById(id: number):Observable<any>{
    return this.h.get(this.URL+"/getCleanReqById/"+id);
  }

  updateCleanReq(cleanRequest: CleanRequest):Observable<any>{
    return this.h.put(this.URL+"/updateCleanReq",cleanRequest,{responseType:'json'});
  }
  addCleanReq(cleanRequest: CleanReqWithoutHouk):Observable<any>{
    return this.h.post(this.URL+"/AddCleanRequest",cleanRequest,{responseType:'json'});
  }

  getAllCleanRequestWithoutFeedback():Observable<any>{
    return this.h.get(this.URL+"/cleanrequestlistwithoutfeedback");
  }

  getAllCleanRequest(): Observable<any> {
    return this.h.get(this.URL+"/getAllCleanRequest");
  }
  getAllCleanRequestForStd(id : number):  Observable<any> {
    return this.h.get(this.URL+"/getAllCleanRequestForStd/"+id);
  }
  requestPerHostel(hostel : string):   Observable<any> {
    return this.h.get(this.URL+"/requestPerHostel/"+hostel);
  }
}
