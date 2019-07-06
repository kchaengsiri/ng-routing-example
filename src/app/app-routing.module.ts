import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AppLayoutComponent } from './core/app-layout/app-layout.component';
import { LoginLayoutComponent } from './core/login-layout/login-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'devices',
        loadChildren: 'app/devices/devices.module#DevicesModule'
      },
      {
        path: 'locations',
        loadChildren: 'app/locations/locations.module#LocationsModule'
      },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/login/login.module#LoginModule'
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
