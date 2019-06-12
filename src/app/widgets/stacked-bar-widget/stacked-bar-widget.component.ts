import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
declare var pg: any;

@Component({
  selector: 'stacked-bar-widget',
  templateUrl: './stacked-bar-widget.component.html',
  styleUrls: ['./stacked-bar-widget.component.scss'],
  encapsulation:ViewEncapsulation.None
})

export class StackedBarWidgetComponent implements OnInit {
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

//chart option
  chartOptions;
  timeout;
  /*chartData = [{
      "key": "New Users",
      "values": [],
      },
      {
        "key": "Returning Users",
        "values": [],
    }]*/


  ngOnInit() {
    //Generate Random Data
    /*let data = [[],[]];

    var max = 90;
    var min = 80;

    for(var i=0; i < 40; i++) {
      let x = [i,Math.round(Math.random() * (max - min) + min)]
      data[0].push(x);
      x = [i,Math.round(Math.random() * (max - min) + min)]
      data[1].push(x)

    }
    this.chartData[0]["values"] = data[0]
    this.chartData[1]["values"] = data[1]*/
  }
/*
  ngAfterViewInit() {
    this.timeout = setTimeout(()=>{
      this.chartOptions = {
        chart: {
          type: 'multiBarChart',
          color: [
            pg.getColor('complete'),
            pg.getColor('master-light')
          ],
          x: function (d) { return d[0]; },
          y: function (d) { return d[1]; },
          multibar:{
            stacked:true
          },
          showControls:false,
          useInteractiveGuideline: false,
          margin: {
            top: 0,
            right:0,
            bottom:0,
            left:0
          },
          yDomain: [0,200],
          showLegend: false,
          showXAxis:false,
          showYAxis:false,
          interactive:false
        }
      }
    },2000);
  }
  ngOnDestroy() {
    clearTimeout(this.timeout)
  }
*/
}
