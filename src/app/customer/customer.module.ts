import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaymentsPageModule } from '../payments/payments.module';

// import { CustomerRoutingModule } from './customer-routing.module';
// import { ShopComponent } from './shop/shop.component';
// import { ProductDetailsComponent } from './product-details/product-details.component';
// import { SearchComponent } from './search/search.component';
// import { CartComponent } from './cart/cart.component';
// import { CheckoutComponent } from './checkout/checkout.component';
// import { OrderComponent } from './order/order.component';
// import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShopComponent,
    ProductDetailsComponent,
    SearchComponent,
    CartComponent,
    CheckoutComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    PaymentsPageModule
  ]
})
export class CustomerModule { }
