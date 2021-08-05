import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'ajr-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  public FormProducts!: FormGroup

  constructor(private formBuilder: FormBuilder) {

    this.FormProducts = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(3)]],
      cover: [null, [Validators.required, Validators.minLength(3)]],
      category: [null, [Validators.required, Validators.minLength(3)]],
      classification: [null, [Validators.required, Validators.minLength(3)]],
    })

  }

  ngOnInit(): void {
    console.log(this.FormProducts.value)
  }


  cadastrar(){
    this.FormProducts.invalid ?
      console.log('Error') :
      console.log(this.FormProducts.value)
  }



    // this.newProducts.valid == true ?
    // console.log(this.newProducts) :
    // console.log('error')


}
