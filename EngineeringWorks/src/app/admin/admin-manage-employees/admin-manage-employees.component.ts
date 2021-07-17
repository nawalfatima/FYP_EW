import { IStaffEditableInfo } from 'src/app/model/IStaff';
import { StaffEditableInfo } from './../../model/StaffEditableInfo';
import { StaffServiceService } from 'src/app/admin/admin-services/StaffService.service';
import { StaffInfo } from './../../model/StaffInfo';
import {  IStaffInfo} from './../../model/IStaff';
import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { SalaryType } from 'src/app/Enums/enums';;

@Component({
  selector: 'app-admin-manage-employees',
  templateUrl: './admin-manage-employees.component.html',
//  styleUrls: ['./admin-manage-employees.component.css']
})
export class AdminManageEmployeesComponent implements OnInit {
  staffId: number;
  staffData : IStaffInfo;
  editRes : any;
  form = new FormGroup({});
  model : IStaffInfo = new StaffInfo();
  options: FormlyFormOptions = {
    formState: {
      disabled: true,
    },
  };

  constructor(private router : Router,
    private route : ActivatedRoute,
    private projectService : ProjectService,
    private staffService: StaffServiceService
    ) {

     }

  ngOnInit(): void {
    this.staffId = +this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params) => {
        this.staffId = +params['id'];
        this.staffService.getStaffById(this.staffId).subscribe(
          (data: IStaffInfo) => {

            this.model = data;
            this.model.roles = data.roles;
            console.log(data);
            console.log(this.model.roles)


          }
        );
      }
    )
      }

  fields: FormlyFieldConfig[] = [

    {
      key: 'staffID',
      type: 'input',
      templateOptions: {

        label: 'Staff Id',
        readonly: true
      },
    },
    {
      key: 'staffFname',
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
      key: 'staffLname',
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
          label: 'Email',
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
              key: 'staffStatus',
              type: 'input',
              templateOptions: {

                label: 'Staff Status',
                required : true

              },
              expressionProperties: {
                // apply expressionProperty for disabled based on formState
                'templateOptions.disabled': 'formState.disabled',
              }
            },
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

             { key:'salaryType',
              type: 'select',
              templateOptions: {
                label: 'Salary Type',
                options: [
                  {label: 'Daily Wage', value: "dailyWage"},
                  {label: 'Monthly', value: "monthly"},
                  {label: 'Project Based',value: 'projectBased'}
                ],
                required: true,

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
                  type: 'datetime-local',
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
                    type: 'datetime-local',
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
                        key: 'projID',
                        type: 'select',
                        templateOptions: {
                          label: 'Project',
                         // placeholder: '',
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
                        key: 'role1',
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
      console.log(this.model);
     let staff : IStaffEditableInfo = this.toEditableConverter(this.model);

      this.staffService.updateStaff(this.model.staffID, staff);



  }}

  onBack(){
    this.router.navigate(["/admin"]);
  }
toEditableConverter(model : IStaffInfo){
  let staff : IStaffEditableInfo = new StaffEditableInfo;
      staff.staffFname= model.staffFname;
      staff.staffLname= model.staffLname;
      staff.staffEmail = model.staffEmail;
      staff.staffAddress = model.staffAddress;
      staff.staffPhNo = model.staffPhNo;
      staff.salaryAmt = model.salaryAmt;
      staff.salaryType= model.salaryType;
      staff.staffStatus = model.staffStatus;
      staff.designation = model.designation;
      staff.joiningDate = model.joiningDate;
      staff.leavingDate = model.leavingDate;
      staff.roles = model.roles;
      return staff;

}


  }
