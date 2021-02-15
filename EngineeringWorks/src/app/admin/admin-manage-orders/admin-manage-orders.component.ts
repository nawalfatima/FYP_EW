import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-manage-orders',
  templateUrl: './admin-manage-orders.component.html',
  styleUrls: ['./admin-manage-orders.component.css']
})
export class AdminManageOrdersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onBack(){
    this.router.navigate(["/admin"]);
  }
}
