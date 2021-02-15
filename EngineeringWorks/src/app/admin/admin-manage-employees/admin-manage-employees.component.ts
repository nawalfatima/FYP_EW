import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-manage-employees',
  templateUrl: './admin-manage-employees.component.html',
  styleUrls: ['./admin-manage-employees.component.css']
})
export class AdminManageEmployeesComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  onBack(){
    this.router.navigate(["/admin"]);
  }
}
