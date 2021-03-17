import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { IonicModule } from '@ionic/angular';
import { RegisterRoutingModule } from './register-routing.module';
import { AuthModule } from '../auth.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    IonicModule,
    CommonModule,
    RegisterRoutingModule,
    AuthModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
