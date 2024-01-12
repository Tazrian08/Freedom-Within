import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './adminpages/register/register.component';
import { LoginComponent } from './adminpages/login/login.component';
import { HomeComponent } from './home/home.component';
import { AddServiceComponent } from './adminpages/add-service/add-service.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { AddEventsComponent } from './adminpages/add-events/add-events.component';

const routes: Routes = [
  {path: "admin/register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "admin/service", component: AddServiceComponent},
  {path: "appointment", component: AppointmentComponent},
  {path: "re_appointment", component: NewAppointmentComponent},
  {path: "admin/event", component: AddEventsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
