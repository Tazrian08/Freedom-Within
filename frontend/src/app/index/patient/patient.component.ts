import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {


    this.http.get('http://localhost:8000/api/allpatient')
  
    .subscribe((resultData: any)=>
    {
      this.patients=resultData
      console.log(this.patients)

    });
  }


  user:any
  contacts:any
  auth:boolean=false
  admin:boolean=false
  thera:boolean=false
  appointments:any
  patients:any
  patient_id=""
  pat:any
  status=false

  ngOnInit(): void {

    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        console.log(res)
        this.user=res.user
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

  patient_select(id: string){
    this.status=true

    this.http.get(`http://localhost:8000/api/select/${id}`)
  
    .subscribe((resultData: any)=>
    {
      this.pat=resultData
      console.log(this.pat)

    });

  }

}
