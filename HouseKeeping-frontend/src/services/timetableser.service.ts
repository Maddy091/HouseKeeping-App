import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimeTable } from 'src/model/TimeTable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimetableserService {

  URL: string = environment.apiUrl + "/timetable";
  constructor(private h : HttpClient) { }

  addTimeTable(timeTable:TimeTable):Observable<any>{
    return this.h.post(this.URL+"/addTimeTable",timeTable,{responseType:'json'});
  }
}
