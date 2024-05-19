import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient, private router: Router ) {}

  auth:boolean=false
  admin:boolean=false
  thera:boolean=false
  ngOnInit(): void {

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


  email: string=""
  password:string=""

  login(){
   
    let bodyData = {
      "email" : this.email,
      "password" : this.password,
    };


    this.http.post("http://localhost:8000/api/login",bodyData,{withCredentials: true}).subscribe((resultData: any)=>
    {   
        if (resultData!="Login Failed"){
        this.router.navigate(['/profile'])
      } else {
        alert("Incorrect username or password")
      }
    });
  
}

}
