import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {FormsModule} from '@angular/forms';
import { EqualValidatorDirective } from './signup/equal-validator.directive';
import {MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';
import {ToastrModule} from 'ngx-toastr';
import {Ng2Webstorage} from 'ngx-webstorage';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    ToastrModule.forRoot({
          timeOut: 10000,
          positionClass: 'toast-top-right',
          preventDuplicates: true,
      }),
    Ng2Webstorage
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    EqualValidatorDirective,
  ]
})
export class AuthModule { }
