import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private http: HttpClient, private router: Router ){}

  auth:boolean=false
  admin:boolean=false
  thera:boolean=false
  services:any


  ngOnInit(): void {

    this.http.get(`http://localhost:8000/api/allservice`)
  
    .subscribe((resultData: any)=>
    {
      this.services=resultData
      console.log(this.services)

    });



    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        console.log(res)
        if (res.admin_access==1){
          Emitters.adminEmitter.emit(true);
        }
        if (res.therapist_status==1){
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

  logout(): void {
    this.http.post('http://localhost:8000/api/logout', {}, {withCredentials: true})
      .subscribe(() =>{
        this.auth = false
        this.admin=false
        this.thera=false
      } );
      this.router.navigate(['/login'])
  }
}