import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';




@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileRoutingModule,
    
  ]
})
export class ProfileModule { }