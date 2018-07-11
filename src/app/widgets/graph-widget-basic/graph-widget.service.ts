import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import {HttpClient} from "@angular/common/http";


@Injectable()
export class GraphWidgetService {

  constructor(private http: HttpClient) { }

  // Get all data from the API
  getChartSampleData() {
    return this.http.get('assets/data/charts.json');
  }
}
