import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-therapist',
  templateUrl: './therapist.component.html',
  styleUrls: ['./therapist.component.css']
})
export class TherapistComponent {

  therapists: any
  searchTerm=""

  user:any
  auth:boolean=false
  admin:boolean=false
  thera:boolean=false


  constructor(private http: HttpClient, private router: Router) 
  {

    { 
    
      this.http.get("http://localhost:8000/api/alltherapist")
    
      .subscribe((resultData: any)=>
      {
        this.therapists=resultData
        console.log(this.therapists)
      });
    }


  }

  ngOnInit(): void {

    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        console.log(res)
        this.user=res.user

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


  tog_admin(id:string){

    

    this.http.put('http://localhost:8000/api/tog_admin',id)
  
    .subscribe((resultData: any)=>
    {
      console.log(resultData)

    });


  }


  search(){

    let apiUrl: string;
  
    // Check if the search string is empty
    if (this.searchTerm !== "") {
      apiUrl = `http://localhost:8000/api/search/${this.searchTerm}`;
    } else {
      apiUrl = 'http://localhost:8000/api/alltherapist';
    }
  
    this.http.get(apiUrl).subscribe((resultData: any) => {
      this.therapists = resultData;
    });

  }


}
