import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './adminpages/register/register.component';
import { LoginComponent } from './adminpages/login/login.component';
import { HomeComponent } from './home/home.component';
import { AddServiceComponent } from './adminpages/add-service/add-service.component';
import { AddTherapistComponent } from './adminpages/add-therapist/add-therapist.component';

const routes: Routes = [
  {path: "admin/register", component: RegisterComponent},
  {path: "admin/login", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "admin/add_service", component: AddServiceComponent},
  {path: "admin/add_therapist", component: AddTherapistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
