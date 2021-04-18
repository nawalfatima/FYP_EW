import { HttpClientModule } from '@angular/common/http';
import { ClientRoutingModule } from './client-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientPlaceOrderComponent } from './client-place-order/client-place-order.component';
import { ClientViewOrderComponent } from './client-view-order/client-view-order.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientListComponent } from './client-list/client-list.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';



@NgModule({
  declarations: [ClientPlaceOrderComponent, ClientViewOrderComponent, ClientDashboardComponent, ClientDetailsComponent, ClientListComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HttpClientModule,
    PaginationModule.forRoot(),

  ]
})
export class ClientModule { }
