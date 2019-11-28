import { DeleteBookingComponent } from './../delete-booking/delete-booking.component';
import { AddBookingComponent } from './../add-booking/add-booking.component';
import { BookingServiceService } from './../booking-service.service';
import { BookingModel } from './../bookingModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { EditBookingComponent } from '../edit-booking/edit-booking.component';

@Component({
  selector: 'app-list-booking',
  templateUrl: './list-booking.component.html',
  styleUrls: ['./list-booking.component.css']
})
export class ListBookingComponent implements OnInit {
  title = 'AngularCRUDExample';
  BookingList: BookingModel[] = [];
  bsModalRef: BsModalRef;

  constructor(
    private bsModalService: BsModalService,
    private bookingService: BookingServiceService,
    private router: Router) {
      this.getBooking();
   }

   getBooking(){
    this.bookingService.getBooking()
    .subscribe((data) => {
      Object.assign(this.BookingList, data);
    }, error => {
      console.log("Error while getting booking ", error);
    });
   }

   addBooking() {
    this.bsModalRef = this.bsModalService.show(AddBookingComponent);
    this.bsModalRef.content.event.subscribe(result => {
      console.log("OK", result);
      if (result == 'OK') {
        this.getBooking();
      }
    });
  }

  editBooking(id: number) {
    this.bookingService.updateBooking(id);
    this.bsModalRef = this.bsModalService.show(EditBookingComponent);
    this.bsModalRef.content.event.subscribe(result => {
      if (result == 'OK') {
        setTimeout(() => {
          this.getBooking();
        }, 500);
      }
    });
  }

  deleteBooking(id: number, firstName: string) {
    this.bsModalRef = this.bsModalService.show(DeleteBookingComponent);
    this.bsModalRef.content.id = id;
    this.bsModalRef.content.firstName = firstName;
    this.bsModalRef.content.event.subscribe(result => {
      console.log("deleted", result);
      if (result == 'OK') {
        setTimeout(() => {
          this.BookingList=[];
          this.getBooking();
        }, 500);
      }
    });
  }

  ngOnInit() {
  }

}
