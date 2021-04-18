import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

// @ViewChild('Form') addProjectForm : NgForm;
@ViewChild('formTabs') formTabs : TabsetComponent;

addProjectForm!: FormGroup;


  constructor( private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
this.createAddProjectForm();
  }


  createAddProjectForm() {
    this.addProjectForm = this.fb.group({
      name: [null, Validators.required, Validators.minLength(5)],
      orderId: [null, [Validators.required, Validators.email]],
      details: [null, [Validators.required]],
      status: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      finishDate: [null, [Validators.required]],
    });}

    // getter functions
    get name(){
      return this.addProjectForm.get('name')as FormControl;
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

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
  onSubmit(){
    console.log("congrats, form submitted");
    console.log(this.addProjectForm);
  }
}
