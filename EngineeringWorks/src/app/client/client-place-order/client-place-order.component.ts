import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-place-order',
  templateUrl: './client-place-order.component.html',
  styleUrls: ['./client-place-order.component.css']
})
export class ClientPlaceOrderComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onBack(){
    this.router.navigate(["/client"]);
  }
}
