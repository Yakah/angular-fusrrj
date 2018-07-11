import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
      path: 'admin',
      component: AdminLayoutComponent
    },
    {
      path: 'default',
      component: DefaultLayoutComponent
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LayoutRoutingModule { }
