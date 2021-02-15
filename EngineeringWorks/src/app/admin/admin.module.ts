import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminManageClientsComponent } from './admin-manage-clients/admin-manage-clients.component';
import { AdminManageEmployeesComponent } from './admin-manage-employees/admin-manage-employees.component';
import { AdminManageEquipmentComponent } from './admin-manage-equipment/admin-manage-equipment.component';
import { AdminManageServicesComponent } from './admin-manage-services/admin-manage-services.component';
import { AdminManageProjectsComponent } from './admin-manage-projects/admin-manage-projects.component';
import { AdminManageOrdersComponent } from './admin-manage-orders/admin-manage-orders.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AdminDashboardComponent, AdminManageClientsComponent, AdminManageEmployeesComponent, AdminManageEquipmentComponent, AdminManageServicesComponent, AdminManageProjectsComponent, AdminManageOrdersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule

  ]
})
export class AdminModule { }
