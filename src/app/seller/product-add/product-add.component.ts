import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/dataTypes';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  standalone: false,
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {

  public productMsg: string | undefined
  public isSubmitting = false;

  constructor(private productService: ProductsService){}

  readonly productForm = new FormGroup({
    title: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    price: new FormControl(0, { nonNullable: true, validators: [Validators.required, Validators.min(1)] }),
    color: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    categories: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    desc: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    image: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    size: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  })

  onSubmit(){
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      this.productMsg = 'Fill in all product fields before submitting.';
      this.clearMessageAfterDelay();
      return;
    }

    const productData = this.productForm.getRawValue() as Product;
    this.isSubmitting = true;

    this.productService.createProduct(productData).subscribe({
      next: () => {
        this.productMsg = 'Product saved successfully.';
        this.productForm.reset({
          title: '',
          price: 0,
          color: '',
          categories: '',
          desc: '',
          image: '',
          size: ''
        });
        this.clearMessageAfterDelay();
      },
      error: (err) => {
        this.productMsg = err?.error?.msg || err?.error?.message || 'Unable to save the product.';
        this.isSubmitting = false;
        this.clearMessageAfterDelay();
      },
      complete: () => {
        this.isSubmitting = false;
      }
    })
  }

  clearMessageAfterDelay(){
    setTimeout(() => {
      this.productMsg = undefined
    }, 4000);
  }

}
