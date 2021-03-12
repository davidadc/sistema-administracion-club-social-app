import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerPage } from './partner.page';

const routes: Routes = [
  {
    path: '',
    component: PartnerPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('./components/news/news.module').then(m => m.NewsPageModule)
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerPageRoutingModule {}
