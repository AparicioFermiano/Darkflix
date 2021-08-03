import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ajr-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  videoMuted = true;
  mutedIcon = 'bi-volume-up';

  constructor() {}

  ngOnInit(): void {}

  Mutar() {
    this.videoMuted == true
      ? (this.videoMuted = false)
      : (this.videoMuted = true);
  }
}
