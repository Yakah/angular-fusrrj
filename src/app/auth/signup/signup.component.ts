import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../jsasa-shared/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('signupForm') signupForm: NgForm;
  userData: UserDataInterface;
  constructor(protected api: ApiService, protected toastr: ToastrService, protected router: Router) {
    this.userData = {};
  }
  ngOnInit() {
  }
  /**When the form is submitted */
  onSignupSubmit() {
    const self = this;
    this.api.apiPost('/signup', self.userData).subscribe((response) => {
      if (response.success) {
        self.signupForm.reset();
        self.toastr.success(response.message, 'Success');
        self.router.navigate(['/auth/login']);
      } else {
        console.log(response.data);
        self.toastr.error(response.message, 'Error');
      }
    }, err => {
      console.log(err.message);
      self.toastr.error('Server error while signing up', 'Error');
    });
  }
}

export interface UserDataInterface {
  username?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  password_confirmation?: string;
  email?: string;
  phone?: string;
}
