import { Binary } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  videoMuted:boolean = true
  mutedIcon = "bi-volume-up"

  constructor() { }

  ngOnInit(): void {
  }




  Mutar(){
    this.videoMuted == true ? this.videoMuted = false : this.videoMuted = true
  }

}

