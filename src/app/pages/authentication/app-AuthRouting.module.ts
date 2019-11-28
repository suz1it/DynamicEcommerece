import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        "path": "login",
        "component": LoginComponent
    },
    {
      "path": "register",
      "component": RegisterComponent
    },
    {
        "path": "lockscreen",
        "component": LockscreenComponent
    },
    {
        "path": "forgot_password",
        "component": ForgotPasswordComponent
    },
    {
        "path": "**",
        "redirectTo": "error_404",
        "pathMatch": "full"
    },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [
    RouterModule,
  ]
})

export class AuthenticationRoutingModule { }
