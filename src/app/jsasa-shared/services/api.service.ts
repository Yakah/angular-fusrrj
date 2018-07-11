import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {LocalStorageService} from 'ngx-webstorage';
import {environment} from '../../../environments/environment';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private headers: HttpHeaders;
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient, private storage: LocalStorageService) {
    const self = this;
    let token: string = null;
    if (isPlatformBrowser(this.platformId)) {
        token = storage.retrieve('apiToken');
    }
    if (isPlatformServer(this.platformId)) {
        token = null;
    }
    const headersObject = {
      Authorization : `Bearer ${token}`,
      Accept: 'application/json',
    };
    self.headers = new HttpHeaders(headersObject);
  }
  public apiGet(uri, params?: HttpParams, additionalHeaders?: HttpHeaders): Observable<any> {
    const self = this;
    const url = `${environment.apiHost}${uri}`;
    return self.http.get(url, {
        headers: self.headers,
        params: params || {}
    });
  }
  public apiPost(uri, body: object, params?: HttpParams, additionalHeaders?: HttpHeaders): Observable<any> {
    const self = this;
    const url = `${environment.apiHost}${uri}`;
    return self.http.post(url, body, {
        headers: self.headers,
        params: params || {}
    });
  }
  public apiPut(uri, body: object, params?: HttpParams, additionalHeaders?: HttpHeaders): Observable<any> {
      const self = this;
      const url = `${environment.apiHost}${uri}`;
      return self.http.put(url, body, {
          headers: self.headers,
          params: params || {}
      });
  }
  public apiDelete(uri, params?: HttpParams, additionalHeaders?: HttpHeaders): Observable<any> {
      const self = this;
      const url = `${environment.apiHost}${uri}`;
      return self.http.delete(url, {
          headers: self.headers,
          params: params || {}
      });
  }
}
