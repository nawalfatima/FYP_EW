import { StaffEditableInfo } from './../../model/StaffEditableInfo';
import { KeyValue } from './../../model/KeyValue';
import { IKeyValue } from './../../model/IKeyValue';
import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { SalaryType } from 'src/app/Enums/enums';;
import { IStaffEditableInfo } from 'src/app/model/IStaff';

@Component({
  selector: 'app-admin-manage-employees',
  templateUrl: './admin-manage-employees.component.html',
//  styleUrls: ['./admin-manage-employees.component.css']
})
export class AdminManageEmployeesComponent implements OnInit {
  form = new FormGroup({});
  model: IStaffEditableInfo = new StaffEditableInfo ();
  options: FormlyFormOptions = {};

  constructor(private router : Router,
    private projectService : ProjectService) {

     }




  ngOnInit(): void {



      }








  fields: FormlyFieldConfig[] = [


    {
      key: 'fname',
      type: 'input',
      templateOptions: {
        label: 'First Name',
        required : true

      },
    },
    {
      key: 'lname',
      type: 'input',
      templateOptions: {
        label: 'Last Name',
        required : true

      }},
      {
        key: 'address',
        type: 'input',
        templateOptions: {
          label: 'Address',
          required : true


        },
      },
      {
        key: 'Email',
        type: 'input',
        templateOptions: {
          label: 'Last Name',
          type: 'email' ,
          placeholder : 'enter email',
          required : true
        }},
        {
          key: 'phNo',
          type: 'input',
          templateOptions: {
            label: 'Phone Number',
            required : true

          }},
         {
            key: 'designation',
            type: 'input',
            templateOptions: {
              label: 'Designation',
              required : true

            }},
            {
              key: 'salaryAmt',
              type: 'input',
              templateOptions: {
                label: 'Salary Amount (PKR)',
                required : true

              }},
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

              },
                {
                  type: 'input',
                  key: 'leavingDate',
                  className: 'col-sm-4',
                  templateOptions: {
                    type: 'date',
                    label: 'Date of Leaving:',
                  },
                }
              ]},
                  {
                    className: 'section-label',
                    template: '<hr /><div><strong>Ptoject Based Roles:</strong></div>',
                  },

                  {

                      key: 'Projects',
                      type: 'repeat',
                      templateOptions: {
                        addText: 'Add another project',
                      },
                      fieldArray: {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                      {
                        className: 'col-6',
                        key: 'project1',
                        type: 'select',
                        templateOptions: {
                          label: 'Project 1',

                          options: this.projectService.getAllProjectsSelect()

                          ,
                          valueProp: 'id',
                          labelProp: 'name',
                          required: true,





                      },},
                      {
                        className: 'col-6',
                        type: 'input',
                        key: 'Role1',
                        templateOptions: {
                          label: 'Role 1',
                        },
                      },

                    //   {
                    //     className: 'col-3',
                    //     type: 'input',
                    //     key: 'zip',
                    //     templateOptions: {
                    //       type: 'number',
                    //       label: 'Zip',
                    //       max: 99999,
                    //       min: 0,
                    //       pattern: '\\d{5}',
                    //     },
                    // }
                      ,]
                     }
                    } ,


    {
      key: 'text',
      type: 'checkbox',
      templateOptions: {
        label: 'I agree',
      },
    }
  ];


  submit() {
    if (this.form.valid) {
      console.log(this.model)
      alert(JSON.stringify(this.model));
    }
  }

  onBack(){
    this.router.navigate(["/admin"]);
  }





  }
