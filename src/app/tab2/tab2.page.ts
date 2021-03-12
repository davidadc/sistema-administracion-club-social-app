import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public paneEnabled: boolean = false;

  constructor(private menuCtl: MenuController) {}

  async ionViewWillEnter() {
    console.log('tab2.ionViewWillEnter()');
    this.paneEnabled = true;
    const menuId = await this.menuCtl.enable(true, 'second');
    console.log('menuId: ', menuId);
  }
  
  ionViewWillLeave() {
    console.log('tab2.ionViewWillLeave()');
    this.paneEnabled = false;
  }

}
