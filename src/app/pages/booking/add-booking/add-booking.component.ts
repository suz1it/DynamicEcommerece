import { BookingServiceService } from './../booking-service.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {
  title: String= 'Add New Booking';
  addForm: FormGroup;
  event: EventEmitter<any>=new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private bookingService: BookingServiceService,
    private bsModalRef: BsModalRef) {

      this.addForm = this.formBuilder.group({
        firstName: new FormControl('',[]),
        lastName: new FormControl('',[]),
        address: new FormControl('',[]),
        from: new FormControl('',[]),
        to: new FormControl('',[]),
        phoneNo: new FormControl('',[]),
        emailId: new FormControl('',[]),
        UserStatus: new FormControl('',[])
      });
    }

    ngOnInit() {

    }

    onSubmit() {
        this.bookingService.addBooking(this.addForm.value).subscribe(data=>{
          if(data!=null){
            this.event.emit('OK');
            this.bsModalRef.hide();
          }
        });
        this.onClose();
    }

    onClose(){
      this.bsModalRef.hide();
    }

}
