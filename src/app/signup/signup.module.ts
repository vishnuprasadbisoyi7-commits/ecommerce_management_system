import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { SignupRoutingModule } from './signup-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import { SignupRoutingModule } from './signup-routing.module';
// import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
// import { SellerSignupComponent } from './seller-signup/seller-signup.component';
// import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerSignupComponent,
    SellerSignupComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SignupModule { }
