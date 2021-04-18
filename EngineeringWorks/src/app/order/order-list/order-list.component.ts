import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  contentArray = new Array(90).fill('');
  returnedArray: string[];

  constructor() { }

  ngOnInit(): void {
    this.contentArray = this.contentArray.map((v: string, i: number) => `order line ${i + 1}`);
    this.returnedArray = this.contentArray.slice(0, 10);
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
  }


}
