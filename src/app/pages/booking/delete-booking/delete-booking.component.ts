import { BookingServiceService } from './../booking-service.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-booking',
  templateUrl: './delete-booking.component.html',
  styleUrls: ['./delete-booking.component.css']
})
export class DeleteBookingComponent implements OnInit {
  title: String = "Delete Booking"
  id: number;
  firstName: string;
  event: EventEmitter<any> = new EventEmitter();

  constructor(private bsModalRef: BsModalRef, private bookingService: BookingServiceService) { }

  deleteBooking(id: number) {
    this.bookingService.deleteBooking(id).subscribe();
    this.event.emit('OK');
    this.bsModalRef.hide();
  }

  ngOnInit() {
  }

  onClose() {
    this.bsModalRef.hide();
  }

}
