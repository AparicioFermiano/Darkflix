import { ProductsListComponent } from './../components/products/products-list/products-list.component';
import { ProductsComponent } from './../components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'filmes',
    pathMatch: 'full'
  },
  {
    path: 'filmes',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
