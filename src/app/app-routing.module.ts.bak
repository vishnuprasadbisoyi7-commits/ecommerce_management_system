import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './customer/shop/shop.component';
import { ProductDetailsComponent } from './customer/product-details/product-details.component';
import { SearchComponent } from './customer/search/search.component';
import { CartComponent } from './customer/cart/cart.component';
import { customerAuthGuard } from './guards/customer-auth.guard';
import { CheckoutComponent } from './customer/checkout/checkout.component';
import { OrderComponent } from './customer/order/order.component';
import { sellerAuthGuard } from './guards/seller-auth.guard';
import { ProductsComponent } from './seller/products/products.component';
import { ProductAddComponent } from './seller/product-add/product-add.component';
import { ProductUpdateComponent } from './seller/product-update/product-update.component';
import { Views } from './misc/views/views.component';

const routes: Routes = [
  {path: '', component: Views},
  {path: 'customer', canActivate: [customerAuthGuard], children:[
    {path: '', redirectTo: 'shop', pathMatch: 'full'},
    {path: 'shop', component: ShopComponent},
    {path: 'product-details/:_id', component: ProductDetailsComponent},
    {path: 'search/:params', component: SearchComponent},
    {path: 'cart', component: CartComponent, canActivate: [customerAuthGuard]},
    {path: 'checkout', component: CheckoutComponent, canActivate: [customerAuthGuard]},
    {path: 'orders', component: OrderComponent, canActivate: [customerAuthGuard]}
  ]},
   {path: 'seller', canActivate: [sellerAuthGuard], children:[
      {path: '', redirectTo: 'products', pathMatch: 'full'},
      {path: 'products', component: ProductsComponent},
      {path: 'upload', component: ProductAddComponent},
      {path: 'update/:_id', component: ProductUpdateComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
