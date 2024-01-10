import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-therapist',
  templateUrl: './add-therapist.component.html',
  styleUrls: ['./add-therapist.component.css']
})
export class AddTherapistComponent {


  constructor(private http: HttpClient, private router: Router ) {}


  name:string=""
  email:string=""
  contacts1: string[]=[]
  contacts: string[]=[]
  

  addContactField() {
    this.contacts.push("");

  }


  therapist_sub() {
    let bodyData = {
      "name": this.name,
      "email": this.email,
      "contacts": this.contacts.filter(contact => contact.trim() !== "") // Filter out empty contacts
    };
  
    this.http.post("http://localhost:8000/api/create/therapist", bodyData).subscribe((resultData: any) => {
      console.log(resultData)
      console.log(this.contacts);
    });
    console.log("This runs");
  }
  

}
