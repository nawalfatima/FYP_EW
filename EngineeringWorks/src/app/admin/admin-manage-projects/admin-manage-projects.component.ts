import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-manage-projects',
  templateUrl: './admin-manage-projects.component.html',
  styleUrls: ['./admin-manage-projects.component.css']
})
export class AdminManageProjectsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onBack(){
    this.router.navigate(["/admin"]);
  }

}
