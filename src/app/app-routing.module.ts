import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './navigation/bottom-navigation/aboutus/aboutus.component';
import { ContactComponent } from './navigation/bottom-navigation/contact/contact.component';

const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "createEmployee", component : CreateEmployeeComponent},
  {path : "viewEmployee", component : ViewEmployeeComponent},
  {path : "aboutUs", component : AboutusComponent},
  {path : "contact", component : ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
