import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-manage-equipment',
  templateUrl: './admin-manage-equipment.component.html',
  styleUrls: ['./admin-manage-equipment.component.css']
})
export class AdminManageEquipmentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onBack(){
    this.router.navigate(["/admin"]);
  }
}
