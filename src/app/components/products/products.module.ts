import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule


  ]
})
export class ProductsModule { }
