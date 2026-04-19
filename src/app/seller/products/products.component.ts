import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/dataTypes';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  public pageMsg: string | undefined
  public isLoading = false;
  public allProducts: Product[] = [];

  constructor(private productService: ProductsService){}

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    this.isLoading = true;
    this.pageMsg = undefined;
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.isLoading = false;
        this.allProducts = res;
        this.pageMsg = res.length ? undefined : 'No products found yet.';
      },
      error: (err) => {
        this.isLoading = false;
        this.allProducts = [];
        this.pageMsg = err?.error?.msg || err?.error?.message || err?.statusText || 'Unable to load seller products.';
      }
    })
  }
}
