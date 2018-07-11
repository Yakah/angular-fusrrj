import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Routing
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

// Thirdparty Components / Plugins - Optional
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


// Sample Blank Pages - Optional
import {LayoutModule} from './layout/layout.module';
import {FormsModule} from '@angular/forms';
import {BlankComponent} from './@pages/layouts/blank/blank.component';
import {
  AccordionModule, AlertModule, BsDropdownModule, ButtonsModule, CollapseModule,
  ModalModule, ProgressbarModule, TabsModule, TooltipModule, TypeaheadModule
} from 'ngx-bootstrap';
import {HomeComponent} from './home/home.component';
import {Ng2Webstorage} from 'ngx-webstorage';
import {NgxPermissionsModule} from 'ngx-permissions';
import { WidgetsModule } from './widgets/widgets.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// Hammer Config Overide
// https://github.com/angular/angular/issues/10541
export class AppHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    'pinch': { enable: false },
    'rotate': { enable: false }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'jobsasa-client'}),
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(AppRoutes),
    NgxPermissionsModule.forRoot(),
    FormsModule,
    LayoutModule,
    WidgetsModule,
    Ng2Webstorage,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: AppHammerConfig
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
