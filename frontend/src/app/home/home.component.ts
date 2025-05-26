import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment, } from '../../environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private router: Router, private sanitizer: DomSanitizer ){}

  auth:boolean=false
  admin:boolean=false
  thera:boolean=false
  services:any
  home:any
  organization:any
  mapUrl!: SafeResourceUrl;
  user: any;


  ngOnInit(): void {

    this.http.get(`${this.apiBaseUrl}/allservice`)
  
    .subscribe((resultData: any)=>
    {
      this.services=resultData
      console.log(this.services)

    });

    this.http.get(`${this.apiBaseUrl}/allhome`)
  
    .subscribe((resultData: any)=>
    {
      this.home=resultData[0]
      this.organization=resultData[1]
      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.organization.maplink)
      console.log(this.organization.maplink)

      

    });



    this.http.get(`${this.apiBaseUrl}/user`, {withCredentials: true}).subscribe(
      (res: any) => {
        console.log(res)
        if (res.admin_access==1){
          Emitters.adminEmitter.emit(true);
        }
        if (res.therapist_status==1){
          Emitters.therapistEmitter.emit(true);
        }
        Emitters.authEmitter.emit(true);
        this.user = res.user;
      });
    Emitters.authEmitter.subscribe(
      (data: any) => {
        console.log(data)
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

  logout(): void {
    this.http.post(`${this.apiBaseUrl}/logout`, {}, {withCredentials: true})
      .subscribe(() =>{
        this.auth = false
        this.admin=false
        this.thera=false
      } );
      this.router.navigate(['/login'])
  }
}