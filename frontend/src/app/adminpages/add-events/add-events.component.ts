import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent {

  constructor(private http: HttpClient, private router: Router ,private calendar: NgbCalendar ){
    this.date = this.calendar.getToday();
  }

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

  name=""
  description=""
  time=""
  date: NgbDateStruct;


  image: string=""


event_sub(){
  
  const formData = new FormData();

  // Append the existing form data
  formData.append('name', this.name);
  formData.append('description', this.description);
  formData.append('time', this.time);

  const formattedDate = this.formatNgbDate(this.date);
    formData.append('date', formattedDate);

  if (this.selectedFile) {
    formData.append('image', this.selectedFile, this.selectedFile.name);
  }


  this.http.post("http://localhost:8000/api/create/event",formData).subscribe((resultData: any)=> 
  {

      this.image=resultData
      this.name=""
      this.description=""
      console.log(this.image)
      alert("Event added successfully!")

      // this.router.navigate(['/login'])

  });

  
}

private formatNgbDate(date: NgbDateStruct): string {
  if (date) {
    // Format the date as needed (e.g., YYYY-MM-DD)
    const formattedDate = `${date.year}-${date.month}-${date.day}`;
    return formattedDate;
  }
  return "";
}

}
