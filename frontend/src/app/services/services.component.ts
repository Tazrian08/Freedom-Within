import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  services:any
  user:any
  id=''
  contacts:any
  auth: boolean=false
  admin: boolean=false
  thera: boolean=false
  serv1:any;
  serv2:any;
  serv3:any;
  serv4:any;

constructor(private http: HttpClient){

  { 
    
    this.http.get("http://localhost:8000/api/allservice")
  
    .subscribe((resultData: any)=>
    {
      this.services=resultData
      console.log(this.services)
      this.serv1=this.services[0]
      console.log(this.serv1)
      this.serv2=this.services[1]
      this.serv3=this.services[2]
      this.serv4=this.services[3]
    });
  }


}

ngOnInit(): void {

  this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
    (res: any) => {
      console.log(res)
      this.user=res.user
      this.id=res.user.id
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

}
