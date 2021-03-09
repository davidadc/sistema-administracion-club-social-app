import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    AdminRoutingModule
  ],
})
export class AdminModule { }
