import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopNavigationComponent } from './navigation/top-navigation/top-navigation.component';
import { BottomNavigationComponent } from './navigation/bottom-navigation/bottom-navigation.component';
import { LhsNavigationComponent } from './navigation/lhs-navigation/lhs-navigation.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './service/EmployeeService';
import { FormsModule } from '@angular/forms';
import { AboutusComponent } from './navigation/bottom-navigation/aboutus/aboutus.component';
import { ContactComponent } from './navigation/bottom-navigation/contact/contact.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopNavigationComponent,
    BottomNavigationComponent,
    LhsNavigationComponent,
    CreateEmployeeComponent,
    ViewEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
],

  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
