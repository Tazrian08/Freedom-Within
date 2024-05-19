import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './adminpages/register/register.component';
import { LoginComponent } from './adminpages/login/login.component';
import { HomeComponent } from './home/home.component';
import { AddServiceComponent } from './adminpages/add-service/add-service.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { AddEventsComponent } from './adminpages/add-events/add-events.component';
import { ProfileComponent } from './profile/profile.component';
import { InfoChangeComponent } from './info-change/info-change.component';
import { TherapistComponent } from './index/therapist/therapist.component';
import { AppointmentsComponent } from './index/appointments/appointments.component';
import { PatientComponent } from './index/patient/patient.component';
import { ServicesComponent } from './services/services.component';
import { EventsComponent } from './events/events.component';


const routes: Routes = [
  {path: "admin/register", component: RegisterComponent,title: "Registration"},
  {path: "login", component: LoginComponent, title: "Login"},
  {path: "home", component: HomeComponent,title: "Freedom Within"},
  {path: "admin/service", component: AddServiceComponent,title: "Add Service"},
  {path: "appointment", component: AppointmentComponent, title: "Appointment"},
  {path: "re_appointment", component: NewAppointmentComponent, title: "Returning Patient Appointment"},
  {path: "admin/event", component: AddEventsComponent,title: "Add Event"},
  {path: "profile", component: ProfileComponent,title: "Profile"},
  {path: "change", component: InfoChangeComponent,title: "Update Info"},
  {path: "index/therapists", component: TherapistComponent,title: "Therapist Index"},
  {path: "index/appointment", component: TherapistComponent,title: "Appointment History"},
  {path: "index/appointments/:id", component: AppointmentsComponent,title: "My Appointments"},
  {path: "index/patients", component: PatientComponent,title: "Patient Index"},
  {path: "services", component: ServicesComponent,title: "Services"},
  {path: "events", component: EventsComponent,title: "Events"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
