import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-manage-clients',
  templateUrl: './admin-manage-clients.component.html',
  styleUrls: ['./admin-manage-clients.component.css']
})
export class AdminManageClientsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onBack(){
    this.router.navigate(["/admin"]);
  }
}
