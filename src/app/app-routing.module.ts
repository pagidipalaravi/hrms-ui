import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './navigation/bottom-navigation/aboutus/aboutus.component';
import { ContactComponent } from './navigation/bottom-navigation/contact/contact.component';
import { RouteGuardService } from './service/RouteGuardService';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: '',
    component: HomeComponent,canActivate: [RouteGuardService],
    children: [
      { path: "home", component: HomeComponent},
      { path: "create", component: CreateEmployeeComponent},
      { path: "view", component: ViewEmployeeComponent},
      { path: "aboutUs", component: AboutusComponent},
      { path: "contact", component: ContactComponent},
      { path: "login", component: LoginComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
