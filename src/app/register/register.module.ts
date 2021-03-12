import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { IonicModule } from '@ionic/angular';
import { RegisterRoutingModule } from './register-routing.module';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    IonicModule,
    CommonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
