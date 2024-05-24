import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './adminpages/register/register.component';
import { NgbCarouselConfig, NgbCarouselModule, NgbModal, NgbModalConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './adminpages/login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { AddServiceComponent } from './adminpages/add-service/add-service.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { AddEventsComponent } from './adminpages/add-events/add-events.component';
import { ProfileComponent } from './profile/profile.component';
import { InfoChangeComponent } from './info-change/info-change.component';
import { TherapistComponent } from './index/therapist/therapist.component';
import { PatientComponent } from './index/patient/patient.component';
import { AppointmentsComponent } from './index/appointments/appointments.component';
import { ServicesComponent } from './services/services.component';
import { EventsComponent } from './events/events.component';
import { OrganizationEditComponent } from './adminpages/organization-edit/organization-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AddServiceComponent,
    AppointmentComponent,
    NewAppointmentComponent,
    AddEventsComponent,
    ProfileComponent,
    InfoChangeComponent,
    TherapistComponent,
    PatientComponent,
    AppointmentsComponent,
    ServicesComponent,
    EventsComponent,
    OrganizationEditComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgbCarouselModule,
  ],
  providers: [NgbCarouselConfig,NgbModalConfig, NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
