import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PartnerService } from '../../partner.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  
  public editValues:boolean = false
  private user;  
  public editProfileForm: FormGroup;

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
      }
    });
  }

  editDates() {
    this.editValues=!this.editValues;
    if(this.editValues) {
      this.editProfileForm.get('name').enable();
      this.editProfileForm.get('email').enable();
      this.editProfileForm.get('phone').enable();
      this.editProfileForm.get('password').enable();
      this.editProfileForm.get('confirmPassword').enable();
    } else {
      this.editProfileForm.get('name').disable();
      this.editProfileForm.get('email').disable();
      this.editProfileForm.get('phone').disable();
    }
  }

  initializeForm(): void {
    this.editProfileForm = this.fb.group({
      name: [{value:"", disabled: true}, Validators.required],
      email: [{value:"", disabled: true}, [Validators.required, Validators.email]],
      phone: [{value:"", disabled: true},  Validators.required],
      password: [
        {value:"", disabled: true},
        [
          Validators.required,
          Validators.pattern(
            "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
          ),
        ],
      ],
      confirmPassword: [
        {value:"", disabled: true},
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
      this.editProfileForm.get("password").value ==
      this.editProfileForm.get("confirmPassword").value
    );
  }

  updateUser() {
    this.partnerService
      .updateUser(this.editProfileForm.value)
      .subscribe((data) => {
        console.log(data);
        this.editValues= !this.editValues;
        this.editProfileForm.get('name').disable();
        this.editProfileForm.get('email').disable();
        this.editProfileForm.get('phone').disable();
        this.router.navigate(["/partner/profile"]);
      });
  }


}
