import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[app-header]',
  templateUrl: './app-header.component.html',
})
export class AppHeader implements AfterViewInit {

  constructor(
    private router: Router
  ) { }

  ngAfterViewInit()  {
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.router.navigate(['/']);
      console.log('This logout method is called !',localStorage);
  }

}
