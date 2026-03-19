import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerModule } from './customer/customer.module';
import { SellerModule } from './seller/seller.module';
import { SignupModule } from './signup/signup.module';
import { HttpClientModule } from '@angular/common/http';
import { Sidebar } from './misc/sidebar/sidebar';
import { Views } from './misc/views/views.component';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HeadersComponent } from './headers/headers.component';
// import { CustomerModule } from './customer/customer.module';
// import { SellerModule } from './seller/seller.module';
// import { SignupModule } from './signup/signup.module';
// import { HttpClientModule } from '@angular/common/http';
// import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    NotFoundComponent,
    Sidebar,
    Views
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    CustomerModule,
    SellerModule,
    SignupModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
