import { Component } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization-edit',
  templateUrl: './organization-edit.component.html',
  styleUrls: ['./organization-edit.component.css']
})
export class OrganizationEditComponent {




  auth:boolean=false
  admin:boolean=false
  thera:boolean=false
  services:any
  home:any
  title=''
  home_description=''
  organization:any
  mapUrl='';
  organization_name=''
  address=''
  contact=""


  constructor(private http: HttpClient, private router: Router, private sanitizer: DomSanitizer ){}



  ngOnInit(): void {

    this.http.get(`http://localhost:8000/api/allservice`)
  
    .subscribe((resultData: any)=>
    {
      this.services=resultData
      console.log(this.services)

    });

    this.http.get(`http://localhost:8000/api/allhome`)
  
    .subscribe((resultData: any)=>
    {
      this.home=resultData[0]
      this.title=this.home.title
      this.home_description=this.home.description
      this.organization=resultData[1]
      this.organization_name=this.organization.name
      this.address=this.organization.address
      this.mapUrl = this.organization.maplink
      this.contact = this.organization.contact
      console.log(this.organization.maplink)

      

    });



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


  title_change(id:string){

    let data={"title":this.title,"id":id}

    this.http.put('http://localhost:8000/api/title_change',data)
  
    .subscribe((resultData: any)=>
    {
      console.log(resultData)
      alert("Title changed successfully!")

    });


  }
  home_description_change(id:string){

    let data={"description":this.home_description,"id":id}

    this.http.put('http://localhost:8000/api/homedescription_change',data)
  
    .subscribe((resultData: any)=>
    {
      console.log(resultData)
      alert("Home Description changed successfully!")

    });

    
  }

  name_change(id:string){

    
    let data={"name":this.organization_name,"id":id}

    this.http.put('http://localhost:8000/api/orgname_change',data)
  
    .subscribe((resultData: any)=>
    {
      console.log(resultData)
      alert("Organization name changed successfully!")

    });


  }

  address_change(id:string){


        
    let data={"address":this.address,"id":id}

    this.http.put('http://localhost:8000/api/address_change',data)
  
    .subscribe((resultData: any)=>
    {
      console.log(resultData)
      alert("Address changed successfully!")

    });

    
  }

  map_change(id:string){


    console.log(this.mapUrl)
    let data={"maplink":this.mapUrl,"id":id}

    this.http.put('http://localhost:8000/api/map_change',data)
  
    .subscribe((resultData: any)=>
    {
      console.log(resultData)
      alert("MapLink changed successfully!")

    });


  }

  contact_change(id:string){

    let data={"contact":this.contact,"id":id}

    this.http.put('http://localhost:8000/api/orgcontact_change',data)
  
    .subscribe((resultData: any)=>
    {
      console.log(resultData)
      alert("Contact changed successfully!")

    });



  }


}
