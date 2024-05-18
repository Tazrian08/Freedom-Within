import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private http: HttpClient, private router: Router ){

    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        console.log(res)
        this.user=res.user
        this.id=res.user.id
        this.contacts=res.contacts
        this.image=res.image
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

  auth:boolean=false
  admin:boolean=false
  thera:boolean=false

  user: any
  id=""
  contacts:any
  image=""
  t_app:any
  show_schedule:boolean=false
  show_app:boolean=false
  new_appointments:any
  search1=""
  search2=""



  ngOnInit(): void {

    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        console.log(res)
        this.user=res.user
        this.id=res.user.id
        this.contacts=res.contacts
        this.image=res.image
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

  logout(): void {
    this.http.post('http://localhost:8000/api/logout', {}, {withCredentials: true})
      .subscribe(() =>{
        this.auth = false
        this.admin=false
        this.thera=false
      } );
      this.router.navigate(['/login'])
  }


  show(){

    this.http.get(`http://localhost:8000/api/tappt/${this.user.id}`)
  
    .subscribe((resultData: any)=>
    {
      this.t_app=resultData
      console.log(this.t_app)

    });

    this.show_schedule=true
  }

  show2(){

    this.http.get(`http://localhost:8000/api/nappt/${this.user.id}`)
  
    .subscribe((resultData: any)=>
    {
      this.new_appointments=resultData
      console.log(this.new_appointments)

    });

    this.show_app=true


  }

  confirm(id:string){

    this.http.put('http://localhost:8000/api/confirmation',id)
  
    .subscribe((resultData: any)=>
    {
      console.log(resultData)
      window.location.reload();

    });
  }

  done(id:string){

    this.http.put('http://localhost:8000/api/done',id)
  
    .subscribe((resultData: any)=>
    {
      console.log(resultData)
      window.location.reload();

    });
  }

  goToappointment(): void {
    this.router.navigate(['index/appointments', this.user.id]);

  }

  con_search(){


    let data={"id":this.user.id, "search":this.search2}
  
    // Check if the search string is empty
    if (this.search2 !== "") {
      this.http.post('http://localhost:8000/api/tappt/search',data).subscribe((resultData: any) => {
        this.t_app = resultData;
        this.show_schedule=true
        console.log("workfing 2")
      });

    } else {
      let apiUrl = `http://localhost:8000/api/tappt/${this.user.id}`;
      this.http.get(apiUrl).subscribe((resultData: any) => {
        this.t_app = resultData;
        this.show_schedule=true
        console.log("workign1")
      });

    }
  }

  in_search(){
    let data={"id":this.user.id, "search":this.search1}
  
    // Check if the search string is empty
    if (this.search1 !== "") {
      this.http.post('http://localhost:8000/api/nappt/search',data).subscribe((resultData: any) => {
        this.new_appointments=resultData
        this.show_app=true
        console.log("workfing 2")
      });

    } else {
      let apiUrl = `http://localhost:8000/api/nappt/${this.user.id}`;
      this.http.get(apiUrl).subscribe((resultData: any) => {
        this.new_appointments=resultData
        this.show_app=true
        console.log("workfing 2")
      });

    }

  }
  cancel(id:string){

    this.http.delete(`http://localhost:8000/api/cancel/${id}`)
  
    .subscribe((resultData: any)=>
    {
      console.log(resultData)
      window.location.reload();

    });


  }

}
