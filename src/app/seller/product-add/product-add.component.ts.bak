import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { Product } from '../../models/dataTypes';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  standalone: false,
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {

  public productMsg: string | undefined

  constructor(private productService: ProductsService, private router: Router){}

  productForm = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(0),
    color: new FormControl(''),
    categories: new FormControl(''),
    desc: new FormControl(''),
    image: new FormControl(''),
    size: new FormControl('')
  })

  onSubmit(){
    let productData = this.productForm!.value as Product
    this.productService.createProduct(productData).subscribe((res)=>{
      // console.log('rf', res);
      if(res && res._id){
        this.productMsg = 'Product is successfully added'
      }     
      this.getTimeout()
    }, (err)=>{
      if(err){
        // console.log(err.message);
        this.productMsg = 'Please Add Unique Name Or Add A Valid Price'
      }
      this.getTimeout()
    })
  }

  getTimeout(){
    setTimeout(() => {
      this.productMsg = undefined
      this.productForm.reset()
    }, 4000);
  }

}
