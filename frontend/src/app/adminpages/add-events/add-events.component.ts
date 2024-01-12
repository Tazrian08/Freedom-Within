import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent {

  constructor(private http: HttpClient, private router: Router ,private calendar: NgbCalendar ){
    this.date = this.calendar.getToday();
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
