import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {


  services:any
  user:any
  id=''
  contacts:any
  auth: boolean=false
  admin: boolean=false
  thera: boolean=false

  past_events:any
  future_events:any


  constructor(private http: HttpClient){

    { 
      
      this.http.get("http://localhost:8000/api/allevents")
    
      .subscribe((resultData: any)=>
      {
        this.past_events=resultData["past_events"]
        this.future_events=resultData["future_events"]
        console.log(this.past_events)
        console.log(this.future_events)
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

  delete_event(id: string){


  }

}
