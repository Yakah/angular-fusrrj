import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'table-widget',
  templateUrl: './table-widget.component.html',
  styleUrls: ['./table-widget.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TableWidgetComponent implements OnInit {

  tdtable = "Today's jobs";
  incoming = "Incoming Jobs";
  num = "568";

  adjobs:{}[] = [
  { title: 'Telecommunication Engineer', company: 'Safaricom', location: 'Nairobi', nature: 'Full time' },
  { title: 'Sales Executive', company: 'Safaricom', location: 'Nairobi', nature: 'Full time' },
  { title: 'Sound Technician', company: 'Safaricom', location: 'Kisumu', nature: 'Full time' },
  { title: 'Plumber', company: 'Safaricom', location: 'Mombasa', nature: 'Full time' },
  { title: 'Nurse', company: 'Safaricom', location: 'Nakuru', nature: 'Full time' },

];
  constructor() { }

  ngOnInit() {
  }

}
