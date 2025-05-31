import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   // for text scrolling effect
   isHeroHidden = false;
 
   @HostListener('window:scroll', [])
   onWindowScroll() {
     if (window.scrollY > 350) {
       this.isHeroHidden = true;
     } else {
       this.isHeroHidden = false;
     }
   }
 
   constructor() { }
 
   //tanvi
   logged: boolean = (sessionStorage.getItem("Role") != null? true: false);
 
   // for front text
   ngAfterViewInit(): void {
     const options = {
       strings: [
         "a Clean Room",
         "Instant Help",
         "Professional Housekeeping",
         "Sparkling Clean Hostel Rooms",
         "a Tidy Hostel Room Awaits You",
         "Stress-Free Cleaning Solutions"
       ],
       typeSpeed: 50,
       backSpeed: 100,
       backDelay: 1000,
       loop: true
     };
 
     new Typed("#typed", options);
 
   }
}
