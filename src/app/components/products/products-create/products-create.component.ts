import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ControlErrorService } from './../../../shared/control-error.service';
import { ProductService } from './../../../services/product.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ajr-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  public FormProducts!: FormGroup


  // public categoryList =
  // [{name: 'Arizona', abbrev: 'AZ'},
  // {name: 'California', abbrev: 'CA'},
  // {name: 'Colorado', abbrev: 'CO'},
  // {name: 'New York', abbrev: 'NY'},
  // {name: 'Pennsylvania', abbrev: 'PA'}];


  constructor(private fb: FormBuilder, private ps:ProductService, public controlError: ControlErrorService, public dialog: MatDialog) {

    this.FormProducts = this.fb.group({
      title: [null, [
        Validators.required
      ]],
      description: [null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(160)],
    ],
      cover: [null, [
        Validators.required
      ]],
      category: [null, [
        Validators.required
      ]],
      classification: [null, [
        Validators.required
      ]],
    }
    )

  }

  ngOnInit(): void {

  }

  cadastrar(): void{
    this.FormProducts.markAllAsTouched()
    if (this.FormProducts.invalid){
       return;
    }
    else{
      console.log('sucesso')
      this.ps.onCreate(
        this.FormProducts.value.title,
        this.FormProducts.value.description,
        this.FormProducts.value.cover,
        this.FormProducts.value.category,
        this.FormProducts.value.classification
      ).subscribe(() => {

      })
    }
  }


}



  // validator = this.FormProducts.controls.description.value == false


    // this.newProducts.valid == true ?
    // console.log(this.newProducts) :
    // console.log('error')



