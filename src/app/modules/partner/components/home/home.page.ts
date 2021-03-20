import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../../partner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private user;

  constructor(private partnerService: PartnerService) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.partnerService.getUserData().subscribe((data: any) => {
      if (data) {
        this.user = data.data;
      }
    });
  }
}
