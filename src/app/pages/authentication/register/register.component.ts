import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, AfterViewInit, OnDestroy {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      // firstName: new FormControl('',[]),
      // lastName: new FormControl('',[]),
      password: new FormControl('',[]),
      email: new FormControl('',[])
    });
  }

  onSubmit() {
    this.authenticationService.registerUser(this.registerForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['dashboard']);
      });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

}
