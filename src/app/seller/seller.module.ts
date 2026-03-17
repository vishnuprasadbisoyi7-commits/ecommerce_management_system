import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { SellerRoutingModule } from './seller-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import { SellerRoutingModule } from './seller-routing.module';
// import { ProductsComponent } from './products/products.component';
// import { ProductAddComponent } from './product-add/product-add.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { ProductUpdateComponent } from './product-update/product-update.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductAddComponent,
    ProductUpdateComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SellerModule { }
