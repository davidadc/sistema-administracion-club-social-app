import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-partner',
  templateUrl: 'partner.page.html',
  styleUrls: ['partner.page.scss']
})
export class PartnerPage {

  public paneEnabled: boolean = false;

  constructor(private menuCtl: MenuController, private router: Router) {}

  async ionViewWillEnter() {
    
    this.paneEnabled = true;
    const menuId = await this.menuCtl.enable(true, 'first');
    
    
  }
  
  ionViewWillLeave() {
    this.paneEnabled = false;
  }

  logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("id");
    this.router.navigate(["/"]);
  }

}
