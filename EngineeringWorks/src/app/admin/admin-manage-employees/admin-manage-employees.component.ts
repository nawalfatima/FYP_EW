import { StaffInfo } from './../../model/StaffInfo';
import { IStaffEditableInfo, IStaffInfo } from './../../model/IStaff';
import { StaffEditableInfo } from './../../model/StaffEditableInfo';
import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { SalaryType } from 'src/app/Enums/enums';;

@Component({
  selector: 'app-admin-manage-employees',
  templateUrl: './admin-manage-employees.component.html',
//  styleUrls: ['./admin-manage-employees.component.css']
})
export class AdminManageEmployeesComponent implements OnInit {
  form = new FormGroup({});
  model : IStaffInfo = new StaffInfo();
  options: FormlyFormOptions = {
    formState: {
      disabled: true,
    },
  };

  constructor(private router : Router,
    private projectService : ProjectService,
    ) {

     }

  ngOnInit(): void {    }

  fields: FormlyFieldConfig[] = [

    {
      key: 'staffFID',
      type: 'input',
      templateOptions: {

        label: 'Staff Id',
        readonly: true
      },
    },
    {
      key: 'staffFName',
      type: 'input',
      templateOptions: {
        label: 'First Name',
        required : true

      },
      expressionProperties: {
        // apply expressionProperty for disabled based on formState
        'templateOptions.disabled': 'formState.disabled',
      },
    },
    {
      key: 'staffLName',
      type: 'input',
      templateOptions: {
        label: 'Last Name',
        required : true

      },
      expressionProperties: {
        // apply expressionProperty for disabled based on formState
        'templateOptions.disabled': 'formState.disabled',
      },
    },
      {
        key: 'staffAddress',
        type: 'input',
        templateOptions: {
          label: 'Address',
          required : true
        },
        expressionProperties: {
          // apply expressionProperty for disabled based on formState
          'templateOptions.disabled': 'formState.disabled',
        },
      },
      {
        key: 'staffEmail',
        type: 'input',
        templateOptions: {
          label: 'Last Name',
          type: 'email' ,
          placeholder : 'enter email',
          required : true
        },
        expressionProperties: {
          // apply expressionProperty for disabled based on formState
          'templateOptions.disabled': 'formState.disabled',
        },
      },
        {
          key: 'staffPhNo',
          type: 'input',
          templateOptions: {
            label: 'Phone Number',
            required : true

          },
          expressionProperties: {
            // apply expressionProperty for disabled based on formState
            'templateOptions.disabled': 'formState.disabled',
          },},
         {
            key: 'designation',
            type: 'input',
            templateOptions: {
              label: 'Designation',
              required : true

            },
            expressionProperties: {
              // apply expressionProperty for disabled based on formState
              'templateOptions.disabled': 'formState.disabled',
            },},
            {
              key: 'salaryAmt',
              type: 'input',
              templateOptions: {
                label: 'Salary Amount (PKR)',
                required : true

              },
              expressionProperties: {
                // apply expressionProperty for disabled based on formState
                'templateOptions.disabled': 'formState.disabled',
              },},
             { key: 'salaryType',
              type: 'select',
              templateOptions: {
                label: 'Salary Type',
                required: true,
                options: [
                  {label: 'Daily Wage', value: SalaryType.dailyWage},
                  {label: 'Monthly', value: SalaryType.monthly},
                  {label: 'Project Based',value: SalaryType.projectBased}

                ],
              },
              expressionProperties: {
                // apply expressionProperty for disabled based on formState
                'templateOptions.disabled': 'formState.disabled',
              },
            },

            {
              validators: {
              validation: [
                { name: 'dateComparison', options: { errorPath: 'leavingDate' } },
                    ],
                  },
            fieldGroup:[
              {
                type: 'input',
                key: 'joiningDate',
                className: 'col-sm-4',
                templateOptions: {
                  type: 'date',
                  label: 'Date of Joining:',
                  required: true
                },
                expressionProperties: {
                  // apply expressionProperty for disabled based on formState
                  'templateOptions.disabled': 'formState.disabled',
                },

              },
                {
                  type: 'input',
                  key: 'leavingDate',
                  className: 'col-sm-4',
                  templateOptions: {
                    type: 'date',
                    label: 'Date of Leaving:',
                  },
                  expressionProperties: {
                    // apply expressionProperty for disabled based on formState
                    'templateOptions.disabled': 'formState.disabled',
                  },
                }
              ]},
                  {
                    className: 'section-label',
                    template:
                    '<hr /><div><strong>Ptoject Based Roles:</strong></div>',
                  },



                  {
                    key: 'roles',
                    type: 'repeat',
                    templateOptions: {
                      addText: 'Add another project role',
                    },


                    fieldArray: {


                    fieldGroup: [
                      {
                        key: 'project',
                        type: 'select',
                        templateOptions: {
                          label: 'Project',
                         options: this.projectService.getAllProjectsSelect(),
                          valueProp: 'id',
                          labelProp: 'name',
                          required: true,

                      },
                      expressionProperties: {
                        // apply expressionProperty for disabled based on formState
                        'templateOptions.disabled': 'formState.disabled',
                      },
                    },
                      {
                    //    className: 'col-6',
                        type: 'input',
                        key: 'role',
                        templateOptions: {
                          label: 'Role',
                          required : true

                        },
                        expressionProperties: {
                          // apply expressionProperty for disabled based on formState
                          'templateOptions.disabled': 'formState.disabled',
                        },
                     }
                  ]
           },

          } ,



  ];

  toggleDisabled() {
    this.options.formState.disabled = !this.options.formState.disabled;
  }
  submit() {if (!this.options.formState.disabled){
      console.log(this.model)
      alert(JSON.stringify(this.model));}
  }

  onBack(){
    this.router.navigate(["/admin"]);
  }





  }
