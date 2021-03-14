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
        path: 'profile',
        loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'news/1',
        loadChildren: () => import('./components/news-item/news-item.module').then(m => m.NewsItemModule)
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
