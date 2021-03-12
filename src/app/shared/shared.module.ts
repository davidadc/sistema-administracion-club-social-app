import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from './components/explore-container/explore-container.module';



@NgModule({
  declarations: [],
  imports: [
    IonicModule,
    CommonModule,
    ExploreContainerComponentModule
  ],
  exports: [ExploreContainerComponentModule],

})
export class SharedModule { }
