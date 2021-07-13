import { HttpErrorInterceptorService } from './services/httperror-interceptor.service';
import { ProjectService } from 'src/app/services/project.service';
import { AlertifyService } from './services/alertify.service';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { HomeComponent } from './home/home.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { OurServicesListComponent } from './our-services/our-services-list/our-services-list.component';
import { OurServicesDetailsComponent } from './our-services/our-services-details/our-services-details.component';
import { EquipmentListComponent } from './equipment/equipment-list/equipment-list.component';
import { EquipmentDetailsComponent } from './equipment/equipment-details/equipment-details.component';
import { StaffListComponent } from './staff/staff-list/staff-list.component';
import { StaffDetailsComponent } from './staff/staff-details/staff-details.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddProjectComponent,
    ProjectDetailsComponent,
    ProjectCardComponent,
    ProjectListComponent,
    AboutUsComponent,
    ContactUsComponent,
      OrderListComponent,
      OrderDetailsComponent,
      OurServicesListComponent,
      OurServicesDetailsComponent,
      EquipmentListComponent,
      EquipmentDetailsComponent,
      StaffListComponent,
      StaffDetailsComponent



   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    ClientModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    FormlyModule.forRoot({ extras: { lazyRender: true },
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ] }
      ),
    FormlyBootstrapModule,




  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi:true
    },
    AlertifyService,
    ProjectService,
    AuthService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
