import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { Product } from '../models/dataTypes';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly apiUrl = 'http://localhost:8089/api/products/';

  constructor(private http: HttpClient) { }

  getHeaders(){
    const userStore = localStorage.getItem('admin');
    const accessToken = userStore ? JSON.parse(userStore).accessToken : undefined;
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (accessToken) {
      httpHeaders = httpHeaders.set('Authorization', `Bearer ${accessToken}`);
    }

    return httpHeaders;
  }

  errorHandler(error: HttpErrorResponse){
    console.log(error);
    return throwError(() => error);
  }

  createProduct(productData: Product){
    const headers = this.getHeaders();
    const payload = this.mapProductPayload(productData);

    return this.http.post<unknown>(`${this.apiUrl}save`, payload, { headers })
    .pipe(
      map((response) => this.normalizeSingleProduct(response)),
      catchError(this.errorHandler)
    );
  }

  getProducts(){
    const headers = this.getHeaders();

    return this.http.get<unknown>(`${this.apiUrl}getAllProducts`, { headers })
    .pipe(
      map((response) => this.normalizeProductList(response)),
      catchError(this.errorHandler)
    );
  }

  getProduct(productId: string){
    const headers = this.getHeaders();
    return this.http.get<Product>(`${this.apiUrl}${productId}`, { headers })
    .pipe(catchError(this.errorHandler))
  }

  updateProduct(productData: Product){
    const headers = this.getHeaders();
    return this.http.put<Product>(`${this.apiUrl}${productData._id}`, productData, { headers })
    .pipe(catchError(this.errorHandler))
  }

  deleteProduct(productId: string){
    const headers = this.getHeaders();
    return this.http.delete<Product>(`${this.apiUrl}${productId}`, { headers })
    .pipe(catchError(this.errorHandler))
  }

  private mapProductPayload(productData: Product){
    return {
      title: (productData.title ?? '').trim(),
      price: String(productData.price ?? '').trim(),
      color: (productData.color ?? '').trim(),
      categories: (productData.categories ?? '').trim(),
      desc: (productData.desc ?? '').trim(),
      image: (productData.image ?? '').trim(),
      size: String(productData.size ?? '').trim()
    };
  }

  private normalizeSingleProduct(response: unknown): Product {
    const responseObject = response as Record<string, unknown> | null;
    const candidate = responseObject?.['product']
      ?? responseObject?.['data']
      ?? responseObject?.['result']
      ?? responseObject
      ?? {};

    return this.normalizeProduct(candidate);
  }

  private normalizeProductList(response: unknown): Product[] {
    if (Array.isArray(response)) {
      return response.map((product) => this.normalizeProduct(product));
    }

    const responseObject = response as Record<string, unknown> | null;
    const wrappedList = responseObject?.['products']
      ?? responseObject?.['data']
      ?? responseObject?.['result']
      ?? responseObject?.['items'];

    if (Array.isArray(wrappedList)) {
      return wrappedList.map((product) => this.normalizeProduct(product));
    }

    if (responseObject) {
      const firstArrayValue = Object.values(responseObject).find((value) => Array.isArray(value));
      if (Array.isArray(firstArrayValue)) {
        return firstArrayValue.map((product) => this.normalizeProduct(product));
      }
    }

    return [];
  }

  private normalizeProduct(rawProduct: unknown): Product {
    const product = (rawProduct ?? {}) as Record<string, unknown>;

    return {
      _id: String(product['_id'] ?? product['id'] ?? ''),
      title: String(product['title'] ?? ''),
      price: Number(product['price'] ?? 0),
      color: String(product['color'] ?? ''),
      categories: String(product['categories'] ?? ''),
      desc: String(product['desc'] ?? ''),
      image: String(product['image'] ?? ''),
      size: String(product['size'] ?? ''),
      quantity: product['quantity'] ? Number(product['quantity']) : undefined,
      productId: String(product['productId'] ?? product['_id'] ?? product['id'] ?? '')
    };
  }
}
