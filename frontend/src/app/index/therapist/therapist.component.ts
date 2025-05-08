import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emitters/emitters';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-therapist',
  templateUrl: './therapist.component.html',
  styleUrls: ['./therapist.component.css']
})
export class TherapistComponent {

  private apiBaseUrl = environment.apiBaseUrl;

  therapists: any;
  searchTerm = "";

  user: any;
  auth: boolean = false;
  admin: boolean = false;
  thera: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.http.get(`${this.apiBaseUrl}/alltherapist`).subscribe((resultData: any) => {
      this.therapists = resultData;
      console.log(this.therapists);
    });
  }

  ngOnInit(): void {
    this.http.get(`${this.apiBaseUrl}/user`, { withCredentials: true }).subscribe(
      (res: any) => {
        console.log(res);
        this.user = res.user;

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

  tog_admin(id: string): void {
    this.http.put(`${this.apiBaseUrl}/tog_admin`, id).subscribe((resultData: any) => {
      console.log(resultData);
    });
  }

  search(): void {
    let apiUrl: string;

    if (this.searchTerm !== "") {
      apiUrl = `${this.apiBaseUrl}/search/${this.searchTerm}`;
    } else {
      apiUrl = `${this.apiBaseUrl}/alltherapist`;
    }

    this.http.get(apiUrl).subscribe((resultData: any) => {
      this.therapists = resultData;
    });
  }
}
