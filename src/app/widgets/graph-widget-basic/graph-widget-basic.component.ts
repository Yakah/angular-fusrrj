import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GraphWidgetService } from './graph-widget.service';
declare var pg:any;

@Component({
  selector: 'graph-widget-basic',
  templateUrl: './graph-widget-basic.component.html',
  styleUrls: ['./graph-widget-basic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GraphWidgetBasicComponent implements OnInit, OnDestroy{
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

  /*nvd3LineData = [];
  nvd3LineOptions;
  _emphasize = false;
  _chartWrapperClass = "col-xlg-8 col-lg-12"
  _chartHighlightsClass = "col-xlg-4 visible-xlg";
  service;
  COLOR_SUCCESS = pg.getColor('success')
  COLOR_DANGER = pg.getColor('danger')
  COLOR_PRIMARY = pg.getColor('primary')
  COLOR_COMPLETE = pg.getColor('complete')
  timeout;
*/

  constructor(private _service: GraphWidgetService) { }
  ngOnInit() {
    /*this.service = this._service.getChartSampleData().subscribe(d => {
      this.timeout = setTimeout(() => {
      this.nvd3LineData = d['nvd3'].line;
        this.nvd3LineOptions = {
          chart: {
            type: 'lineChart',
            color: [
              this.COLOR_SUCCESS,
              this.COLOR_DANGER,
              this.COLOR_PRIMARY,
              this.COLOR_COMPLETE,
            ],
            x: function (d) { return d[0]; },
            y: function (d) { return d[1]; },
            // duration: 500,
            clipEdge:true,
            useInteractiveGuideline: true,
            margin: {
              left: 30,
              bottom: 35
            },
            showLegend: false,
            xAxis: {
              tickFormat: (d) => {
                return d3.time.format('%a')(new Date(d));
              }
            },
            yAxis: {
              tickFormat: (d) => {
                return Math.round(d)
              }
            }
          }
        }
      },1000)
    })*/
  }
  /*
    ngAfterViewInit() {
      setTimeout(()=>{
        window.dispatchEvent(new Event('resize'));
      },3000)
    }
  */
  ngOnDestroy() {
/*    this.service.unsubscribe()
    clearTimeout(this.timeout)*/
  }
/*
  @Input()
  set Emphasize(value:boolean){
    this._emphasize = value;
  }

  @Input()
  set ChartWrapperClass(value:string){
    this._chartWrapperClass = value;
  }

  @Input()
  set ChartHighlightsClass(value:string){
    this._chartHighlightsClass = value;
  }
*/

}
