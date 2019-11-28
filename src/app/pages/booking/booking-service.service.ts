import { BookingModel } from './bookingModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {
  private baseUrl= 'http://localhost:3000/';
  UrlBooking = this.baseUrl + 'api/account';
  postIdData: any;

  constructor(private http: HttpClient) { }

  // get all the Bookings
  getBooking(): Observable<BookingModel[]> {
    return this.http.get<BookingModel[]>(this.UrlBooking);
  }

  // add new Booking
  addBooking(booking: BookingModel) {
    return this.http.post(this.UrlBooking, booking);
  }

  // edit Booking
  updateBooking(booking: number){
    return this.http.put(this.UrlBooking, booking)
  }

  // get post by id
  getBookingbyId(BookingId: number){
    return this.http.get(this.UrlBooking + BookingId)
  }

  deleteBooking(id: number){
    return this.http.delete(this.UrlBooking +"/" +id)
}

}
