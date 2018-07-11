import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DefaultLayoutComponent} from './layout/default-layout/default-layout.component';
import {BlankComponent} from './@pages/layouts/blank/blank.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },
    children: [
      {path: '', component: HomeComponent, pathMatch: 'full'}
    ],
  },
  {
    path: 'auth',
    component: BlankComponent,
    loadChildren: './auth/auth.module#AuthModule',
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: './admin/admin.module#AdminModule',
  }
];
