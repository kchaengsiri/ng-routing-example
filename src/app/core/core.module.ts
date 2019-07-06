import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    PageNotFoundComponent,
    LoginLayoutComponent,
    AppLayoutComponent
  ],
  exports: [AppLayoutComponent]
})
export class CoreModule {}
