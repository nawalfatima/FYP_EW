import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-view-order',
  templateUrl: './client-view-order.component.html',
  styleUrls: ['./client-view-order.component.css']
})
export class ClientViewOrderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onBack(){
    this.router.navigate(["/client"]);
  }
}
