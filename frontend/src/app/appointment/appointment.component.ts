import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {


  constructor(private http: HttpClient, private router: Router, private calendar: NgbCalendar) 
  {

    this.date = this.calendar.getToday();
    this.minDate = this.calendar.getToday();
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
      this.user_id=this.therapists[0].id
      console.log(this.therapists)
    });
  }

  }

  services:any
  therapists:any
  timeslots: any
  
  


  name=""
  email=""
  contact=""
  gender=""
  age=""
  date: NgbDateStruct;
  minDate: NgbDateStruct;
  user_id=""
  service_id=""
  apt_type=''
  time_id=""
  message=""


  timeslot_retriever() {
    const formData = new FormData();
  
    // Add other fields to FormData
    formData.append('user_id', this.user_id);
  
    // Convert NgbDateStruct to a string in a specific format
    const formattedDate = this.formatNgbDate(this.date);
    formData.append('date', formattedDate);
  
    this.http.post("http://localhost:8000/api/timeslot", formData).subscribe((resultData: any) => {
      this.timeslots = resultData;
      console.log(this.timeslots)
      // this.router.navigate(['admin/login']);
    });
  }
  
  // Helper function to format NgbDateStruct to a string
  private formatNgbDate(date: NgbDateStruct): string {
    if (date) {
      // Format the date as needed (e.g., YYYY-MM-DD)
      const formattedDate = `${date.year}-${date.month}-${date.day}`;
      return formattedDate;
    }
    return "";
  }

  appointment(){


    const formData = new FormData();
  
    // Add other fields to FormData
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('contact', this.contact);
    formData.append('gender', this.gender);
    formData.append('age', this.age);
    formData.append('user_id', this.user_id);
    formData.append('service_id', this.service_id);
    formData.append('apt_type', this.apt_type);
    formData.append('time_id', this.time_id);
    formData.append('message', this.message);
  
    // Convert NgbDateStruct to a string in a specific format
    const formattedDate = this.formatNgbDate(this.date);
    formData.append('date', formattedDate);

    this.http.post("http://localhost:8000/api/appointment", formData).subscribe((resultData: any) => {
      console.log(resultData)
      // this.router.navigate(['admin/login']);
    });


  }


}
