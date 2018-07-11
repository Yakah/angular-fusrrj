import { Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private api: ApiService) {
  }
  getUsers(params?: HttpParams): Observable<any> {
    const self = this;
    return self.api.apiGet('/users', params);
  }
}
