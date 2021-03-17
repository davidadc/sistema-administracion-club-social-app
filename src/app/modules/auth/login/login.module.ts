import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.modules';
import { IonicModule } from '@ionic/angular';
import { AuthModule } from '../auth.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    IonicModule,
    CommonModule,
    LoginRoutingModule,
    AuthModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
