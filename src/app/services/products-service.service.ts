import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly productsUrl = {
    list: `${environment.api_url_products}`,
  };

  constructor(private http: HttpClient) {}

  /** GET list products */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl.list);
  }
}
