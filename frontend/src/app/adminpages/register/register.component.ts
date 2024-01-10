import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  constructor(private http: HttpClient, private router: Router ) {}


  selectedFile: File | null = null;


  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  

  name: string=""
  email: string=""
  password: string=""
  contacts: string[]=[]
  therapist_status=0
  admin_access=0
  image=""


  register()
  {

    const formData = new FormData();

    // Add other fields to FormData
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('password', this.password);
    formData.append('therapist_status', this.therapist_status.toString());
    formData.append('admin_access', this.admin_access.toString());

    // Add contacts array as a JSON string
    formData.append('contacts', JSON.stringify(this.contacts.filter(contact => contact.trim() !== "")));
  
    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }


  this.http.post("http://localhost:8000/api/register",formData).subscribe((resultData: any)=> 
  {

    this.image=resultData
    // this.router.navigate(['admin/login']);

  });
  console.log("This runs")
  
}
  }

  


