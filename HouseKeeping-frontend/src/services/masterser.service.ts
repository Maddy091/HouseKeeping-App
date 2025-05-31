import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MasterserService implements CanActivate{
  constructor() { }
  canActivate():boolean{
    var v = sessionStorage.getItem("MyMaster");
    console.log(v);
    if(v!=null && v.localeCompare('Master')==0)return true;
    return false;
  }
}
