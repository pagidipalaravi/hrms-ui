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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeService } from './service/EmployeeService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DepartmentService } from './service/DepartmentService';
import { JobService } from './service/JobService';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { AuthenticationService } from './service/AuthenticationService';
import { TokenInterceptor } from './interceptor/TokenInterceptor ';
import { RouteGuardService } from './service/RouteGuardService';

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
    LoginComponent,
    LogoutComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
  ],

  providers: [
    EmployeeService, 
    DepartmentService,
    JobService,
    AuthenticationService,
    RouteGuardService,

    {  
      provide: HTTP_INTERCEPTORS,  
      useClass: TokenInterceptor,  
      multi: true  
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
