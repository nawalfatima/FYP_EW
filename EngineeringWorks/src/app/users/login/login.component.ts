import { IloginRes } from './../../model/IloginReq';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';
import { IloginReq } from 'src/app/model/IloginReq';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
              private alertyfy: AlertifyService,
              private router: Router,
  ) { }

  ngOnInit(): void {

}
onLogin(loginForm: NgForm) {
  //console.log(loginForm.value);

  const myuser : IloginReq = {username : loginForm.value['username'],password : loginForm.value['password']} ;
  // myuser.username = user.username;
  // myuser.password= user.password;
  if (loginForm.value['role'] === "1"){
    return this.authService.loginAdmin( myuser)
     .subscribe((res : IloginRes)=> {
      console.log(res);
      const user = res;
      localStorage.setItem('token', user.token);
      localStorage.setItem('userName', user.username);

      this.alertyfy.success('Login successful');
      this.router.navigate(['/admin']);
    }
  //   , error =>{
  //     console.log(error);
  //  //   this.alertyfy.error(error.error);
  //   }
    );
   }
   else{
    return this.authService.loginClient(myuser)
     .subscribe((res : IloginRes)=> {
       console.log(res);
       const user = res;
       localStorage.setItem('token', user.token);
       this.alertyfy.success('Login successful');
       this.router.navigate(['/client']);
}, error =>{
  console.log(error);
  this.alertyfy.error(error.error);}
);
     }



}}


