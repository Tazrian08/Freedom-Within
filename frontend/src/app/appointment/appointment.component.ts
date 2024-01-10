import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  constructor(private http: HttpClient, private router: Router) 
  {
    { 
    
      this.http.get("http://localhost:8000/api/allservice")
    
      .subscribe((resultData: any)=>
      {
        this.services=resultData
        console.log(this.services)
      });
    }


  { 
    
    this.http.get("http://localhost:8000/api/alltherapist")
  
    .subscribe((resultData: any)=>
    {
      this.therapists=resultData
      console.log(this.therapists)
    });
  }

  }

  services:any
  therapists:any


}
