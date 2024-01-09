import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './adminpages/register/register.component';
import { LoginComponent } from './adminpages/login/login.component';

const routes: Routes = [
  {path: "admin/register", component: RegisterComponent},
  {path: "admin/login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
