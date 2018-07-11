import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapWidgetComponent } from './map-widget/map-widget.component';
import { ImageWidgetBasicComponent } from './image-widget-basic/image-widget-basic.component';
import { GraphWidgetBasicComponent } from './graph-widget-basic/graph-widget-basic.component';
import { GraphLiveWidgetComponent } from './graph-live-widget/graph-live-widget.component';
import { BarTileWidgetComponent } from './bar-tile-widget/bar-tile-widget.component';
import { GraphOptionsWidgetComponent } from './graph-options-widget/graph-options-widget.component';
import { GraphTileFlatWidgetComponent } from './graph-tile-flat-widget/graph-tile-flat-widget.component';
import { GraphTileWidgetComponent } from './graph-tile-widget/graph-tile-widget.component';
import { GraphWidgetComponent } from './graph-widget/graph-widget.component';
import { PlainWidgetComponent } from './plain-widget/plain-widget.component';
import { QuickStatsWidgetComponent } from './quick-stats-widget/quick-stats-widget.component';
import { RealtimeWidgetComponent } from './realtime-widget/realtime-widget.component';
import { SocialPostTileWidgetComponent } from './social-post-tile-widget/social-post-tile-widget.component';
import { TodoListWidgetComponent } from './todo-list-widget/todo-list-widget.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { ImageWidgetComponent } from './image-widget/image-widget.component';
import { PlainLiveWidgetComponent } from './plain-live-widget/plain-live-widget.component';
import { ProgressTileFlatWidgetComponent } from './progress-tile-flat-widget/progress-tile-flat-widget.component';
import { ProjectProgressWidgetComponent } from './project-progress-widget/project-progress-widget.component';
import { SocialImageTileWidgetComponent } from './social-image-tile-widget/social-image-tile-widget.component';
import { StackedBarWidgetComponent } from './stacked-bar-widget/stacked-bar-widget.component';
import { TableBasicWidgetComponent } from './table-basic-widget/table-basic-widget.component';
import { TableWidgetComponent } from './table-widget/table-widget.component';
import { WeeklySalesWidgetComponent } from './weekly-sales-widget/weekly-sales-widget.component';
import { pgTabsModule } from '../@pages/components/tabs/tabs.module';
import { NvD3Module } from 'ngx-nvd3';
import { NgxEchartsModule } from 'ngx-echarts';
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { pgSwitchModule } from '../@pages/components/switch/switch.module';
import { pgCardModule } from '../@pages/components/card/card.module';
import { StatTileWidgetComponent } from './stat-tile-widget/stat-tile-widget.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto'
  };
  
@NgModule({
    imports: [
        CommonModule,
        pgCardModule,
        pgTabsModule,
        NvD3Module,
        NgxEchartsModule,
        SwiperModule,
        pgSwitchModule,
    ],
    exports: [
        BarTileWidgetComponent,
        GraphLiveWidgetComponent,
        GraphOptionsWidgetComponent,
        GraphTileFlatWidgetComponent,
        GraphTileWidgetComponent,
        GraphWidgetComponent,
        GraphWidgetBasicComponent,
        ImageWidgetComponent,
        ImageWidgetBasicComponent,
        MapWidgetComponent,
        PlainLiveWidgetComponent,
        PlainWidgetComponent,
        ProgressTileFlatWidgetComponent,
        ProjectProgressWidgetComponent,
        QuickStatsWidgetComponent,
        RealtimeWidgetComponent,
        SocialImageTileWidgetComponent,
        SocialPostTileWidgetComponent,
        StackedBarWidgetComponent,
        StatTileWidgetComponent,
        TableBasicWidgetComponent,
        TableWidgetComponent,
        TodoListWidgetComponent,
        WeatherWidgetComponent,
        WeeklySalesWidgetComponent,
        pgCardModule,
        pgTabsModule,
        NvD3Module,
        NgxEchartsModule,
        SwiperModule,
        pgSwitchModule
    ],
    declarations: [
        BarTileWidgetComponent,
        GraphLiveWidgetComponent,
        GraphOptionsWidgetComponent,
        GraphTileFlatWidgetComponent,
        GraphTileWidgetComponent,
        GraphWidgetComponent,
        GraphWidgetBasicComponent,
        ImageWidgetComponent,
        ImageWidgetBasicComponent,
        MapWidgetComponent,
        PlainLiveWidgetComponent,
        PlainWidgetComponent,
        ProgressTileFlatWidgetComponent,
        ProjectProgressWidgetComponent,
        QuickStatsWidgetComponent,
        RealtimeWidgetComponent,
        SocialImageTileWidgetComponent,
        SocialPostTileWidgetComponent,
        StackedBarWidgetComponent,
        StatTileWidgetComponent,
        TableBasicWidgetComponent,
        TableWidgetComponent,
        TodoListWidgetComponent,
        WeatherWidgetComponent,
        WeeklySalesWidgetComponent
    ],
    providers: [
        {
            provide: SWIPER_CONFIG,
            useValue: DEFAULT_SWIPER_CONFIG
        }
    ],
})
export class WidgetsModule { }
