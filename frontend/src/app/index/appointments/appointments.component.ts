import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {

  
  searchTerm=""

  user:any
  contacts:any
  auth:boolean=false
  admin:boolean=false
  thera:boolean=false
  appointments:any


  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      const user_id = +params['id']; // assuming you have 'id' as a route parameter

      // Fetch the specific package by ID
      this.http.get(`http://localhost:8000/api/myappointments/${user_id}`).subscribe(
        (data: any) => {
          this.appointments=data
          console.log(this.appointments)

        },
        (error) => {
          console.error('Error fetching package profile:', error);
        }
      );
    });
  }

  ngOnInit(): void {

    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        console.log(res)
        this.user=res.user
        this.contacts=res.contacts
        if (res.user.admin_access==1){
          Emitters.adminEmitter.emit(true);
        }
        if (res.user.therapist_status==1){
          Emitters.therapistEmitter.emit(true);
        }
        Emitters.authEmitter.emit(true);
      });
    Emitters.authEmitter.subscribe(
      (data: any) => {
        this.auth= data;
      });
    Emitters.adminEmitter.subscribe(
      (data: any) => {
        this.admin= data;
      });
    Emitters.authEmitter.subscribe(
      (data: any) => {
        this.auth= data;
      });
    Emitters.therapistEmitter.subscribe(
      (data: any) => {
        this.thera = data;
      }); 

  }

  search(){

    let apiUrl: string;
  
    // Check if the search string is empty
    if (this.searchTerm !== "") {
      apiUrl = `http://localhost:8000/api/app_search/${this.searchTerm}`;
    } else {
      apiUrl = `http://localhost:8000/api/myappointments/${this.user.id}`;
    }
  
    this.http.get(apiUrl).subscribe((resultData: any) => {
      this.appointments = resultData;
      console.log(this.appointments)
    });

  }

}
