import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emitters } from 'src/app/emitters/emitters';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {

  private apiBaseUrl = environment.apiBaseUrl;

  searchTerm = "";
  user: any;
  contacts: any;
  auth: boolean = false;
  admin: boolean = false;
  thera: boolean = false;
  appointments: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const user_id = +params['id'];
      this.http.get(`${this.apiBaseUrl}/myappointments/${user_id}`).subscribe(
        (data: any) => {
          this.appointments = data;
          console.log(this.appointments);
        },
        (error) => {
          console.error('Error fetching appointments:', error);
        }
      );
    });
  }

  ngOnInit(): void {
    this.http.get(`${this.apiBaseUrl}/user`, { withCredentials: true }).subscribe(
      (res: any) => {
        console.log(res);
        this.user = res.user;
        this.contacts = res.contacts;
        if (res.user.admin_access == 1) {
          Emitters.adminEmitter.emit(true);
        }
        if (res.user.therapist_status == 1) {
          Emitters.therapistEmitter.emit(true);
        }
        Emitters.authEmitter.emit(true);
      });
    Emitters.authEmitter.subscribe((data: any) => {
      this.auth = data;
    });
    Emitters.adminEmitter.subscribe((data: any) => {
      this.admin = data;
    });
    Emitters.therapistEmitter.subscribe((data: any) => {
      this.thera = data;
    });
  }

  search(): void {
    let apiUrl: string;
    if (this.searchTerm !== "") {
      apiUrl = `${this.apiBaseUrl}/app_search/${this.searchTerm}`;
    } else {
      apiUrl = `${this.apiBaseUrl}/myappointments/${this.user.id}`;
    }

    this.http.get(apiUrl).subscribe((resultData: any) => {
      this.appointments = resultData;
      console.log(this.appointments);
    });
  }
}
