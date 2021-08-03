import { Injectable } from '@angular/core';
import { product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: product[] = [];

  constructor() {}
}
