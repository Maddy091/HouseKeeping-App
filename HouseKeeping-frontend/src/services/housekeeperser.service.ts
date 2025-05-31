import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HouseKeeper } from 'src/model/HouseKeeper';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HousekeeperserService {

  URL: string = environment.apiUrl + "/housekeeper";
  constructor(private h : HttpClient) { }

  addHouseKeepers(houseKeeper: HouseKeeper): Observable<any>{
    return this.h.post(this.URL+"/addHouseKeepers",houseKeeper,{responseType:'json'});
  }

  updateHouseKeepers(houseKeeper: HouseKeeper): Observable<any> {
    return this.h.put(this.URL+"/updateHouseKeepers", houseKeeper, {responseType:'json'});
  }

  getHouseKeeperById(wid: number):Observable<any>{
    return this.h.get(this.URL+"/getHouseKeeperById/"+wid);
  }

  getAllHouseKeeper():Observable<any>{
    return this.h.get(this.URL+"/getAllHouseKeeper");
  }
  
  delHousKbyId(wid: number): Observable<any>{
    return this.h.delete(this.URL+"/delHousKbyId/"+wid);
  }

  housekeeperAtParticularhostel(hostel : string): Observable<any>{
    return this.h.get(this.URL+"/housekeeperAtParticularhostel/"+hostel);
  }

  
}
