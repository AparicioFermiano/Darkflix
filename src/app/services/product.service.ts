import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  bdURL = 'http://localhost:3000/products'

  constructor(private http:HttpClient) {}

  onCreate(title: any, description: any, cover: any, category: any, classification: any):Observable<any> {

    const dataProduct:Product = {
      title: title,
      description: description,
      cover: cover,
      category: category,
      classification: classification
    }

    return this.http.post<{mensagem: string, id: string}>(this.bdURL, dataProduct

      )
  }


}
