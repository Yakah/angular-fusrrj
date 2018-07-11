import { WidgetsModule } from './../widgets/widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { pgCardModule } from '../@pages/components/card/card.module';
import { pgTabsModule } from '../@pages/components/tabs/tabs.module';
import { NvD3Module } from 'ngx-nvd3';
import { NgxEchartsModule } from 'ngx-echarts';
import { pgSwitchModule } from '../@pages/components/switch/switch.module';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    WidgetsModule
  ],
  declarations: [
    AdminDashboardComponent
  ],
  providers: []
  })
export class AdminModule {}
