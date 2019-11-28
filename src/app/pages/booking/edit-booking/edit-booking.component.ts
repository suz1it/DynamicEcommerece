import { BsModalRef } from 'ngx-bootstrap/modal';
import { BookingServiceService } from './../booking-service.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {
  editForm: FormGroup;
  id: number;
  postData: any;
  event: EventEmitter<any> = new EventEmitter();
  constructor(
    private builder: FormBuilder, 
    private bookingService: BookingServiceService, 
    private bsModalRef: BsModalRef
  ) {
    this.editForm = this.builder.group({
      firstName: new FormControl('',[]),
      lastName: new FormControl('',[]),
      address: new FormControl('',[]),
      from: new FormControl('',[]),
      to: new FormControl('',[]),
      phoneNo: new FormControl('',[]),
      emailId: new FormControl('',[]),
      UserStatus: new FormControl('',[])
   });

   this.bookingService.postIdData.subscribe(data => {
    this.id = data;
    if (this.id !== undefined) {
      
      this.bookingService.getBookingbyId(this.id).subscribe(data => {
        this.postData = data;
        
        if (this.editForm!=null && this.postData!=null) {
          this.editForm.controls['firstName'].setValue(this.postData.firstName);
          this.editForm.controls['lastName'].setValue(this.postData.lastName);
          this.editForm.controls['address'].setValue(this.postData.address);
          this.editForm.controls['from'].setValue(this.postData.from);
          this.editForm.controls['to'].setValue(this.postData.to);
          this.editForm.controls['phoneNo'].setValue(this.postData.phoneNo);
          this.editForm.controls['emailId'].setValue(this.postData.emailId);
        }
      }, error => { console.log("Error while gettig booking details") });
    }
  });
  }

  
  onSubmit() {
    this.bookingService.updateBooking(this.editForm.value).subscribe(data => {      
        this.event.emit('OK');
        this.bsModalRef.hide();      
    });
  }

  ngOnInit() {
  }

  onClose() {
    this.bsModalRef.hide();
  }

}
