import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  options = {
    responseType: 'text',
  };


  bdURL = 'http://localhost:3000/products'

  constructor(private http:HttpClient, private snackBar: MatSnackBar) {}

  onCreate(dataProduct:Product):Observable<any> {
    return this.http.post<{ mensagem:string, id:string }>(this.bdURL, dataProduct)
  }


  showMessage(msg: string, isError: Boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      panelClass: isError ?  ['msg-error'] : ['msg-sucess']
    })
  };
}
