import { Injectable } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {BehaviorSubject, Observable} from 'rxjs/index';
import { CurrentUserInterface } from '../interfaces/current-user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loggedIn: BehaviorSubject<boolean>;
  private _apiToken: BehaviorSubject<string>;
  private _currentUser: BehaviorSubject<CurrentUserInterface>;
  public loggedIn$: Observable<boolean>;
  public apiToken$: Observable<string>;
  public currentUser$: Observable<CurrentUserInterface>;
  constructor(
      public storage: LocalStorageService
  ) {
    const self = this;
    this._loggedIn  = new BehaviorSubject(this.storage.retrieve('loggedin') || false);
    this._apiToken  = new BehaviorSubject(this.storage.retrieve('apiToken'));
    this._currentUser  = new BehaviorSubject(this.storage.retrieve('currentUser') || false);
    this.loggedIn$ = this._loggedIn.asObservable();
    this.apiToken$ = this._apiToken.asObservable();
    this.currentUser$ = this._currentUser.asObservable();
    this.monitorLoginStatus();
    this.monitorApiToken();
    this.monitorCurrentUser();
  }
  private monitorLoginStatus() {
    const self = this;
    this.storage.observe('loggedin').subscribe(next => {
        self._loggedIn.next(self.storage.retrieve('loggedin'));
    });
  }
  private monitorApiToken() {
    const self = this;
    self.storage.observe('apiToken').subscribe( next => {
      self._apiToken.next(self.storage.retrieve('apiToken'));
    });
  }
  private monitorCurrentUser() {
    const self = this;
    self.storage.observe('currentUser').subscribe( next => {
      self._currentUser.next(self.storage.retrieve('currentUser'));
    }, error => {
      self._currentUser.next({});
    });
  }
  public logout() {
      console.log('logging out...');
      this.clearLocalSession();
  }
  private clearLocalSession() {
      const self = this;
      self.storage.clear('apiToken');
      self.storage.clear('currentUser');
      self.storage.clear('loggedin');
  }
  public setLocalSession(res) {
      const self = this;
      self.storage.store('apiToken', res.data.token);
      self.storage.store('currentUser', res.data.user);
      self.storage.store('loggedin', true);
  }
}
