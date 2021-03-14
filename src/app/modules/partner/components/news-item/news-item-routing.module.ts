import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsItemComponent } from './news-item.component';

const routes: Routes = [
  {
    path: '',
    component: NewsItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsItemRoutingModule {}