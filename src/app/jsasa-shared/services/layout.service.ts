import {ChangeDetectorRef, Injectable} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
    public mobileQuery: MediaQueryList;
    private _mobileQueryListener: () => void;
    constructor() {
    }
}
