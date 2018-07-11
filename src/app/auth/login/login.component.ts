import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {ApiService} from '../../jsasa-shared/services/api.service';
import {LocalStorageService} from 'ngx-webstorage';
import {AuthService} from '../../jsasa-shared/services/auth.service';
import {ToastrService} from 'ngx-toastr';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  loginUser: LoginUserDataInterface;
  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected meta: Meta,
    protected title: Title,
    protected api: ApiService,
    protected toastr: ToastrService,
    protected storage: LocalStorageService,
    public auth: AuthService
  ) {
    this.loginUser = {
      remember_me: false
    };
  }
  ngOnInit() {
    const self = this;
    this.title.setTitle('Jobsasa: Login');
    this.meta.addTag({name: 'description', content: 'Login to access all the rich community features of Jobsasa'});
    self.auth.loggedIn$.subscribe(next => {
      console.log(`Login Status has changed. Now it is ${next}`);
    }, err => {
      console.log(`Error while changing login status: ${err}`);
    });
    self.auth.apiToken$.subscribe(next => {
      console.log(`Api token has changed. Now it is ${next}`);
    }, err => {
      console.log(`Error while changing apiToken: ${err}`);
    });
    self.auth.currentUser$.subscribe(next => {
      console.log(`Current User has changed. Now it is`);
      console.warn(next);
    }, err => {
      console.log(`Error while changing currentUser: ${err}`);
    });
  }
  onLoginSubmit() {
    const self = this;
    console.log(self.loginUser.remember_me);
    this.api.apiPost('/login', this.loginUser).subscribe(res => {
      if (res.success) {
        console.log(res);
        self.loginForm.reset();
        self.auth.setLocalSession(res);
        self.toastr.success(res.message, 'Success');
        self.router.navigate(['/home']);
      } else {
        self.toastr.error(res.message, 'Error');
      }
    }, err => {
      self.toastr.error('There was an unknown server error while logging in', 'Error');
    });
  }
  // On Forgot password link click
  onForgotPassword() {
    this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
  }
  // On registration link click
  onRegister() {
    this.router.navigate(['signup'], { relativeTo: this.route.parent });
  }

}
export interface LoginUserDataInterface {
  username?: string;
  password?: string;
  remember_me?: boolean;
}
