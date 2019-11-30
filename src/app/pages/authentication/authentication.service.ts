import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './model/user-model';
import { HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {

        const headers = {
            'Content-type': 'application/x-www-form-urlencoded'
          }
        
        const body = new HttpParams()
        .set('username', username)
        .set('password', password)
        .set('grant_type', 'password')
        .set('client_id', 'MobileApp_IOS')
        .set('client_secret', 'secret')

        
        return this.http.post<any>('http://demo.nepalla.com' + `/token`, body, {headers} )
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                console.log(user);
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    registerUser(register: User) {
      return this.http.post('http://demo.nepalla.com' + `/Register`, register);
    }
}
