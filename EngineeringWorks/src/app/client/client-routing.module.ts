import { ClientPlaceOrderComponent } from './client-place-order/client-place-order.component';
import { ClientViewOrderComponent } from './client-view-order/client-view-order.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ClientDashboardComponent },
      { path: "view-order", component: ClientViewOrderComponent },
      {path:"place-order", component: ClientPlaceOrderComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
