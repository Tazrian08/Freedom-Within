import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {


  constructor(private http: HttpClient, private router: Router){}


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



  selectedFile: File | null = null;


  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  type:string=""
  description: string=""
  image: string=""

service_sub(){
  
  const formData = new FormData();

  // Append the existing form data
  formData.append('type', this.type);
  formData.append('description', this.description);

  if (this.selectedFile) {
    formData.append('image', this.selectedFile, this.selectedFile.name);
  }


  this.http.post("http://localhost:8000/api/create/service",formData).subscribe((resultData: any)=> 
  {

      this.image=resultData
      this.type=""
      this.description=""

      // this.router.navigate(['/login'])

  });
  console.log("This runs")
  alert("Service added successfully!")
  
}


}
