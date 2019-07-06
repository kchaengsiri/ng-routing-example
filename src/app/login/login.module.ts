import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { ForgetFormComponent } from './forget-form/forget-form.component';

@NgModule({
  imports: [CommonModule, LoginRoutingModule],
  declarations: [LoginFormComponent, ForgetFormComponent]
})
export class LoginModule {}
