import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'image-widget-basic',
  templateUrl: './image-widget-basic.component.html',
  styleUrls: ['./image-widget-basic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageWidgetBasicComponent implements OnInit {
  flashheader = 'Whats Happening Now at a glance...';
  flashcontent = 'Strathmore Business School Scurity Drill Panic';
  constructor() { }

  ngOnInit() {
  }

}
