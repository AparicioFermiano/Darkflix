import { Injectable } from '@angular/core';
import { product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:product[] =
  [
    {
      title: "Coraline: O mundo Sombrio",
      image: "../../assets/image/watch01.jpg",
    },
    {
      title: "Coraline: O mundo Sombrio",
      image: "../../assets/image/watch02.jpg",
    },
    {
      title: "Coraline: O mundo Sombrio",
      image: "../../assets/image/watch01.jpg",
    },
    {
      title: "Coraline: O mundo Sombrio",
      image: "../../assets/image/watch04.jpg",
    },
    {
      title: "Coraline: O mundo Sombrio",
      image: "../../assets/image/watch05.jpg",
    },
    {
      title: "Coraline: O mundo Sombrio",
      image: "../../assets/image/watch04.jpg",
    },


  ]


  constructor() { }
}
