import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class MapWidgetService {

  constructor(private http: HttpClient) { }

  getMapData() {
    return this.http.get('assets/data/map.json');
  }
}
