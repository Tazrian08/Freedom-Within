import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Emitters } from 'src/app/emitters/emitters';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(private http: HttpClient, private router: Router, private config: NgbCarouselConfig ) {}

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
  

  name: string=""
  email: string=""
  password: string=""
  contacts: string[]=[]
  therapist_status=0
  admin_access=0
  image:string=""
  description: string=""


  register()
  {

    const formData = new FormData();

    // Add other fields to FormData
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('password', this.password);
    formData.append('description', this.description);
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
    this.name=""
    this.email=""
    this.password=""
    this.contacts=[]
    this.therapist_status=0
    this.admin_access=0
    this.image=""
    this.description=""
    // this.router.navigate(['admin/login']);

    alert("User has been registered");
      this.router.navigate(['/login']);

  });
  console.log("This runs")
  
}
  }

  


