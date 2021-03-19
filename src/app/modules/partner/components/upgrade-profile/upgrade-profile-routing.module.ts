import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpgradeProfileComponent } from './upgrade-profile.component';

const routes: Routes = [
  {
    path: '',
    component: UpgradeProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}