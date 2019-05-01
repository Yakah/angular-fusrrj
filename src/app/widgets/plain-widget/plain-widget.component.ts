import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http, Response} from '@angular/http';

@Component({
  selector: 'plain-widget',
  templateUrl: './plain-widget.component.html',
  styleUrls: ['./plain-widget.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class PlainWidgetComponent implements OnInit {
  config;
  index = 0;
  
  prod1 = "SENSODYNE";
  prod2 = "BLUEBAND MAGERINE";
  desc1 = "For strong and healthy teeth";
  desc2 = "For strength and healthy child tagline";
  detail1 = "Pull Rss feed from their profile";
  detail2 = "Pull RSS feed from their profile";

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
