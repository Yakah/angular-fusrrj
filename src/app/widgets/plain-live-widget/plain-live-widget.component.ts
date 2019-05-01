import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'plain-live-widget',
  templateUrl: './plain-live-widget.component.html',
  styleUrls: ['./plain-live-widget.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class PlainLiveWidgetComponent implements OnInit {
  config;
  index = 0;
  position1='Senior Chef';
  position2 = 'Telecommunication Engineer';
  firm1 = 'Sarova Stanley';
  firm2 = 'Safaricom';
  constructor() { }

  ngOnInit() {
    this.config = {
      direction: 'vertical',
      autoplay: {
        delay: 4500,
      }
    }
  }

}
