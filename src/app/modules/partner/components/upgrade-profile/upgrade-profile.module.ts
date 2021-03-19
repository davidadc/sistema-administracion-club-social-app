import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UpgradeProfileComponent } from './upgrade-profile.component';
import { ProfileRoutingModule } from './upgrade-profile-routing.module';




@NgModule({
  declarations: [UpgradeProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileRoutingModule,
    
    ReactiveFormsModule
  ]
})
export class UpgradeProfileModule { }
