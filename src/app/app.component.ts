import { Component, OnInit } from '@angular/core';
import { AuthService } from './jsasa-shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Jobsasa';
  loggedIn: boolean;
  currentUser: any;
  constructor(protected auth: AuthService) {
  }
  ngOnInit() {
    this.observeVariables();
  }
  private observeVariables() {
    const self = this;
    // loggedIn
    self.auth.loggedIn$.subscribe( next => {
      self.loggedIn = next;
    }, error => {
      console.log('Error while watching login status');
      self.loggedIn = false;
    });
    // Current User
    self.auth.currentUser$.subscribe( next => {
      self.currentUser = next;
    }, error => {
      self.currentUser = {};
      console.log('Error while watching the current User');
    });
  }
}
