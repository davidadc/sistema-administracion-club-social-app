import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PartnerService } from '../../partner.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  private user;
  public editProfileForm: FormGroup;
  public profileType: number = 1;

  constructor(
    private fb: FormBuilder,
    private partnerService: PartnerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.partnerService.getUserData().subscribe((data: any) => {
      if (data) {
        this.user = data.data;
        this.editProfileForm.get("name").setValue(this.user.name);
        this.editProfileForm.get("email").setValue(this.user.email);
        this.editProfileForm.get("phone").setValue(this.user.phone);
        if (this.user.partner && this.user.partner.qualification) {
          this.profileType = this.user.partner.qualification;
        }
      }
    });
  }



  initializeForm(): void {
    this.editProfileForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
          ),
        ],
      ],
      confirmPassword: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
          ),
        ],
      ],
    });
  }

  get name() {
    return this.editProfileForm.get("name");
  }

  get phone() {
    return this.editProfileForm.get("phone");
  }

  get email() {
    return this.editProfileForm.get("email");
  }

  get password() {
    return this.editProfileForm.get("password");
  }

  get confirmPassword() {
    return this.editProfileForm.get("confirmPassword");
  }

  get confirmPasswordValue() {
    return (
      this.editProfileForm.get("password").value ===
      this.editProfileForm.get("confirmPassword").value
    );
  }

  updateUser() {
    this.partnerService
      .updateUser(this.editProfileForm.value)
      .subscribe((data) => {
        this.router.navigate(["/partner/profile"]);
      });
  }

  radioGroupChange(e) {
    this.profileType = e.detail.value;
  }

  updateProfileMembership() {
    if (this.profileType == 0) {
      this.partnerService
          .deletePartnerProfile(this.user.partner.id)
          .subscribe((data) => {
            this.router.navigate(["/partner/profile"]);
          });
    }
    if (
        this.user.partner.qualification !== this.profileType &&
        this.profileType != 0
    ) {
      let body = {
        qualification: this.profileType,
      };
      this.partnerService
          .updateMembership(this.user.partner.id, body)
          .subscribe((data) => {
            this.router.navigate(["/partner/profile"]);
          });
    }
  }
}
