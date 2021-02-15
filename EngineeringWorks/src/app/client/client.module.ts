import { HttpClientModule } from '@angular/common/http';
import { ClientRoutingModule } from './client-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientPlaceOrderComponent } from './client-place-order/client-place-order.component';
import { ClientViewOrderComponent } from './client-view-order/client-view-order.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';



@NgModule({
  declarations: [ClientPlaceOrderComponent, ClientViewOrderComponent, ClientDashboardComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HttpClientModule
  ]
})
export class ClientModule { }
