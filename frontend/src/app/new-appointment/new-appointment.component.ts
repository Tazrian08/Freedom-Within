import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private router: Router, private calendar: NgbCalendar) 
  {

    this.date = this.calendar.getToday();
    this.minDate = this.calendar.getToday();
    { 
      this.http.get(`${this.apiBaseUrl}/allservice`)
      .subscribe((resultData: any)=>
      {
        this.services=resultData
        console.log(this.services)
      });
    }

    { 
      this.http.get(`${this.apiBaseUrl}/alltherapist`)
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
  doctor:any

  timeslot_retriever() {
    const formData = new FormData();
    formData.append('user_id', this.user_id);
    const formattedDate = this.formatNgbDate(this.date);
    formData.append('date', formattedDate);

    this.http.post(`${this.apiBaseUrl}/timeslot`, formData).subscribe((resultData: any) => {
      this.doctor=resultData["therapist"];
      this.timeslots=resultData["timeslots"];
      console.log(this.timeslots)
      console.log(this.doctor)
    });
  }

  // Helper function to format NgbDateStruct to a string
  private formatNgbDate(date: NgbDateStruct): string {
    if (date) {
      const formattedDate = `${date.year}-${date.month}-${date.day}`;
      return formattedDate;
    }
    return "";
  }

  reappointment(){
    const formData = new FormData();
    formData.append('contact', this.contact);
    formData.append('user_id', this.user_id);
    formData.append('service_id', this.service_id);
    formData.append('apt_type', this.apt_type);
    formData.append('time_id', this.time_id);
    formData.append('message', this.message);
    const formattedDate = this.formatNgbDate(this.date);
    formData.append('date', formattedDate);

    this.http.post(`${this.apiBaseUrl}/reappointment`, formData).subscribe((resultData: any) => {
      console.log(resultData)
      alert("Appointment Made. You will be contacted soon for confirmation")
      this.router.navigate(['home']);
    });
  }
}
