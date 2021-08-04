import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsCreateComponent } from './products-create/products-create.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductsCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule


  ]
})
export class ProductsModule { }
