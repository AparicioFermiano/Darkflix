import { HttpClient, HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsCreateComponent } from './products-create/products-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductsCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
})


export class ProductsModule { }
