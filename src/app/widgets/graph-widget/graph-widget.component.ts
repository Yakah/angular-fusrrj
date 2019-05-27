import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';

declare var pg: any;
declare let d3: any;

@Component({
  selector: 'graph-widget',
  templateUrl: './graph-widget.component.html',
  styleUrls: ['./graph-widget.component.scss'],
  encapsulation:ViewEncapsulation.None
})

export class GraphWidgetComponent implements OnInit {

  //Tables datasources
  vacancies:{}[] = [
  { title: 'Telecommunication Engineer', company: 'Safaricom', button: 'View' },
  { title: 'Sales Executive', company: 'Safaricom', button: 'View' },
  { title: 'Sound Technician', company: 'Safaricom', button: 'View' },
  { title: 'Plumber', company: 'Safaricom', button: 'View' },
  { title: 'Nurse', company: 'Safaricom', button: 'View' }
  ];

  //Companies
  companies:{}[] = [
  { field: 'Telecommunication', brand: 'Safaricom', location: 'Nairobi' },
  { field: 'Telecommunication', brand: 'Airtel', location: 'Nairobi' },
  { field: 'Telecommunication', brand: 'Telkom', location: 'Kisumu' },
  { field: 'Construction', brand: 'Bamburi', location: 'Mombasa' },
  { field: 'Energy', brand: 'Kengen', location: 'Nakuru' },
  ];

  //PEOPLE
  people:{}[] = [
  { image: 'src1', name: 'Jim Gordon', profession: 'Detective' },
  { image: 'src2', name: 'Penguin Cobalpot', profession: 'Mafia' },
  { image: 'src3', name: 'Alfred Penworth', profession: 'Buttler' },
  { image: 'src4', name: 'Luke Skywaler', profession: 'Jedi' },
  { image: 'src5', name: 'Sheev Palpatine', profession: 'Emperor' },
  ];


  constructor() {

  }

  ngOnInit() {
  }

}
