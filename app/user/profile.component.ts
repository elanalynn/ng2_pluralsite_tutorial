import { Component, Inject, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Rx'
import { IToastr, TOASTR_TOKEN  } from '../common/toastr.service'
import { AuthService } from './auth.service'

@Component({
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5 }
    .error ::-webkit-input-placeholder { color: #999 }
    .error ::-moz-placeholder { color: #999 }
    .error :-moz-placeholder { color: #999 }
    .error :-ms-placeholder { color: #999 }
    `,
  ],
  templateUrl: 'app/user/profile.component.html',
})

export class ProfileComponent implements OnInit{
  private profileForm: FormGroup
  private firstName: FormControl
  private lastName: FormControl

  constructor(
    private router: Router,
    private authService: AuthService,
    @Inject(TOASTR_TOKEN) private toastr: IToastr,
  ) {}

  public ngOnInit() {
    this.firstName = new FormControl(
      this.authService.currentUser.firstName,
      [Validators.required,
      Validators.pattern('[a-zA-Z].*')],
     )
    this.lastName = new FormControl(
      this.authService.currentUser.lastName,
      [Validators.required,
      Validators.pattern('[a-zA-Z].*')])
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    })
  }

  public cancel() {
    this.router.navigate(['/events'])
  }

  public saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName).subscribe(() => {
        this.toastr.success('Profile Saved')
      })
    }
  }

  public validateFirstName( ) {
    return this.firstName.valid || this.firstName.untouched
  }

  public validateLastName() {
    return this.lastName.valid || this.lastName.untouched
  }

  public logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/user/login'])
    })
  }
}
