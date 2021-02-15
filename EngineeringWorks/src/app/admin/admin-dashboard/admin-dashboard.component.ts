import { ExtUser } from './../../model/ext-user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  private admins : ExtUser[] = [];
  constructor(private userService : UserService,) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((admin: ExtUser[])=>{

      this.admins = admin;

      console.log(this.admins)

    });

  }

}
