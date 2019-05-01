import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'image-widget',
  templateUrl: './image-widget.component.html',
  styleUrls: ['./image-widget.component.scss'],
  encapsulation:ViewEncapsulation.None

})
export class ImageWidgetComponent implements OnInit {
  jobs = '2,222';
  people = '4,534';
  companies = '7,887';
  tenders = '2,020';
  constructor() { }

  ngOnInit() {
  }


}
