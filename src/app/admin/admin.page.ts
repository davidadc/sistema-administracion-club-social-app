import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.page.html',
  styleUrls: ['admin.page.scss']
})
export class AdminPage {

  public paneEnabled: boolean = false;

  constructor(private menuCtl: MenuController) {}

  async ionViewWillEnter() {
    this.paneEnabled = true;
    const menuId = await this.menuCtl.enable(true, 'second');
  }
  
  ionViewWillLeave() {
    this.paneEnabled = false;
  }

}
