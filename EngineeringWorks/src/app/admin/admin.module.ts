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
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';


export function minlengthValidationMessages(err, field) {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

export function dateComparisonValidator(control: AbstractControl) {
  const { joiningDate:joiningDate , leavingDate : leavingDate}  = control.value;
let newJD = new Date (joiningDate);
let newLD =new Date (leavingDate);
  // avoid displaying the message error when values are empty
  if (newJD && !newLD) {
    return null;
  }

  if (newJD < newLD) {
    return null;
  }

  return { dateComparison: { message: 'leaving date is earlier than the joining date' } };
}
@NgModule({
  declarations: [AdminDashboardComponent, AdminManageClientsComponent, AdminManageEmployeesComponent, AdminManageEquipmentComponent, AdminManageServicesComponent, AdminManageProjectsComponent, AdminManageOrdersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormlyModule.forChild({
      validators: [
        { name: 'dateComparison', validation: dateComparisonValidator },
      ],
      validationMessages: [
      { name: 'required', message: 'This field is required' },
      { name: 'minlength', message: minlengthValidationMessages },
    ]}),
    FormlyBootstrapModule,
    ReactiveFormsModule,
    FormsModule,


  ]
})
export class AdminModule { }
