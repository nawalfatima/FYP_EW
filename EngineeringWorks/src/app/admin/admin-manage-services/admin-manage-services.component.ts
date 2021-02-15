import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-manage-services',
  templateUrl: './admin-manage-services.component.html',
  styleUrls: ['./admin-manage-services.component.css']
})
export class AdminManageServicesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onBack(){
    this.router.navigate(["/admin"]);
  }

}
