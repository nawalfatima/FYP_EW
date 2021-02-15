import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminManageClientsComponent } from './admin-manage-clients/admin-manage-clients.component';
import { AdminManageEmployeesComponent } from './admin-manage-employees/admin-manage-employees.component';
import { AdminManageEquipmentComponent } from './admin-manage-equipment/admin-manage-equipment.component';
import { AdminManageOrdersComponent } from './admin-manage-orders/admin-manage-orders.component';
import { AdminManageProjectsComponent } from './admin-manage-projects/admin-manage-projects.component';
import { AdminManageServicesComponent } from './admin-manage-services/admin-manage-services.component';

const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
{path: 'manage-orders', component: AdminManageOrdersComponent },
{ path: 'manage-clients', component: AdminManageClientsComponent },
{ path: 'manage-projects', component: AdminManageProjectsComponent },
{ path: 'manage-services', component: AdminManageServicesComponent },
{ path: 'manage-employees', component: AdminManageEmployeesComponent },
{ path: 'manage-equipment', component: AdminManageEquipmentComponent }





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
