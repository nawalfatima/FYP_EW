import { AlertifyService } from 'src/app/services/alertify.service';
import { ProjectService } from 'src/app/services/project.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Project } from 'src/app/model/Project';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

// @ViewChild('Form') addProjectForm : NgForm;
@ViewChild('formTabs') formTabs : TabsetComponent;
addProjectForm!: FormGroup;
project = new Project();


  constructor( private fb: FormBuilder,
                private router: Router ,
                private projectService: ProjectService,
                private alertify : AlertifyService) { }

  ngOnInit(): void {
this.createAddProjectForm();
  }


  createAddProjectForm() {
    this.addProjectForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      orderId: [null, [Validators.required]],
      details: [null, [Validators.required]],
      status: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      finishDate: [null, [Validators.required]],
      show: [null, [Validators.required]]
    });}

    // getter functions
    get name(){
      return this.addProjectForm.get('name') as FormControl;
    }

    get orderId(){
      return this.addProjectForm.get('orderId')as FormControl;
    }
    get details(){
      return this.addProjectForm.get('details')as FormControl;
    }
    get status(){
      return this.addProjectForm.get('status')as FormControl;
    }
    get startDate(){
      return this.addProjectForm.get('startDate')as FormControl;
    }
    get finishDate(){
      return this.addProjectForm.get('finishDate')as FormControl;
    }
    get show(){
      return this.addProjectForm.get('show')as FormControl;
    }



    mapProject(): void {
      this.project.name = this.name.value;
      this.project.orderId = this.orderId.value;
      this.project.status = this.status.value;
      this.project.detail = this.details.value;
      this.project.startDate = this.startDate.value;
      this.project.finishDate = this.finishDate.value;
      this.project.show = this.show.value;

    }

 formValid(){
      if (this.addProjectForm.invalid) {
       return false;
      }
      return true;
    }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
  onSubmit(){
    if(this.formValid()){
      this.mapProject();
      this.projectService.addProject(this.project);
      this.alertify.success('Your project successfully');
      console.log(this.addProjectForm);

    }
    else {
      this.alertify.error('Please review the form and provide all valid entries');
    }
  }
}
