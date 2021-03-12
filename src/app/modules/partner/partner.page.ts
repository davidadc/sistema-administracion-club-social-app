import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-partner',
  templateUrl: 'partner.page.html',
  styleUrls: ['partner.page.scss']
})
export class PartnerPage {

  public paneEnabled: boolean = false;

  constructor(private menuCtl: MenuController) {}

  async ionViewWillEnter() {
    
    this.paneEnabled = true;
    const menuId = await this.menuCtl.enable(true, 'first');
    
    
  }
  
  ionViewWillLeave() {
    
    this.paneEnabled = false;
  }

}
