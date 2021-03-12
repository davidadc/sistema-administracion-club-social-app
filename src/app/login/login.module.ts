import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.modules';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    IonicModule,
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
