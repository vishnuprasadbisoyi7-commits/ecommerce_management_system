import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/dataTypes';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-update',
  standalone: false,
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit{

  public productMsg: string | undefined
  public productId: string | undefined
  public product: Product | undefined

  constructor(private productService: ProductsService, private router: Router, 
    private activatedRoute: ActivatedRoute){}

  productUpdateForm = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(0),
    color: new FormControl(''),
    categories: new FormControl(''),
    desc: new FormControl(''),
    image: new FormControl(''),
    size: new FormControl('')
  })

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.productId = params?.['_id']
      this.productId && this.productService.getProduct(this.productId).subscribe((res)=>{
        
        if(res){
          this.productUpdateForm.setValue({
            title: res.title ?? '',
            price: res.price ?? 0,
            color: res.color ?? '',
            categories: res.categories ?? '',
            desc: res.desc ?? '',
            image: res.image ?? '',
            size: res.size ?? ''
          })
        }
      })
    })
  }

  updateProduct(){
    let productData = this.productUpdateForm.value as Product
    if(this.productId){
      productData._id = this.productId
    }  
    this.productService.updateProduct(productData).subscribe((res)=>{
      if(res){
        this.productMsg = 'Product Has Been Successfully Updated'
      } 
      this.getTimeout('suc')
    }, (err)=>{
      if(err){
        this.productMsg = err.statusText
      }
      this.getTimeout('err')
    })
  }

  getTimeout(val: string){
    if(val==='suc'){
      setTimeout(() => {
        this.productMsg = undefined
        this.router.navigate(['/products'])
      }, 2500);
    }else{
      setTimeout(() => {
        this.productMsg = undefined
      }, 4000);
    }
  }
}
