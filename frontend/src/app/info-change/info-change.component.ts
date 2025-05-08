import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-info-change',
  templateUrl: './info-change.component.html',
  styleUrls: ['./info-change.component.css']
})
export class InfoChangeComponent {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private router: Router) {}

  auth: boolean = false;
  thera: boolean = false;
  admin: boolean = false;
  user: any;
  contacts: any;

  name = "";
  email = "";
  password = "";
  password1 = "";
  description = "";

  ngOnInit(): void {
    this.http.get(`${this.apiBaseUrl}/user`, { withCredentials: true }).subscribe(
      (res: any) => {
        console.log(res);
        this.user = res.user;
        this.name = this.user.name;
        this.email = this.user.email;
        this.description = this.user.description;
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

  selectedFile: any;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  upload(id: string): void {
    const formData = new FormData();
    formData.append('id', id);

    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }

    this.http.post(`${this.apiBaseUrl}/img_change`, formData).subscribe((resultData: any) => {
      console.log(resultData);
    });
  }

  name_change(id: string): void {
    const data = { name: this.name, id };
    this.http.put(`${this.apiBaseUrl}/name_change`, data).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Name changed successfully!");
    });
  }

  email_change(id: string): void {
    const data = { email: this.email, id };
    this.http.put(`${this.apiBaseUrl}/email_change`, data).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Email changed successfully!");
    });
  }

  password_change(id: string): void {
    if (this.password == this.password1 && this.password != "") {
      const data = { password: this.password, id };
      this.http.put(`${this.apiBaseUrl}/password_change`, data).subscribe((resultData: any) => {
        console.log(resultData);
        alert("Password changed successfully!");
      });
    } else {
      alert("Passwords don't match");
    }
  }

  contact_change(id: string, contact: string): void {
    const data = { contact, id };
    this.http.put(`${this.apiBaseUrl}/contact_change`, data).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Contact changed successfully!");
    });
  }

  description_change(id: string): void {
    const data = { description: this.description, id };
    this.http.put(`${this.apiBaseUrl}/desc_change`, data).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Description changed successfully!");
    });
  }
}
