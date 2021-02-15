import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm! : FormGroup;
  user : User;
  userSubmitted: Boolean;

  constructor(private fb: FormBuilder, private userService : UserService,
    private alertify : AlertifyService,
    private router: Router) { }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      name: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(8)]],
      mobile: [null, [Validators.required, Validators.minLength(11)]],
      cnic: [null, [Validators.required, Validators.minLength(13)]],
      address: [null, Validators.required]

    }, {validator: this.passwordMatchingValidator});
  }
  passwordMatchingValidator(fg: FormGroup) {
    return (fg.get('password')!.value === fg.get('confirmPassword')!.value ? null : {'notmatched': true})
  }


// getter functions
get name(){
  return this.registrationForm.get('name')as FormControl;
}

get username(){
  return this.registrationForm.get('username')as FormControl;
}
get email(){
  return this.registrationForm.get('email')as FormControl;
}
get password(){
  return this.registrationForm.get('password')as FormControl;
}
get confirmPassword(){
  return this.registrationForm.get('confirmPassword')as FormControl;
}
get mobile(){
  return this.registrationForm.get('mobile')as FormControl;
}
get cnic(){
  return this.registrationForm.get('cnic')as FormControl;
}
get address(){
  return this.registrationForm.get('address')as FormControl;
}


  onSubmit(){
    console.log(this.registrationForm.value);
    this.userSubmitted= true;
    if(this.registrationForm.valid){
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted= false;
      this.alertify.success(' Congrats! You have become our Registered Client. Login to continue.. ')
      this.router.navigate(["/login"]);

    }
  else{
    this.alertify.error(' Error! Please provide the required fields ')

  }}

    userData() : User {
      return this.user = {
        name: this.name.value,
         username : this.username.value,
         password : this.password.value,
         email: this.email.value,
         mobile: this.mobile.value,
         cnic: this.cnic.value,
         address: this.address.value
    }

    }



}
