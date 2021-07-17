import { ContactUsComponent } from './contact-us/contact-us.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesListComponent } from './our-services/our-services-list/our-services-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: "login" , component: LoginComponent},
  { path: "register" , component: RegisterComponent},
  {path: "home", component: HomeComponent},
  { path:"project", component: ProjectListComponent},
  { path:"services", component: OurServicesListComponent},
  {path: "contact", component: ContactUsComponent},
  {path: "about", component: AboutUsComponent},





  {path: "add-project" , component: AddProjectComponent},
  {path: "project-details", component:ProjectDetailsComponent},
  { path: 'project-detail/:id', component: ProjectDetailsComponent},


  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
