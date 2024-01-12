import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {


  constructor(private http: HttpClient, private router: Router){}


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
  
}


}
