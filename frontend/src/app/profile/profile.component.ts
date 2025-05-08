import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private router: Router) {}

  auth: boolean = false;
  admin: boolean = false;
  thera: boolean = false;

  user: any;
  id = '';
  contacts: any;
  image = '';
  t_app: any;
  show_schedule: boolean = false;
  show_app: boolean = false;
  new_appointments: any;
  search1 = '';
  search2 = '';

  ngOnInit(): void {
    this.http.get(`${this.apiBaseUrl}/user`, { withCredentials: true }).subscribe(
      (res: any) => {
        console.log(res);
        this.user = res.user;
        this.id = res.user.id;
        this.contacts = res.contacts;
        this.image = res.image;
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

  logout(): void {
    this.http.post(`${this.apiBaseUrl}/logout`, {}, { withCredentials: true })
      .subscribe(() => {
        this.auth = false;
        Emitters.adminEmitter.emit(false);
        Emitters.therapistEmitter.emit(false);
        Emitters.authEmitter.emit(false);
        this.admin = false;
        this.thera = false;
      });
    this.router.navigate(['/login']);
  }

  show(): void {
    this.http.get(`${this.apiBaseUrl}/tappt/${this.user.id}`).subscribe((resultData: any) => {
      this.t_app = resultData;
      console.log(this.t_app);
    });
    this.show_schedule = true;
  }

  show2(): void {
    this.http.get(`${this.apiBaseUrl}/nappt/${this.user.id}`).subscribe((resultData: any) => {
      this.new_appointments = resultData;
      console.log(this.new_appointments);
    });
    this.show_app = true;
  }

  confirm(id: string): void {
    this.http.put(`${this.apiBaseUrl}/confirmation`, id).subscribe((resultData: any) => {
      console.log(resultData);
      window.location.reload();
    });
  }

  done(id: string): void {
    this.http.put(`${this.apiBaseUrl}/done`, id).subscribe((resultData: any) => {
      console.log(resultData);
      window.location.reload();
    });
  }

  goToappointment(): void {
    this.router.navigate(['index/appointments', this.user.id]);
  }

  con_search(): void {
    const data = { id: this.user.id, search: this.search2 };
    if (this.search2 !== '') {
      this.http.post(`${this.apiBaseUrl}/tappt/search`, data).subscribe((resultData: any) => {
        this.t_app = resultData;
        this.show_schedule = true;
      });
    } else {
      this.http.get(`${this.apiBaseUrl}/tappt/${this.user.id}`).subscribe((resultData: any) => {
        this.t_app = resultData;
        this.show_schedule = true;
      });
    }
  }

  in_search(): void {
    const data = { id: this.user.id, search: this.search1 };
    if (this.search1 !== '') {
      this.http.post(`${this.apiBaseUrl}/nappt/search`, data).subscribe((resultData: any) => {
        this.new_appointments = resultData;
        this.show_app = true;
      });
    } else {
      this.http.get(`${this.apiBaseUrl}/nappt/${this.user.id}`).subscribe((resultData: any) => {
        this.new_appointments = resultData;
        this.show_app = true;
      });
    }
  }

  cancel(id: string): void {
    this.http.delete(`${this.apiBaseUrl}/cancel/${id}`).subscribe((resultData: any) => {
      console.log(resultData);
      window.location.reload();
    });
  }
}
