import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { ProgressModule } from '../@pages/components/progress/progress.module';
import { QuillModule } from 'ngx-quill';
import { pgListViewModule } from '../@pages/components/list-view/list-view.module';
import { pgCardModule } from '../@pages/components/card/card.module';
import { pgCardSocialModule } from '../@pages/components/card-social/card-social.module';
import { pgTabsModule } from '../@pages/components/tabs/tabs.module';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { pgSwitchModule } from '../@pages/components/switch/switch.module';
import { BsDropdownModule, AccordionModule,
  AlertModule, ButtonsModule, CollapseModule, ModalModule,
  ProgressbarModule, TabsModule, TooltipModule, TypeaheadModule } from 'ngx-bootstrap';
import { NvD3Module } from 'ngx-nvd3';
import { NgxEchartsModule } from 'ngx-echarts';
import { IsotopeModule } from 'ngx-isotope';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import { pagesToggleService } from '../@pages/services/toggler.service';
import { QuickviewService } from '../@pages/components/quickview/quickview.service';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { SidebarComponent } from '../@pages/components/sidebar/sidebar.component';
import { QuickviewComponent } from '../@pages/components/quickview/quickview.component';
import { SearchOverlayComponent } from '../@pages/components/search-overlay/search-overlay.component';
import { HeaderComponent } from '../@pages/components/header/header.component';
import { HorizontalMenuComponent } from '../@pages/components/horizontal-menu/horizontal-menu.component';
import { RootLayout } from '../@pages/layouts';
import { SharedModule } from '../@pages/components/shared.module';
import { FormsModule } from '@angular/forms';
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
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    LayoutRoutingModule,
    ProgressModule,
    QuillModule,
    pgListViewModule,
    pgCardModule,
    pgCardSocialModule,
    pgTabsModule,
    PerfectScrollbarModule,
    pgSwitchModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    NvD3Module,
    NgxEchartsModule,
    IsotopeModule,
    NgxDnDModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  declarations: [
  AdminLayoutComponent, DefaultLayoutComponent,
  SidebarComponent,
    QuickviewComponent,
    SearchOverlayComponent,
    HeaderComponent,
    HorizontalMenuComponent,
    RootLayout,
],
  exports: [
    DefaultLayoutComponent,
    AdminLayoutComponent,
    ProgressModule,
    SharedModule,
    QuillModule,
    pgListViewModule,
    pgCardModule,
    pgCardSocialModule,
    pgTabsModule,
    PerfectScrollbarModule,
    pgSwitchModule,
    NvD3Module,
    NgxEchartsModule,
    IsotopeModule,
    NgxDnDModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [
    QuickviewService, pagesToggleService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: AppHammerConfig
    }
  ]
})
export class LayoutModule {}
