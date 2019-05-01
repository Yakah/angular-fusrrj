import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'table-basic-widget',
  templateUrl: './table-basic-widget.component.html',
  styleUrls: ['./table-basic-widget.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TableBasicWidgetComponent implements OnInit {

  tdtable = "Today's jobs";
  incoming = "Incoming Jobs";
  num = "568";

  jobs:{}[] = [
  { jtitle: 'Telecommunication Engineer', jcompany: 'Safaricom', jlocation: 'Nairobi', jnature: 'Full time' },
  { jtitle: 'Sales Executive', jcompany: 'Safaricom', jlocation: 'Nairobi', jnature: 'Full time' },
  { jtitle: 'Sound Technician', jcompany: 'Safaricom', jlocation: 'Kisumu', jnature: 'Full time' },
  { jtitle: 'Plumber', jcompany: 'Safaricom', jlocation: 'Mombasa', jnature: 'Full time' },
  { jtitle: 'Nurse', jcompany: 'Safaricom', jlocation: 'Nakuru', jnature: 'Full time' }
];

  constructor() { }

  ngOnInit() {
  }

}
