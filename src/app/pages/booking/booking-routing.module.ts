import { AddBookingComponent } from './add-booking/add-booking.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListBookingComponent } from './list-booking/list-booking.component';

const routes: Routes = [
  { path: 'list-booking', component: ListBookingComponent },
  { path: 'add-booking', component: AddBookingComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BookingRoutingModule {}
