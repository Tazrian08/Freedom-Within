import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-info-change',
  templateUrl: './info-change.component.html',
  styleUrls: ['./info-change.component.css']
})
export class InfoChangeComponent {


  constructor(private http: HttpClient, private router: Router ) {}


  auth:boolean=false
  thera:boolean=false
  admin:boolean=false
  user:any
  contacts: any

  name=""
  email=""
  password=""
  password1=""
  description=""


  ngOnInit(): void {

    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        console.log(res)
        this.user=res.user
        this.name=this.user.name
        this.email=this.user.email
        this.description=this.user.description
        // this.id=res.user.id
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


  name_change(id:string){

    let data={"name":this.name,"id":id}

    this.http.put('http://localhost:8000/api/name_change',data)
  
    .subscribe((resultData: any)=>
    {
      console.log(resultData)

    });



  }

  email_change(id:string){
    let data={"email":this.email,"id":id}

    this.http.put('http://localhost:8000/api/email_change',data)
  
    .subscribe((resultData: any)=>
    {
      console.log(resultData)

    });

  }
  password_change(id:string){

    

    if (this.password==this.password1 && this.password !=""){

      let data={"password":this.password,"id":id}
      this.http.put('http://localhost:8000/api/password_change',data)
  
    .subscribe((resultData: any)=>
    {
      console.log(resultData)

    });
    } else{
      alert("Passwords doesn't match")
    }



  }

  contact_change(id:string,contact:string){

    let data={"contact":contact,"id":id}

    this.http.put('http://localhost:8000/api/contact_change',data)
  
    .subscribe((resultData: any)=>
    {
      console.log(resultData)

    });


  }

  description_change(id:string){

    let data={"description":this.description,"id":id}

    this.http.put('http://localhost:8000/api/desc_change',data)
  
    .subscribe((resultData: any)=>
    {
      console.log(resultData)

    });


  }


}
