import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

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
              private userService: UserService
  ) { }

  ngOnInit(): void {

}
onLogin(loginForm: NgForm) {
  console.log(loginForm.value);



  const token = this.authService.authUser(loginForm.value);
  if (token) {
    localStorage.setItem('token', token.username);
    console.log(token.username);


    this.alertyfy.success('Login successful');

    if (token.username === "admin")
{
  this.router.navigate(['/admin']);
}
else
{
  this.router.navigate(['/client']);
}


  }
  else{
    this.alertyfy.error('User name or password is wrong')

  }
}}


