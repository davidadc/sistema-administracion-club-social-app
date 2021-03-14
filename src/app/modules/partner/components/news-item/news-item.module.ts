import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NewsItemComponent } from './news-item.component';
import { NewsItemRoutingModule } from './news-item-routing.module';



@NgModule({
  declarations: [NewsItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    NewsItemRoutingModule
  ]
})
export class NewsItemModule { }
