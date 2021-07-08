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
import { RepeatTypeComponent } from './repeat-section.type';


export function minlengthValidationMessages(err, field) {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

export function dateComparisonValidator(control: AbstractControl) {
  const { joiningDate:joiningDate , leavingDate : leavingDate}  = control.value;

  // avoid displaying the message error when values are empty
  if (!joiningDate  || !leavingDate) {
    return null;
  }
  let newJD = new Date (joiningDate);
let newLD =new Date (leavingDate);

  if (newJD < newLD) {
    return null;
  }

  return { dateComparison: { message: 'leaving date is earlier than the joining date' } };
}
@NgModule({
  declarations: [AdminDashboardComponent, AdminManageClientsComponent, AdminManageEmployeesComponent, AdminManageEquipmentComponent, AdminManageServicesComponent, AdminManageProjectsComponent, AdminManageOrdersComponent,RepeatTypeComponent ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormlyModule.forChild({
      types: [
        { name: 'repeat', component: RepeatTypeComponent },
      ],
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
