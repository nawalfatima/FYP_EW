import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedInUser: string | null = '';

  constructor(private alertyfy : AlertifyService,
              private router : Router) { }

  ngOnInit(): void {
  }
  loggedIn(){
    this.loggedInUser = localStorage.getItem('userName');
    return  this.loggedInUser;
  }
  onLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userName');

    this.alertyfy.success("you are logged out");
    this.router.navigate(["/"]);

  }
}
