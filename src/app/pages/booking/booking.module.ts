import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingServiceService } from './booking-service.service';
import { BookingRoutingModule } from './booking-routing.module';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { ListBookingComponent } from './list-booking/list-booking.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { DeleteBookingComponent } from './delete-booking/delete-booking.component';

@NgModule({
  declarations: [
    ListBookingComponent,
    AddBookingComponent,
    EditBookingComponent,
    DeleteBookingComponent
  ],
  exports: [AddBookingComponent, DeleteBookingComponent, EditBookingComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    BookingServiceService
  ],
  entryComponents:[AddBookingComponent, EditBookingComponent, DeleteBookingComponent]
})
export class BookingModule { }
