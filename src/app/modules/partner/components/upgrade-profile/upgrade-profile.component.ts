import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../../partner.service';

@Component({
  selector: 'app-upgrade-profile',
  templateUrl: './upgrade-profile.component.html',
  styleUrls: ['./upgrade-profile.component.scss'],
})
export class UpgradeProfileComponent implements OnInit {

  public profileType = 0;
  private user;

  constructor(private partnerService: PartnerService) { }

  ngOnInit() {
    this.partnerService.getUserData().subscribe((data: any) => {
      if (data) {
        this.user = data.data;
      }
    });
  }

  radioGroupChange(e) {
    this.profileType = e.detail.value;
  }

  upgrade() {
    console.log(this.profileType, this.user.id)
  }
}
