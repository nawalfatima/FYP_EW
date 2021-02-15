import { ProjectService } from 'src/app/services/project.service';
import { UserService } from './services/user.service';
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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OurServicesComponent } from './our-services/our-services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

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
    OurServicesComponent,
    AboutUsComponent,
    ContactUsComponent
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
    TabsModule.forRoot()



  ],
  providers: [
    AlertifyService,
    ProjectService,
    AuthService,
    UserService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
